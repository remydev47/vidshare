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
       <div className={styles.wrapperContainer}>   {/* wrapperContainer */}
        <div  className={styles.wrapper}>   {/* wrapper */}
          Sidebar
        </div>
        <div className={styles.component}>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )

}

export default MyApp;

const styles = {
  wrapperContainer: `flex gap-6 md:gap-20`,
  wrapper: `h-[92vh] overflow-hidden xl:hover:overflow-auto`,
  component:`mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1`
}
