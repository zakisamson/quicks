import React, { createContext, useEffect, useState } from 'react'
import useChat from '../../hooks/useChat'
import InboxLoader from '../atoms/InboxLoader'
import InboxPreview from '../atoms/InboxPreview'
import InboxSearch from '../atoms/InboxSearch'
import ActionModalLayout from '../layout/ActionModalLayout'
import { chatUtils } from '../../utils/chatUtils'

const ChatContext = createContext([])

function InboxModal() {
    const [chatRoom, setChatRoom] = useState({
        isOpen: false,
        chatId: null
    })
    const { data, loading, error } = useChat()

    const handleOpenChatRoom = (id) => {
        setChatRoom({ isOpen: true, chatId: id })
    }

    const handleCloseChatRoom = () => {
        setChatRoom({ isOpen: false, chatId: null })
    }

    

    return (
        <ChatContext.Provider value={{ data, loading, error }}>
            <ActionModalLayout>
                {loading && <InboxLoader />}
                {!loading && error && <span>{error}</span>}
                {!loading && !error && !chatRoom.isOpen &&
                    <>
                        <InboxSearch />
                        {
                            chatUtils.lastMessage(data).map((chats, index) =>
                                <InboxPreview
                                    key={index}
                                    user={[chats.name]}
                                    chatTitle={chats.name}
                                    date={chats.latest_timestamp}
                                    lastMessage={chats.lastChat}
                                    onClick={() => handleOpenChatRoom(chats.id)}
                                />
                            )
                        }
                    </>
                }
                {!loading && !error && chatRoom.isOpen &&
                    <div className='w-full flex flex-col gap-5 over '>
                        <button onClick={() => handleCloseChatRoom()}>Back</button>
                        {
                            chatUtils.loadMessage(data, chatRoom.chatId).map((chat, index) => {
                                
                                return chat.side === "left" ?
                                    <div
                                        key={index}
                                        className='mr-auto p-4 rounded-md text-left w-4/5 bg-orange-300'
                                    >
                                        <p>{chat.text}</p>
                                        <p>{chat.timestamp}</p>
                                    </div>
                                    :
                                    <div
                                        key={index}
                                        className='ml-auto p-4 rounded-md text-left w-4/5 bg-blue-300'
                                    >
                                        <p>{chat.text}</p>
                                        <p>{chat.timestamp}</p>
                                    </div>
                            })
                        }
                    </div>
                }
            </ActionModalLayout>
        </ChatContext.Provider>
    )
}

export default InboxModal