import React, { useState, useEffect } from 'react'
import { chat } from '../utils/chat'

function useOpenChat(id) {
    const [chatData, setChatData] = useState({})
    const [loadingChatroom, setLoadingChatroom] = useState(true)
    const [chatLoadError, setLoadError] = useState(null)

    const fetchChatData = async (id) => {
        if(id === null) return
        try {
            setLoadingChatroom(true)
            const response = await fetch(`db.json`)
            if (response.status === 200 || response.status === 304) {
                const chats = await response.json()
                const loadChatroom = chat.loadMessage(chats, id)
                setChatData(loadChatroom)
            } else {
                throw new Error(`Failed to fetch chat log :(`)
            }
        } catch (err) {
            setLoadError(err)
        } finally {
            setLoadingChatroom(false)
        }
    }

    useEffect(() => {
        fetchChatData(id)
    }, [id])
    

    return { chatData, loadingChatroom, chatLoadError }
}

export default useOpenChat