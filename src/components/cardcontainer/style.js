import styled from 'styled-components';

const CardContainerStyle = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.primary.Darkdesaturatedblue};
  border-radius: 5px 0px 0px 5px;
  @media (max-width: 500px) {
    justify-content: center;
    border-radius: 10px;
  }
`;

export default CardContainerStyle;
