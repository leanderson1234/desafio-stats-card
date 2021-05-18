import PropTypes from 'prop-types';
import CardBodyStyle from './style';

const CardBody = ({ children }) => <CardBodyStyle>{children}</CardBodyStyle>;

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CardBody;
