import React, { useEffect, useState } from 'react'
import InboxLoader from '../atoms/InboxLoader'
import InboxPreview from '../atoms/InboxPreview'
import InboxSearch from '../atoms/InboxSearch'
import ActionModalLayout from '../layout/ActionModalLayout'

function InboxModal() {
    const [messages, setMessages] = useState()
    let timer = null

    const loadMessage = () => {
        timer = setTimeout(()=> setMessages(['test']), 1500)
    }

    useEffect(() => {
        loadMessage()
    }, [])

    return (
        <ActionModalLayout>
            {
                messages != null 
                ?
                <>
                    <InboxSearch />
                    <InboxPreview 
                    user={["Flamingggo"]}
                    chatTitle="FastVisa Support" 
                    date="01/06/2021 12:19" 
                    lastMessage="Hey there! welcome to your inbox." />
                    <InboxPreview 
                    user={["Flamingggo", "Doffy"]}
                    chatTitle="109220-Naturalization" 
                    date="01/06/2021 12:19" 
                    lastMessage="Hey there! welcome to your inbox." />
                </>
                : 
                    <InboxLoader />
            }
        </ActionModalLayout>
    )
}

export default InboxModal