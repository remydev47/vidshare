import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import GoogleLogin from 'react-google-login'
import {AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    
  return (
    <div>
        <div className={styles.container}>

        </div>
    </div>
  )
}

export default Sidebar;

const styles = {
    container: `block xl:hidden m-2 ml-4 mt-3 text-xl`
}