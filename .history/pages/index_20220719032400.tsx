import type { NextPage } from 'next'
import axios from 'axios'

interface IProps {
  videos: 
}

const Home: NextPage = ({ videos }) => {
  return (
    <h1 className="text-3xl font-bold underline">
       Hello world!
    </h1>
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
