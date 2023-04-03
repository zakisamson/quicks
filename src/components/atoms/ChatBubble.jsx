import clsx from 'clsx'
import React from 'react'

function ChatBubble({ side, text, timestamp }) {
    return (
        <div className={clsx(
            'p-4 rounded-md text-left w-4/5 mb-5 text-[#4F4F4F]',
            {
                'mr-auto bg-[#FCEED3]': side === "left",
                'ml-auto bg-[#EEDCFF]': side === "right",
            }
        )}
        >
            <p className='text-sm font-medium mb-3'>{text}</p>
            <p className='text-xs font-medium'>{timestamp}</p>
        </div>
    )
}

export default ChatBubble