import clsx from 'clsx'
import React, { useContext } from 'react'
import ChatContext from '../../utils/ChatContext'

function ChatBubble({ chat, prevChat }) {
    const { chatRoom } = useContext(ChatContext);
    const { side, text, timestamp } = chat;
    const isSameSide = prevChat && chat.side === prevChat.side ? true : false

    return (
        <>
            {
                isSameSide ?
                    null
                    :
                    side === "left"
                        ?
                        <p className='text-left text-[#9B51E0]'>{chatRoom.roomName}</p>
                        :
                        <p className='text-right text-[#9B51E0]'>You</p>
            }
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
        </>
    )
}

export default ChatBubble