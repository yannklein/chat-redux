// TODO: add and export your own actions
const BASE_URL = 'https://wagon-chat.herokuapp.com/radio-galaswinda';

export function getMessages(messageChannel) {
  const promise = fetch(`${BASE_URL}-${messageChannel}/messages`)
    .then(response => response.json());

  // API fetch example
  // {"channel":"radio-galaswinda",
  //  "messages":[{
  //    "id":191939,
  //    "author":"Yann",
  //    "content":"Hi there!",
  //    "channel":"radio-galaswinda",
  //    "created_at":"2019-09-26T02:52:40.769Z",
  //    "updated_at":"2019-09-26T02:52:40.769Z"
  // }]}
  return {
    type: "GET_MESSAGES",
    payload: promise // Will be resolved by redux-promise
  };
}

export function postMyMessage(messageContent, messageAuthor, messageChannel) {
  const message =
    {
      author: messageAuthor,
      content: messageContent
    };

  const promise = fetch(`${BASE_URL}-${messageChannel}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
    .then(response => response.json());

  return {
    type: "POST_MESSAGE",
    payload: promise // Will be resolved by redux-promise
  };
}

export function setChannel(channel) {
  return {
    type: "SELECT_CHANNEL",
    payload: channel // Will be resolved by redux-promise
  };
}

