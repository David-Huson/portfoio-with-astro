import React from 'react'
import { FiArrowRight } from 'react-icons/fi/index'
function SeeMoreLink(props) {
  return (
    <div className={`%{props.className + "hidden lg:flex items-center absolute bottom-0 right-0 p-2 space-x-2"}`}>
        <span>See More</span>
        <FiArrowRight className="inline-block" />
      </div>
  )
}

export default SeeMoreLink