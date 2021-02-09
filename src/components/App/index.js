import React from 'react';

import InputChat from 'src/containers/InputChat';
import Settings from 'src/containers/Settings';
import MessagesList from 'src/containers/MessagesList';
import './styles.scss';

const App = () => (
  <div className="app">
    <Settings />
    <MessagesList />
    <InputChat />
  </div>
);

export default App;
