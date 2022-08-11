import React from 'react'
import { Video } from '../types'
import { NextPage } from 'next'

interface IProps {
    post: Video
}

const VideoCard: NextPage<IProps> = () => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard