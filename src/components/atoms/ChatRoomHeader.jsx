import React, { useContext } from 'react'
import ChatContext from '../../utils/ChatContext';

function ChatRoomHeader({roomName}) {
    const { setChatRoom } = useContext(ChatContext);

    const handleCloseChatRoom = () =>{
        setChatRoom({ isOpen: false, chatId: null, roomName: null })
    }
    return (
        <div className='flex flex-row items-center justify-start'>
            <button onClick={() => handleCloseChatRoom()}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#333333" />
                </svg>
            </button>
            <div>
                <h2 className='text-base font-bold text-[#2F80ED] ml-[18px] cursor-default'>{roomName}</h2>
            </div>
        </div>
    )
}

export default ChatRoomHeader