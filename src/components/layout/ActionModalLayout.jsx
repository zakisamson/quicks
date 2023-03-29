import React from 'react'

function ActionModalLayout({ children }) {
    return (
        <div className='px-8 py-6 rounded-sm w-[734px] min-h-[737px] bg-white border-2 border-[#BDBDBD] !text-black'>
            {children}
        </div>
    )
}

export default ActionModalLayout