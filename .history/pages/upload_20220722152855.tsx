import React,{ useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import useAuthStore from '../store/authStore'
import { client } from '../utils/client'

const Upload = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [videoAsset, setVideoAsset] = useState(null)
    const [wrongFile, setWrongFile] = useState(false)

    const upLoadVideo = async(e: any) => {
        const selectedFile = e.target.files[0]
        const fileTypes = ['video/mp4', 'video/webm', 'video/ogg']

        if(fileTypes.includes(selectedFile.type)) {
            client.assets.upload("file", selectedFile{
                contentType: selectedFile.type,
                filename: selectedFile.name
            })
        }else{
            setIsLoading(false)
            setWrongFile(true)
        }
    }

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
                                    <p className={styles.selectFile}>
                                        Select File
                                    </p>
                                  </div>
                                  <input 
                                    className={styles.inputContainer}
                                    onChange={upLoadVideo}
                                    type="file"
                                    name="upload-Video"
                                  />
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
    UploadText:`text-gray-400 text-center mt-10 text-sm leading-10`,
    selectFile:`bg-[#F51997] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none`,
    inputContainer:`w-0 h-0 `
}