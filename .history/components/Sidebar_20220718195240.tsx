import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import GoogleLogin from 'react-google-login'
import {AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div>
        <div 
          className={styles.container}
          onClick={() => {
            setShowSidebar((prev) => (!prev))
          }}
         >
            {showSidebar ? <ImCancelCircle /> : 
             <AiOutlineMenu />
            }
        </div>
        {showSidebar && (
            <div className={styles.sideBar}>

            </div>
        )}
    </div>
  )
}

export default Sidebar;

const styles = {
    container: `block xl:hidden m-2 ml-4 mt-3 text-xl`,
    sideBar:`xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3`
}