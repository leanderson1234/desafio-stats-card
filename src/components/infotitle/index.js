import PropTypes from 'prop-types';
import InfoTitlestyle from './style';

const InfoTitle = ({ children }) => <InfoTitlestyle>{children}</InfoTitlestyle>;

InfoTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

InfoTitle.defaultProps = {};

export default InfoTitle;
