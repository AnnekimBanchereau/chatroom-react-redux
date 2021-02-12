import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import InputChat from 'src/containers/InputChat';
import Settings from 'src/containers/Settings';
import MessagesList from 'src/containers/MessagesList';
import './styles.scss';

import { wsConnect } from 'src/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);
  return (
    <div className="app">
      <Settings />
      <MessagesList />
      <InputChat />
    </div>
  );
};

export default App;
