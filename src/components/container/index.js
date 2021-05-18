import PropTypes from 'prop-types';
import ContainerStyle from './style';

const Container = ({ children }) => <ContainerStyle>{children}</ContainerStyle>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
