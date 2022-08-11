import React from 'react'

interface IProps {
  text: string
}

const NoResults = ({text} : IProps) => {
  return (
    <div className={styles.container}>

    </div>
  )
}

export default NoResults

const styles = {
  container:``
}