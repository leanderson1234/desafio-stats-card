import PropTypes from 'prop-types';
import InfoContainerStyle from './style';

const InfoContainer = ({ children }) => <InfoContainerStyle>{children}</InfoContainerStyle>;

InfoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default InfoContainer;
