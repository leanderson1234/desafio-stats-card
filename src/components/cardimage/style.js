import styled from 'styled-components';

const Cardimagestyle = styled.div`
  height: 378px;
  width: 459px;
  background: url(./images/image-header-desktop.jpg) no-repeat;
  background-size: contain;
  border-radius: 0px 5px 5px 0px;
  @media (max-width: 500px) {
    height: 200px;
    width: 316px;
    background: url(./images/image-header-mobile.jpg) no-repeat;
    background-size: cover;
    border-radius: 0px 5px 5px 0px;
  }
`;
export const ColorImage = styled.div`
  background: hsl(277deg 90% 27% / 50%);
  height: 378px;
  border-radius: 0px 5px 5px 0px;
  width: 459px;
  position: absolute;
  @media (max-width: 500px) {
    height: 200px;
    width: 316px;
    position: absolute;
    border-radius: 0px 5px 5px 0px;
  }
`;

export default Cardimagestyle;
