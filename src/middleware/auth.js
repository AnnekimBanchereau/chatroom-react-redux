import {
  SEND_LOGIN,
  SET_PSEUDO,
  setPseudo,
  setColor,
} from 'src/actions';

import axios from 'src/api';

export default (store) => (next) => (action) => {
  const { profil: { email, password } } = store.getState();

  switch (action.type) {
    case SEND_LOGIN:
      axios.post('/login', {
        email,
        password,
      }).then((result) => {
        store.dispatch(setPseudo(result.data.pseudo));
      });
      next(action);
      break;
    case SET_PSEUDO:
      axios.get(`/theme/${email}`)
        .then((result) => {
          store.dispatch(setColor(result.data.color));
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};
