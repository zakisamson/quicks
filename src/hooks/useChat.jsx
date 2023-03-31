import React, { useEffect, useState } from 'react'
import { chat } from '../utils/chat'

function useChat() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchChat = async () =>{
        try{
            setLoading(true)
            const response = await fetch(`db.json`)
            if(response.status === 200){
                const chats = await response.json()
                const filteredChat = chat.lastMessage(chats)
                setData(filteredChat)
            } else {
                throw new Error(`Failed to fetch chat(s) :(`)
            }
        } catch(err){
            setError(err)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchChat()
    }, [])
    
    return {data, loading, error}
}

export default useChat