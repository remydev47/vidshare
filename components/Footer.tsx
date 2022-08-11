import React from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'

const List = ({ items, mt }: {items: string[] ; mt: boolean }) => (
    <div className={styles.footerlist1}>
        {items.map((item) => (
            <p key={item} className={styles.itemText}>
                {item}
            </p>
        ))}
    </div>
)

const Footer = () => {

  return (
    <div className={styles.container}>
        <List items={footerList1} mt={false}/>
        <List items={footerList2} mt/>
        <List items={footerList3} mt/>
        <p className={styles.tiktik}> 2023 TikTik</p>
    </div>
  )
}

export default Footer;

const styles = {
    container:`mt-6 hidden xl:block`,
    footerlist1:`flex flex-wrap gap-2 mt-5`,
    itemText:`text-gray-400 text-sm hover:underline cursor-pointer`,
    tiktik:`text-gray-400 text-sm mt-5`
}