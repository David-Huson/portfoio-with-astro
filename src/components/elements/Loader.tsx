import React from 'react'
import {Triangle} from 'react-loader-spinner'

function Loader() {
  return (
      <Triangle
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="triangle-loading"
    visible={true}
  />
  )
}

export default Loader