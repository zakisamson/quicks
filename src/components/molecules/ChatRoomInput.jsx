import React from 'react'
import ActionButton from '../atoms/ActionButton'

function ChatRoomInput() {
  return (
    <div className='flex flex-row'>
        <input type="text" placeholder='Type a new message' className='w-full px-[16px] py-[13px] placeholder:text-black border border-[#828282] rounded-md mr-[13px]' />
        <ActionButton text="Send" />
    </div>
  )
}

export default ChatRoomInput