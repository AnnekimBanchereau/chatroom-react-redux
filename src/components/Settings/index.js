import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

const Settings = ({
  settingsOpened,
  onClickSettings,
  handleEmailInputChange,
  handlePasswordInputChange,
  profil,
}) => (
  <div className={classNames('settings', { 'settings--active': settingsOpened })}>
    <button className="settings_button" type="button" onClick={onClickSettings}>
      +
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
