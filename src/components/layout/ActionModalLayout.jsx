import React from 'react'

function ActionModalLayout({ children }) {
    return (
        <div className='px-8 py-6 rounded-sm w-[734px] h-[737px] bg-white border-2 border-[#BDBDBD] !text-black overflow-y-scroll'>
            {children}
        </div>
    )
}

export default ActionModalLayout