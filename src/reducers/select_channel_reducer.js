export default function(state = null, action) {
  switch (action.type) {
    case 'GET_MESSAGES':
      return state;
    case 'SELECT_CHANNEL':
      return action.payload;
    case 'POST_MESSAGE':
      return state;
    default:
      return state;
  }
}
