const filteredChatLog = (friends) => {
    return friends.filter(friend => friend.chatlog.length)
}

const lastMessage = (data) => {
    const filteredChat = filteredChatLog(data.friends)
    let lastMessaged = []
    for(let chat of filteredChat){
        for(let friend of data.profile.friends){
            if(chat.id === friend.id){
                lastMessaged.push(friend)
            }
        }
    }
    return lastMessaged
}

export const chat = {
    lastMessage
}