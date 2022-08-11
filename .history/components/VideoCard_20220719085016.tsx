import React,  { useState, useEffect } from 'react'
import { Video } from '../types'
import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsPlay, BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'


interface IProps {
    post: Video
}

const VideoCard: NextPage<IProps> = ({post}) => {
  return (
    <div className={styles.container}>
        <div>
            <div className={styles.videoContainer}>
                <div className={styles.video}>
                    <Link href="/">
                        <Image
                          width={62}
                          height={62}
                          className="rounded-full"
                          src={post.postedBy.image} 
                          alt="profile photo"
                          layout="responsive"
                        />
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <div>
                            <p>{post.postedBy.userName}</p>
                            <GoVerified className={styles.verified} />
                        </div>
                    </Link>

                </div>
            </div>
        </div>   
    </div>
  )
}

export default VideoCard

const styles = {
    container:`flex flex-col border-b-2 border-gray-200 pb-6`,
    videoContainer: `flex gap-3 p-2 cursor-pointer font-semibold rounded`,
    video: `md:w-16 md:h-16 w-10 h-10`,
    verified:`text-blue-400 text-md`
}