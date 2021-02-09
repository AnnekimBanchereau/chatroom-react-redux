import React from 'react';

import InputChat from 'src/containers/InputChat';
import MessagesList from 'src/containers/MessagesList';
import './styles.scss';

const App = () => (
  <div className="app">
    <MessagesList />
    <InputChat />
  </div>
);

export default App;
