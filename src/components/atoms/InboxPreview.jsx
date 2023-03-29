import clsx from 'clsx'
import React from 'react'

function InboxPreview({ user, chatTitle, date, lastMessage, className }) {
    let users = user
    return (
        <div className={clsx('flex flex-row w-full py-6 items-start border-b border-[#828282]', className)}>
            {/* Individual chat thumbnail */}
            {
                users.length > 1
                    ?
                    <>
                        <div className='relative'>
                            <div className="w-[34px] h-[34px] mr-[23px] rounded-full flex justify-center items-center bg-[#2F80ED] text-white absolute ml-4">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z" 
                                    fill="white" />
                                </svg>
                            </div>
                            <div className="w-[34px] h-[34px] mr-[23px] rounded-full flex justify-center items-center bg-[#E0E0E0] text-white z-0">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z" 
                                    fill="#0000008A" />
                                </svg>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="w-[34px] h-[34px] mr-[23px] rounded-full px-[13px] py-[5px] bg-[#2F80ED] text-white">{users[0][0]}</div>
                    </>
            }
            <div className='text-left'>
                <div className="flex flex-row items-start">
                    {/* Chat title */}
                    <h2 className='font-bold text-[#2F80ED] mr-4 text-[16px] max-w-[415px] leading-5'>{chatTitle}</h2>
                    {/* Date */}
                    <p className='text-[14px]'>{date}</p>
                </div>
                {/* Message preview */}
                <p className='text-[14px]'>{lastMessage}</p>
            </div>
        </div>
    )
}

export default InboxPreview