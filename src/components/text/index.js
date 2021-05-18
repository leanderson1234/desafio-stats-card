import PropTypes from 'prop-types';
import Textstyle from './style';

const Text = ({ children }) => <Textstyle>{children}</Textstyle>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {};

export default Text;
