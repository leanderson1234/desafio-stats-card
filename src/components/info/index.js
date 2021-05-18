import PropTypes from 'prop-types';
import InfoStyle from './style';

const Info = ({ children }) => <InfoStyle>{children}</InfoStyle>;

Info.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Info;
