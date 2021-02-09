import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessagesList = ({ messages }) => (
  <div className="messages_list">
    {
      messages.map((message) => <Message {...message} key={message.id} />)
    }
  </div>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

MessagesList.defaultProps = {
  messages: [],
};
export default MessagesList;
