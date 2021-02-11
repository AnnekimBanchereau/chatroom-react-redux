import {
  ADD_MESSAGE,
  CONTROL_INPUT,
  TOGGLE_EMOJI_PICKER,
  ADD_EMOJI,
  TOGGLE_SETTINGS,
  CONTROL_PASSWORD_INPUT,
  CONTROL_EMAIL_INPUT,
  SEND_LOGIN,
  SET_PSEUDO,
  SET_COLOR,
} from 'src/actions';

import {
  getHighestId,
} from 'src/selectors';

const initialState = {
  pseudo: 'Me',
  inputValue: '',
  showEmojiPicker: false,
  settingsOpened: false,
  profil: {
    email: '',
    password: '',
  },
  messages: [{
    id: 1,
    author: 'Super Chat',
    message: 'Salut ça va ?',
  },
  {
    id: 2,
    author: 'Super Chat',
    message: 'T\'a pas des super croquettes ?',
  },
  {
    id: 3,
    author: 'Super Chat',
    message: 'Stp !',
  },
  {
    id: 4,
    author: 'Me',
    message: 'Jamais',
  }],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        inputValue: '',
        messages: [
          ...state.messages,
          {
            id: (getHighestId(state.messages) + 1),
            author: state.pseudo,
            message: state.inputValue,
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
        showEmojiPicker: !state.showEmojiPicker,
      };
    case ADD_EMOJI:
      return {
        ...state,
        inputValue: state.inputValue + action.emoji,
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settingsOpened: !state.settingsOpened,
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
    case SEND_LOGIN:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: true,
        },
      };
    case SET_PSEUDO:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: false,
          open: false,
        },
        pseudo: action.pseudo,
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};

export default reducer;
