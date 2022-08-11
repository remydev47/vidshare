import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null
  
  return (
    <div>
      NavBar
       <div>   {/* wrapperContainer */}
        <div>   {/* wrapper */}
          Sidebar
        </div>
      </div>
      return <Component {...pageProps} />
    </div>
  )

}

export default MyApp;

const styles = {
  wrapperContainer: `flex gap-6 md:gap-20`,
  wrapper: `h-[92vh] overflow-hidden xl:hover:overflow-auto`
}
