import React from 'react'

const MatrixBox = ({color,handleClick}) => {

  return (
    <div className={`border-2 border-black ${color}`} onClick={handleClick}></div>
  )
}

export default MatrixBox