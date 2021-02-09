import {
  ADD_MESSAGE,
  CONTROL_INPUT,
  TOGGLE_EMOJI_PICKER,
  ADD_EMOJI,
  SHOW_SETTINGS,
  CONTROL_PASSWORD_INPUT,
  CONTROL_EMAIL_INPUT,
} from 'src/actions';

import {
  getHighestId,
} from 'src/selectors';

const initialState = {
  inputValue: '',
  showEmojiPicker: false,
  settingsOpened: false,
  profil:{
    email: '',
    password: '',
  },
  messages: [{
    id: 1,
    author: 'Super Chat',
    message: 'Salut ça va ?',
    isOther: true,
  },
  {
    id: 2,
    author: 'Super Chat',
    message: 'T\'a pas des super croquettes ?',
    isOther: true,
  },
  {
    id: 3,
    author: 'Super Chat',
    message: 'Stp !',
    isOther: true,
  }],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        inputValue: '',
        messages: [
          ...state.messages,
          {
            id: (getHighestId(state.messages) + 1),
            author: 'Me',
            message: state.inputValue,
            isOther: false,
          },
        ],
      };
    case CONTROL_INPUT:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    case TOGGLE_EMOJI_PICKER:
      return {
        ...state,
        showEmojiPicker: (!state.showEmojiPicker),
      };
    case ADD_EMOJI:
      return {
        ...state,
        inputValue: state.inputValue + action.emoji,
      };
    case SHOW_SETTINGS:
      return {
        ...state,
        settingsOpened: (!state.settingsOpened),
      };
    case CONTROL_PASSWORD_INPUT:
      return {
        ...state,
        profil: { ...state.profil, password: action.password },
      };
    case CONTROL_EMAIL_INPUT:
      return {
        ...state,
        profil: { ...state.profil, email: action.email },
      };
    default:
      return state;
  }
};

export default reducer;
