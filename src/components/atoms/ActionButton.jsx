import React from 'react'

function ActionButton({text, ...rest}) {
  return (
    <button 
    {...rest}
    className='bg-[#2F80ED] rounded-md text-white font-medium px-[16px] py-[14px]'
    >
        {text}
    </button>
  )
}

export default ActionButton