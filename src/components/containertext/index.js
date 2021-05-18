import PropTypes from 'prop-types';
import ContainerTextStyle from './style';

const ContainerText = ({ children }) => <ContainerTextStyle>{children}</ContainerTextStyle>;

ContainerText.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContainerText;
