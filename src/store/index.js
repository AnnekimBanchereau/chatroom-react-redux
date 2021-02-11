import { createStore, applyMiddleware, compose } from 'redux';
import logMiddleware from 'src/middleware/log';
import authMiddleware from 'src/middleware/auth';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      logMiddleware,
      authMiddleware,
    ),
  ),
);

export default store;
