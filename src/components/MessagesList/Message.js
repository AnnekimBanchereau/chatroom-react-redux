import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Message = ({ author, message, isOther }) => (
  <div className={classNames('message', { 'message-other': isOther })}>
    <p className="message_author">{author}</p>
    <div className="message_body">
      <div className={classNames('arrow-up', { 'arrow-up-left': isOther })} />
      <p>{message}</p>
    </div>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isOther: PropTypes.bool.isRequired,
};

// Message.defaultProps = {
//   isOther: false,
// };

export default Message;
