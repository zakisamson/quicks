import React, { useContext, useState } from 'react'
import ActionButton from '../atoms/ActionButton'
import ChatContext from '../../utils/ChatContext'
import { chatUtils } from '../../utils/chatUtils'

function ChatRoomInput() {
  const { data, setData, chatRoom } = useContext(ChatContext)
  const [inputChat, setInputChat] = useState({ text: ``})

  const handleInputChange = (e) => {
    const inputData = { ...inputChat }
    inputData[e.target.name] = e.target.value
    setInputChat(inputData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const friend = chatUtils.findProfileFriendsLastChat(data, chatRoom.chatId)
    const updateFriendData = {...friend, lastChat: inputChat.text}
    
    const updatedFriendsData = data.profile.friends.map((friend) => friend.id === updateFriendData.id ? updateFriendData : friend)
    const updateProfile = {...data.profile, friends: updatedFriendsData}
    setData({...data, profile: updateProfile})
  }

  console.log(data)
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-row'>
      <input name='text' type="text" onChange={(e) => handleInputChange(e)} placeholder='Type a new message' className='w-full px-[16px] py-[13px] placeholder:text-black border border-[#828282] rounded-md mr-[13px]' />
      <ActionButton text="Send" type="submit" />
    </form>
  )
}

export default ChatRoomInput