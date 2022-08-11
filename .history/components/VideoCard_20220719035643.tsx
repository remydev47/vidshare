import React,  { useState, useEffect } from 'react'
import { Video } from '../types'
import Image from 'next/image'
import { NextPage } from 'next'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'

interface IProps {
    post: Video
}

const VideoCard: NextPage<IProps> = ({post}) => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard