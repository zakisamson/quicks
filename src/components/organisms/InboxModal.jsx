import React, { useState } from 'react'
import useChat from '../../hooks/useChat'
import InboxLoader from '../atoms/InboxLoader'
import InboxPreview from '../atoms/InboxPreview'
import InboxSearch from '../atoms/InboxSearch'
import ActionModalLayout from '../layout/ActionModalLayout'
import { chatUtils } from '../../utils/chatUtils'
import ChatContext from '../../utils/ChatContext'
import ChatRoom from '../molecules/ChatRoom'

function InboxModal() {
    const [chatRoom, setChatRoom] = useState({
        isOpen: false,
        chatId: null,
        roomName: null
    })
    const { data, loading, error } = useChat()

    const handleOpenChatRoom = (id, name) => {
        setChatRoom({ isOpen: true, chatId: id, roomName: name })
    }

    return (
        <ChatContext.Provider value={{ data, loading, error, chatRoom, setChatRoom }}>
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
                                    onClick={() => handleOpenChatRoom(chats.id, chats.name)}
                                />
                            )
                        }
                    </>
                }
                {!loading && !error && chatRoom.isOpen &&
                    <ChatRoom data={data} chatRoomId={chatRoom.chatId} name={chatRoom.roomName} />
                }
            </ActionModalLayout>
        </ChatContext.Provider>
    )
}

export default InboxModal