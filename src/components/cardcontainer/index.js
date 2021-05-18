import PropTypes from 'prop-types';
import CardContainerStyle from './style';

const CardContainer = ({ children }) => <CardContainerStyle>{children}</CardContainerStyle>;

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContainer;
