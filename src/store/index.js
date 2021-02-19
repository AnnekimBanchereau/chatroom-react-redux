import { createStore, applyMiddleware, compose } from 'redux';
import authMiddleware from 'src/middleware/auth';
import socketMiddleware from 'src/middleware/socket';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      authMiddleware,
      socketMiddleware,
    ),
  ),
);

export default store;
