import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;
  vertical-align:baseline;
  list-style:none;
  border:0;
  font-size: ${(props) => props.theme.typography.Fontsize};
}
body {
 background-color: ${(props) => props.theme.colors.primary.Verydarkblue};
}

p {
  font-family: 'Inter';
  color:  ${(props) => props.theme.colors.neutral.Slightlytransparentwhiteheading};
}

h1{
  color:  ${(props) => props.theme.colors.neutral.White};
  font-family: 'Lexend Deca';
}
span {
  color:  ${(props) => props.theme.colors.primary.Softviolet};
}

`;

export default GlobalStyle;
