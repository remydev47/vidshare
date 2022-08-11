import React from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'

const List = ({ items }: {items: string[] }) => (
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
        <List items={footerList1}/>
        <List items={footerList2} />
        <List items={footerList3} />
    </div>
  )
}

export default Footer;

const styles = {
    container:`mt-6 hidden xl:block`,
    footerlist1:`flex flex-wrap gap-2 mt-5`,
    itemText:`text-gray-400 text-sm hover:underline cursor-pointer`
}