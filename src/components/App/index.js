// == Import npm
import React from 'react';

// == Import
import InputChat from 'src/containers/InputChat';
import MessagesList from 'src/containers/MessagesList';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <MessagesList />
    <InputChat />
  </div>
);

// == Export
export default App;
