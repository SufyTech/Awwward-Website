import React from 'react'
import { TiLocationArrow } from "react-icons/ti";


const Button = ({title, id, leftIcon,rightIcon , containerClass,}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit 
        cursor-pointer overflow-hidden rounded-full px-7 py-3
        text-black ${containerClass}`}>
          {leftIcon} 

          <span className="relative inline-flex overflow-hidden
          font-general text-xs uppercase">
            <div>
                {title}
            </div>
            </span> 
            {rightIcon}
        </button>
  )
}

export default Button