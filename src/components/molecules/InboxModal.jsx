import React, { useEffect, useState } from 'react'
import useChat from '../../hooks/useChat'
import useOpenChat from '../../hooks/useOpenChat'
import InboxLoader from '../atoms/InboxLoader'
import InboxPreview from '../atoms/InboxPreview'
import InboxSearch from '../atoms/InboxSearch'
import ActionModalLayout from '../layout/ActionModalLayout'

function InboxModal() {
    const [openChat, setOpenChat] = useState({
        isOpen: false,
        chatId: null
    })
    const { data, loading, error } = useChat()
    const { chatData, loadingChatroom, chatLoadError } = useOpenChat(openChat.chatId)

    const handleOpenChat = (id) => {
        setOpenChat({chatId: id})
    }
    
    return (
        <ActionModalLayout>
            {
                loading
                    ?
                    <InboxLoader />
                    :
                    error ?
                        <span>{error}</span>
                        :
                        <>
                            <InboxSearch />
                            {
                                data.map((chats, index) => 
                                    <InboxPreview
                                        key={index}
                                        user={[chats.name]}
                                        chatTitle={chats.name}
                                        date={chats.latest_timestamp}
                                        lastMessage={chats.lastChat} 
                                        onClick={()=> handleOpenChat(chats.id)}
                                        />
                                )
                            }
                        </>
            }

        </ActionModalLayout>
    )
}

export default InboxModal