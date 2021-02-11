import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from 'src/containers/MessagesList/Message';

const MessagesList = ({ messages }) => {
  const messagesContainer = useRef(null);
  useEffect(() => {
    messagesContainer.current.scrollTo(0, messagesContainer.current.scrollHeight);
  }, [messages]);

  return (
    <div className="messages_list" ref={messagesContainer}>
      {
        messages.map((message) => <Message {...message} key={message.id} />)
      }
    </div>
  );
};

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
