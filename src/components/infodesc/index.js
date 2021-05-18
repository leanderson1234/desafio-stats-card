import PropTypes from 'prop-types';
import InfoDescstyle from './style';

const InfoDesc = ({ children }) => <InfoDescstyle>{children}</InfoDescstyle>;

InfoDesc.propTypes = {
  children: PropTypes.node.isRequired,
};

InfoDesc.defaultProps = {};

export default InfoDesc;
