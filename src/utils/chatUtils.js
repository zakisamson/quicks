const filteredChatLog = (friends) => {
  return friends.filter((friend) => friend.chatlog.length);
};

const lastMessage = (data) => {
  const filteredChat = filteredChatLog(data.friends);
  let lastMessaged = [];
  for (let chat of filteredChat) {
    for (let friend of data.profile.friends) {
      if (chat.id === friend.id) {
        lastMessaged.push(friend);
      }
    }
  }
  return lastMessaged;
};

const loadMessage = (data, chatId) => {
  for (let chat of data.friends) {
    if (chat.id === chatId) {
      return chat.chatlog.sort((a,b) => a.message_id - b.message_id)
    }
  }
};

const checkSameSide = (current, previous) => {
  if(!previous) return false
  if(current.side === previous.side){
    return true
  }
}

export const chatUtils = {
  lastMessage,
  loadMessage,
  checkSameSide
};
