import { createGlobalStyle } from 'styled-components';

import RalewayRegular from '../assets/fonts/Raleway-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face{
    font-family: "Raleway";
    src: url(${RalewayRegular});
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Raleway";
  }
`;

export default GlobalStyles;