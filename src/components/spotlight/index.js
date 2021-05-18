import PropTypes from 'prop-types';
import Spotlightstyle from './style';

const Spotlight = ({ children }) => <Spotlightstyle>{children}</Spotlightstyle>;

Spotlight.propTypes = {
  children: PropTypes.node.isRequired,
};

Spotlight.defaultProps = {};

export default Spotlight;
