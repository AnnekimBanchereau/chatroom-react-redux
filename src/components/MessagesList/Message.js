import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Message = ({ author, message, isOther }) => (
  <div className={classNames('message', { 'message-other': isOther })}>
    {
      isOther
        ? <p className="message_author">{ author } </p>
        : <p className="message_author">Me</p>
    }
    <div className="message_body">
      <div className={classNames('arrow-up', { 'arrow-up-left': isOther })} />
      <p>{message}</p>
    </div>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isOther: PropTypes.bool,
};

Message.defaultProps = {
  isOther: false,
};

export default Message;
