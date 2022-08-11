import React,{ useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import useAuthStore from '../store/authStore'
import { client } from '../utils/client'

const Upload = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}></div>
    </div>
  )
}

export default Upload

const styles = {
    container:`flex w-full h-full`,
    wrapper:`bg-white rounded-lg`
}