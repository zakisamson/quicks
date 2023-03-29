import React, { useEffect, useState } from 'react'
import useChat from '../../hooks/useChat'
import InboxLoader from '../atoms/InboxLoader'
import InboxPreview from '../atoms/InboxPreview'
import InboxSearch from '../atoms/InboxSearch'
import ActionModalLayout from '../layout/ActionModalLayout'

function InboxModal() {
    const { data, loading, error } = useChat()

    console.log(data, loading)
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
                                        lastMessage={chats.lastChat} />
                                )
                            }
                        </>
            }

        </ActionModalLayout>
    )
}

export default InboxModal