import {
  WS_CONNECT,
} from 'src/actions';

let socket = null;
export default (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT:
      socket = window.io('http://localhost:3001');
      return next(action);
    default:
      return next(action);
  }
};
