import React from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';
import './styles.scss';

const InputChat = ({ inputValue, handleSubmit, handleInputChange }) => (
  <form onSubmit={handleSubmit} className="form">
    <input
      className="form_input"
      type="text"
      placeholder="Ecrivez un message"
      value={inputValue}
      onChange={handleInputChange}
    />
    <button type="submit" className="form_submit">
      <Send size={32} />
    </button>
  </form>
);

InputChat.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default InputChat;
