import styled from 'styled-components';

const ContainerTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  padding-right: 76px;
  padding-bottom: 30px;
  @media (max-width: 500px) {
    align-items: center;
    flex-direction: column;
    padding: 0px;
    padding-top: 30px;
  }
`;

export default ContainerTextStyle;
