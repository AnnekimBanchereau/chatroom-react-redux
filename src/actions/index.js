export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CONTROL_INPUT = 'CONTROL_INPUT';
export const TOGGLE_EMOJI_PICKER = 'TOGGLE_EMOJI_PICKER';
export const ADD_EMOJI = 'ADD_EMOJI';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CONTROL_PASSWORD_INPUT = 'CONTROL_PASSWORD_INPUT';
export const CONTROL_EMAIL_INPUT = 'CONTROL_EMAIL_INPUT';
export const SEND_LOGIN = 'SEND_LOGIN';
export const SET_PSEUDO = 'SET_PSEUDO';
export const SET_COLOR = 'SET_COLOR';

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

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const controlEmailInput = (email) => ({
  type: CONTROL_EMAIL_INPUT,
  email,
});

export const controlPasswordInput = (password) => ({
  type: CONTROL_PASSWORD_INPUT,
  password,
});

export const sendLogin = () => ({
  type: SEND_LOGIN,
});

export const setPseudo = (pseudo) => ({
  type: SET_PSEUDO,
  pseudo,
});

export const setColor = (color) => ({
  type: SET_COLOR,
  color,
});
