import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

import {
  toggleSettings,
  controlEmailInput,
  controlPasswordInput,
  sendLogin,
} from 'src/actions';

const mapStateToProps = (state) => ({
  settingsOpened: state.settingsOpened,
  profil: state.profil,
});

const mapDispatchToProps = (dispatch) => ({
  onClickSettings: () => {
    dispatch(toggleSettings());
  },
  handleEmailInputChange: (email) => {
    dispatch(controlEmailInput(email));
  },
  handlePasswordInputChange: (password) => {
    dispatch(controlPasswordInput(password));
  },
  onLogin: () => dispatch(sendLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
