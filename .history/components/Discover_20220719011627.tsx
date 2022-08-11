import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { topics } from '../utils/constants'

const Discover = () => {
    const router = useRouter()
    const { topic } = router.query

  return (
    <div className={styles.wrapper}>
        <p className={styles.topic}>
            Popular Topics
        </p>
        <div className={styles.topics}>
            {topics.map((item) => (
                <Link href={`/?topic=${item.name}`} key={item.name}>
                    <div className={styles.topicStyle}>
                        <span className={styles.icon}>
                            {item.icon}
                        </span>
                        <span className={styles.name}>
                            {item.name}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Discover

const styles ={
    wrapper:`xl:border-b-2 xl:border-gray-200 pb-6`,
    topic:`text-gray-500 font-semibold m-3 mt-4 hidden xl:block`,
    topics:`flex gap-3 flex-wrap`,
    icon:`font-bold text-2xl xl:text-md cursor-pointer`,
    name:`font-medium text-md hidden xl:block capitalize cursor-pointer`,
    activeTopic:`xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-3 
                justify-center cursor-pointer text-[#FF1997]`,
    topicStyle:`xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-3 
              justify-center cursor-pointer text-black`
}