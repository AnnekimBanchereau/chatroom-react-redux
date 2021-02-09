import React from 'react';
import { X, Plus } from 'react-feather';
import PropTypes from 'prop-types';

import './styles.scss';

const Settings = ({
  settingsOpened,
  onClickSettings,
  handleEmailInputChange,
  handlePasswordInputChange,
  profil,
}) => {
  if (settingsOpened) {
    return (
      <div className="settings">
        <button className="settings_toogle" type="button" onClick={onClickSettings}>
          <X color="#8332AC" size={40} />
        </button>
        <form className="settings_form">
          <input
            type="email"
            placeholder="Email"
            value={profil.email}
            onChange={(evt) => {
              const text = evt.target.value;
              handleEmailInputChange(text);
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={profil.password}
            onChange={(evt) => {
              const text = evt.target.value;
              handlePasswordInputChange(text);
            }}
          />
          <button className="settings_form-submit" type="submit">Envoyer </button>
        </form>
      </div>
    );
  }
  return (
    <div className="settings">
      <button className="settings_toogle" type="button" onClick={onClickSettings}>
        <Plus color="#8332AC" size={40} />
      </button>
    </div>
  );
};

Settings.propTypes = {
  profil: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  settingsOpened: PropTypes.bool,
  onClickSettings: PropTypes.func.isRequired,
  handleEmailInputChange: PropTypes.func.isRequired,
  handlePasswordInputChange: PropTypes.func.isRequired,
};

Settings.defaultProps = {
  settingsOpened: false,
  profil: {},
};

export default Settings;
