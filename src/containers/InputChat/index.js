import { connect } from 'react-redux';
import InputChat from 'src/components/InputChat';

import {
  addMessage,
  controlInput,
  toggleEmojiPicker,
  addEmoji,
} from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  showEmojiPicker: state.showEmojiPicker,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    dispatch(addMessage());
  },
  handleInputChange: (event) => {
    dispatch(controlInput(event.target.value));
  },
  handleClickSmiley: () => {
    dispatch(toggleEmojiPicker());
  },
  handleSelectEmoji: (emoji) => {
    dispatch(addEmoji(emoji));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputChat);
