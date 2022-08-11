import React,  { useState, useEffect } from 'react'
import { Video } from '../types'
import Image from 'next/image'
import { NextPage } from 'next'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsPlay, BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'


interface IProps {
    post: Video
}

const VideoCard: NextPage<IProps> = ({post}) => {
  return (
    <div className={styles.container}></div>
  )
}

export default VideoCard

const styles = {
    container:`flex flex-col border-b-2 border-gray-200 pb-6`
}