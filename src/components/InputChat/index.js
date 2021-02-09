import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Send, Smile } from 'react-feather';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import './styles.scss';

const InputChat = ({
  inputValue,
  handleInputChange,
  sendMessage,
  handleSelectEmoji,
  showEmojiPicker,
  handleClickSmiley,
}) => {
  const inputRef = useRef(null);
  const handleOnSubmitForm = (event) => {
    event.preventDefault();
    sendMessage();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleOnSubmitForm} className="form">
      {showEmojiPicker ? (
        <Picker
          title="Pick your emoji…"
          emoji="point_up"
          onSelect={(emoji) => {
            handleSelectEmoji(emoji.native);
          }}
        />
      ) : null}
      <input
        aria-describedby="name-desc"
        className="form_input"
        type="text"
        placeholder="Ecrivez un message"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button
        type="button"
        onClick={handleClickSmiley}
        className="toggle-emoji"
      >
        <Smile />
      </button>
      <button type="submit" className="form_submit">
        <Send size={32} />
      </button>
    </form>
  );
};

InputChat.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  handleSelectEmoji: PropTypes.func.isRequired,
  showEmojiPicker: PropTypes.bool,
  handleClickSmiley: PropTypes.func.isRequired,
};

InputChat.defaultProps = {
  showEmojiPicker: false,
};
export default InputChat;
