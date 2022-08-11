import type { NextPage } from 'next'
import axios from 'axios'
import { Video } from '../types'
import VideoCard from '../components/VideoCard'
import NoResults from '../components/NoResults'

interface IProps {
  videos: Video[]
}

const Home = ({ videos } : IProps) => {
  console.log('videos')
  return (
   <div className={styles.container}>
    {videos.length ? (
      videos.map((video: Video) =>  (
        <VideoCard post={video} key={video._id} />
      ))
    ) : (
      <NoResults text={'No Videos'} />
    )}
   </div>
  )
}

export const getServerSideProps = async () =>  {
   const { data } = await axios.get(`http://localhost:3000/api/post`)
   return {
    props: {
      videos: data
    }
   }
}

export default Home

const styles = {
  container : `flex flex-col gap-10 videos h-full`
}
