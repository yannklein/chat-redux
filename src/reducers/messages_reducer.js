export default function(state = null, action) {
  switch (action.type) {
    case 'GET_MESSAGES':
      return action.payload.messages;
    case 'SELECT_CHANNEL':
      return state;
    case 'POST_MESSAGE':
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}
