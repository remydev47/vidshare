import React from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footerlist1}>
            {footerList1.map((item) => (
                <p>
                    {item}
                </p>
            ))}
        </div>
    </div>
  )
}

export default Footer;

const styles = {
    container:`mt-6 hidden xl-block`,
    footerlist1:`flex flex-wrap gap-2 mt-5`
}