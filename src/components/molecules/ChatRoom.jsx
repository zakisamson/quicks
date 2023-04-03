import React from 'react'
import ChatBubble from '../atoms/ChatBubble'
import { chatUtils } from '../../utils/chatUtils'
import ChatRoomHeader from '../atoms/ChatRoomHeader'
import ChatRoomInput from './ChatRoomInput'

function ChatRoom({ data, chatRoomId, name }) {
    return (
        <div className='w-full h-full flex flex-col gap-5 '>
            <ChatRoomHeader roomName={name} />
            <div className='overflow-y-scroll'>
                {
                    chatUtils.loadMessage(data, chatRoomId).map((chat, index) => {
                        return (
                            <ChatBubble key={index} side={chat.side} text={chat.text} timestamp={chat.timestamp} />
                        )
                    })
                }
            </div>
            <ChatRoomInput />
        </div>
    )
}

export default ChatRoom