import {
  WS_CONNECT,
  SEND_NEW_MESSAGE,
  addMessage,
} from 'src/actions';

let socket = null;

export default (store) => (next) => (action) => {
  const { inputValue, pseudo } = store.getState();
  switch (action.type) {
    case WS_CONNECT:
      socket = window.io('http://localhost:3001');
      socket.on('receive_message', (messagePayload) => {
        store.dispatch(
          addMessage(
            messagePayload.id,
            messagePayload.author,
            messagePayload.message,
          ),
        );
      });
      return next(action);
    case SEND_NEW_MESSAGE:
      console.log('send new message', inputValue);
      socket.emit('send_message', { author: pseudo, message: inputValue });
      return next(action);
    default:
      return next(action);
  }
};
