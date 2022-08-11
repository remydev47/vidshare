import React,{ useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import useAuthStore from '../store/authStore'
import { client } from '../utils/client'

const Upload = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div>
                <div>
                    <p className={styles.upload}>Upload a Video</p>
                    <p className={styles.post}>Post a video on Yor Account</p>
                </div>
                <div className={styles.input}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Upload

const styles = {
    container:`flex w-full h-full`,
    wrapper:`bg-white rounded-lg`,
    upload: `text-2xl font-bold`,
    post: `text-md text-gray-400 mt-1`,
    input:`border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none 
          mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-400 hover:bg-gray-100`
}