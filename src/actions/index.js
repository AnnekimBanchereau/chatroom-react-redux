export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CONTROL_INPUT = 'CONTROL_INPUT';

export const addMessage = (event) => ({
  type: ADD_MESSAGE,
  event,
});

export const controlInput = (inputValue) => ({
  type: CONTROL_INPUT,
  inputValue,
});
