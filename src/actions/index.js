export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CONTROL_INPUT = 'CONTROL_INPUT';
export const TOGGLE_EMOJI_PICKER = 'TOGGLE_EMOJI_PICKER';
export const ADD_EMOJI = 'ADD_EMOJI';

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const controlInput = (inputValue) => ({
  type: CONTROL_INPUT,
  inputValue,
});

export const toggleEmojiPicker = () => ({
  type: TOGGLE_EMOJI_PICKER,
});

export const addEmoji = (emoji) => ({
  type: ADD_EMOJI,
  emoji,
});
