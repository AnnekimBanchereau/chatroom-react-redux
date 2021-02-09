import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

import {
  showSettings,
  controlEmailInput,
  controlPasswordInput,
} from 'src/actions';

const mapStateToProps = (state) => ({
  settingsOpened: state.settingsOpened,
  profil: state.profil,
});

const mapDispatchToProps = (dispatch) => ({
  onClickSettings: () => {
    dispatch(showSettings());
  },
  handleEmailInputChange: (email) => {
    dispatch(controlEmailInput(email));
  },
  handlePasswordInputChange: (password) => {
    dispatch(controlPasswordInput(password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
