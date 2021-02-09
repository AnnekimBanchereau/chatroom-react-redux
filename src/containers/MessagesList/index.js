import { connect } from 'react-redux';
import MessagesList from 'src/components/MessagesList';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagesList);
