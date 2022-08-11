import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { topics } from '../utils/constants'

const Discover = () => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.topic}>
            Popular Topics
        </p>
        <div className={styles.topics}>
            {topics.map((item) => (
                <Link href={`/?topic=${item.name}`} key={item.name}>
                    <div>
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
    icon:`font-bold text-2xl xl:text-md`
}