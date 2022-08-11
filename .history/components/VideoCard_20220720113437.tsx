import React,  { useState, useEffect } from 'react'
import { Video } from '../types'
import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsPlay, BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import { GiVideoConference } from 'react-icons/gi'


interface IProps {
    post: Video
}

const VideoCard: NextPage<IProps> = ({post}) => {
    const [isHover, setIsHover ] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

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
                        <div className={styles.postedBy}>
                            <p className={styles.postedText}>
                                {post.postedBy.userName} {`
                                `}
                                <GoVerified className={styles.verified} />
                            </p>
                            <p className={styles.username}>
                                {post.postedBy.userName}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div> 
        <div className={styles.videoposted}>
            <div 
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}
             className={styles.postedVideo}
            >
                <Link href="/">
                    <video
                      loop
                      className={styles.videoOn}
                      src={post.video.asset.url}
                    >

                    </video>
                </Link>
                {isHover && (
                    <div>

                    </div>
                )}
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
    verified:`text-blue-400 text-md`,
    postedBy:`flex items-center gap-3`,
    postedText:`flex items-center gap-2 md:text-md font-bold text-primary`,
    username:`capitalize font-medium text-xs text-gray-500 hidden md:block`,
    videoposted: `lg:ml-20 flex gap-4 relative`,
    postedVideo:`rounded-3xl`,
    videoOn:`lg:w-[600px] h-[300px] md:h-[400px] lg:h-[560px] w-[200px] rounded-2xl cursor-pointer bg-gray-100`
}