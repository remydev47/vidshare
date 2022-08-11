import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import Logo from '../utils/tiktik-logo.png'
import { createOrGetUser } from '../utils';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <div className={styles.wrapper}>
        <Link href="/">
           <div className={styles.imageContainer}>
              <Image 
                className='cursor-pointer'
                src={Logo}
                alt="TikTik"
                layout="responsive"
              />
           </div>
        </Link>
        <div>SEARCH</div>
        <div>
          {userProfile ? (
            <div className={styles.profile}>
              <Link href="/upload">
                <button className={styles.button}>
                  <IoMdAdd className='text-xl'/> {` `}
                  <span className={styles.upload}>Upload</span>
                </button>
              </Link>
              {userProfile.image && (
                <Link href="/">
                  <>
                     <Image 
                        width={40}
                        height={40}
                        className="rounded-full cursor-pointer"
                        src={userProfile.image} 
                        alt="profile photo"
                        layout="responsive"
                     />
                  </>
                </Link>
              )}
              <button 
               type="button"
               className="px-2"
               onClick={() => {
                googleLogout();
                removeUser();
               }}
              >
                <AiOutlineLogout color='red' fontSize={21} />
              </button>
            </div>
          ): (
            <GoogleLogin 
              onSuccess={(response) => createOrGetUser
                (response, addUser)}
              onError={() => console.log("Error")}
            />
          )}
        </div>
    </div>
  )
}

export default Navbar;

const styles = {
    wrapper: `w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4`,
    imageContainer: `w-[100px] md:w-[130px]`,
    profile:`flex gap-5 md:gap-10 `,
    button: `border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2`,
    upload: `hidden md:block`
}