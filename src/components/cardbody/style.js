import styled from 'styled-components';

const CardBodyStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export default CardBodyStyle;
