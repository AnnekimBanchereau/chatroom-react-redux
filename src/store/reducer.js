import {
  ADD_MESSAGE,
  CONTROL_INPUT,
} from 'src/actions';

const initialState = {
  inputValue: '',
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
      event.preventDefault();
      return {
        inputValue: '',
        messages: [
          ...state.messages,
          {
            id: 4, author: 'Super Chat', message: state.inputValue, isOther: false,
          },
        ],
      };
    case CONTROL_INPUT:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    default:
      return state;
  }
};

export default reducer;
