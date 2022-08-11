import React,{ useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import useAuthStore from '../store/authStore'
import { client } from '../utils/client'

const Upload = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [videoAsset, setVideoAsset] = useState(null)

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div>
                <div>
                    <p className={styles.upload}>Upload a Video</p>
                    <p className={styles.post}>Post a video on Yor Account</p>
                </div>
                <div className={styles.input}>
                    {isLoading ? (
                        <p>Uploading...</p>
                    ) : (
                        <div className={styles.videoAsset}>
                            {videoAsset ? (
                                <div>

                                </div>
                            ) : (
                                <label className="cursor-pointer">
                                    <div className={styles.label}>
                                     <div className={styles.label1}>
                                     </div>
                                     <p className="font-bold text-xl">
                                      <FaCloudUploadAlt  className={styles.cloud}/>
                                     </p>
                                     <p className="text-xl font-semibold">
                                        Upload Video
                                     </p>
                                    </div>
                                    <p className={styles.UploadText}>
                                        MP or WebM, Ogg <br/>
                                        720x1280 or Higher <br/>
                                        upto 10 minutes <br/>
                                        Les than 2GB
                                    </p>
                                </label>
                            )}
                        </div>
                    )}
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
          mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-400 hover:bg-gray-100`,
    videoAsset:``,
    label:`flex flex-col items-center justify-center h-full`,
    label1:`flex flex-col items-center justify-center`,
    cloud:`text-gray-400 text-6xl`,
    UploadText:`text-gray-400 text-center mt-10 text-sm `
}