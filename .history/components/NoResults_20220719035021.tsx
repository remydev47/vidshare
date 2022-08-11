import React from 'react'

interface IProps {
  text: string
}

const NoResults = ({text} : IProps) => {
  return (
    <div>NoResult</div>
  )
}

export default NoResults