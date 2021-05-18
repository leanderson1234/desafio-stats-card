import styled from 'styled-components';

const ContainerStyle = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 500px) {
    justify-content: center;
    padding-top: 80px;
  }
`;

export default ContainerStyle;
