import PropTypes from 'prop-types';
import Titlestyle from './style';

const Title = ({ children }) => <Titlestyle>{children}</Titlestyle>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {};

export default Title;
