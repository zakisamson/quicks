import React, { useContext } from 'react'
import ChatBubble from '../atoms/ChatBubble'
import { chatUtils } from '../../utils/chatUtils'
import ChatRoomHeader from '../atoms/ChatRoomHeader'
import ChatRoomInput from './ChatRoomInput'
import ChatContext from '../../utils/ChatContext'

function ChatRoom() {
    const { data, chatRoom } = useContext(ChatContext)
    const chatRoomData = chatUtils.loadMessage(data, chatRoom.chatId)

    return (
        <div className='w-full h-full flex flex-col gap-5 '>
            <ChatRoomHeader roomName={chatRoom.roomName} />
            <div className='overflow-y-scroll pr-4'>
                {
                    chatRoomData.map((chat, index) => {
                        return (
                            <ChatBubble key={index} chat={chat} prevChat={index !== 0 ? chatRoomData[index-1] : null} />
                        )
                    })
                }
            </div>
            <ChatRoomInput />
        </div>
    )
}

export default ChatRoom