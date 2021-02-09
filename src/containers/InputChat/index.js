import { connect } from 'react-redux';
import InputChat from 'src/components/InputChat';

import {
  addMessage,
  controlInput,
} from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: () => {
    dispatch(addMessage());
  },
  handleInputChange: () => {
    dispatch(controlInput(event.target.value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputChat);
