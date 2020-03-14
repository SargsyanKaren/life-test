import { createGlobalStyle } from 'styled-components';
import colors from './colors';

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
  ::selection{
  background-color: ${colors.teal};
  }
`;

export default GlobalStyles;
