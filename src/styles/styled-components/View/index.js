import styled from 'styled-components';

const size = ({
  minW,
  maxW,
  minH,
  maxH,
  width,
  height,
}) => `
  ${ width ? `width: ${width}` : ""};
  ${ minW ? `min-width: ${minW}` : ""};
  ${ maxW ? `max-width: ${maxW}` : ""};
  ${ height ? `height: ${height}` : ""};
  ${ minH ? `min-height: ${minH}` : ""};
  ${ maxH ? `max-height: ${maxH}` : ""};
`;

const marginPadding = ({
  margin,
  padding,
  marginT,
  marginB,
  marginL,
  marginR,
  paddingT,
  paddingB,
  paddingL,
  paddingR,
}) => `
  ${ margin ? `margin: ${margin}` : ""};
  ${ padding ? `padding: ${padding}` : ""};
  ${ marginT ? `margin-top: ${marginT}` : ""};
  ${ marginB ? `margin-bottom: ${marginB}` : ""};
  ${ marginL ? `margin-left: ${marginL}` : ""};
  ${ marginR ? `margin-right: ${marginR}` : ""};
  ${ paddingT ? `padding-top: ${paddingT}` : ""};
  ${ paddingB ? `padding-bottom: ${paddingB}` : ""};
  ${ paddingL ? `padding-left: ${paddingL}` : ""};
  ${ paddingR ? `padding-right: ${paddingR}` : ""};
`;

const positions = ({
  top,
  left,
  right,
  bottom,
  zIndex,
  position,
}) => `
  ${ top ? `top: ${top}` : ""};
  ${ left ? `left: ${left}` : ""};
  ${ right ? `right: ${right}` : ""};
  ${ bottom ? `bottom: ${bottom}` : ""};
  ${ zIndex ? `z-index: ${zIndex}` : ""}
  ${ position ? `position: ${position}` : ""};
`;

const other = ({ boxSizing, shadow, overflow, color, opacity, transition, cursor, textAlign }) => `
  ${ color ? `color: ${color};` : ""}
  ${ cursor ? `cursor: ${cursor};` : ""}
  ${ opacity ? `opacity: ${opacity};` : ""}
  ${ shadow ? `box-shadow: ${shadow};` : ""}
  ${ overflow ? `overflow : ${overflow};` : ""}
  ${ boxSizing ? `box-sizing: ${boxSizing};` : ""}
  ${ transition ? `transition: ${transition};` : ""}
  ${ textAlign ? `text-align: ${textAlign};` : ""}
`;

const border = ({
  border,
  emptyC,
  radius,
  borderW,
  borderT,
  borderB,
  borderL,
  borderR,
  captionS,
  borderColl,
  borderSpac,
  borderColor,
  borderStyle,
}) => `
  ${ border ? `border: ${border}` : ""};
  ${ borderT ? `border-top: ${borderT}` : ""};
  ${ borderL ? `border-left: ${borderL}` : ""};
  ${ borderR ? `border-right: ${borderR}` : ""};
  ${ borderW ? `border-width: ${borderW}` : ""};
  ${ borderB ? `border-bottom: ${borderB}` : ""};
  ${ emptyC ? `empty-cells: ${emptyC}` : ""};
  ${ radius ? `border-radius: ${radius}` : ""};
  ${ captionS ? `caption-side: ${captionS}` : ""};
  ${ borderStyle ? `border-style: ${borderStyle}` : ""};
  ${ borderColor ? `border-color: ${borderColor}` : ""};
  ${ borderSpac ? `border-spacing: ${borderSpac}` : ""};
  ${ borderColl ? `border-collapse: ${borderColl}` : ""};
`;

const backgrounds = ({
  bg,
  bgOr,
  bgAt,
  bgImg,
  bgPos,
  bgRep,
  bgSize,
  bgClip,
  bgColor,
}) => `
  ${ bg ? `background: ${bg};` : ''}
  ${ bgOr ? `background-origin: ${bgOr};` : '' }
  ${ bgRep ? `background-repeat: ${bgRep};` : '' }
  ${ bgSize ? `background-size: ${bgSize};` : '' }
  ${ bgClip ? `background-clip: ${bgClip};` : '' }
  ${ bgPos ? `background-position: ${bgPos};` : '' }
  ${ bgAt ? `background-attachment: ${bgAt};` : '' }
  ${ bgColor ? `background-color: ${bgColor};` : '' }
  ${ bgImg ? `background-image: url(${bgImg});` : '' }
`;

const flexBox = ({
  row,
  flex,
  wrap,
  grow,
  aEnd,
  jEnd,
  sEnd,
  order,
  basis,
  column,
  noWrap,
  sStart,
  shrink,
  aStart,
  jStart,
  around,
  evenly,
  aCenter,
  sCenter,
  jCenter,
  between,
  aStretch,
  rowReverse,
  columnReverse
}) => `
  ${ flex ? 'display: flex;' : '' }
  ${ order ? `order: ${order};` : ""}
  ${ wrap ? 'flex-wrap: wrap;' : '' }
  ${ grow ? `flex-grow: ${grow};` : '' }
  ${ row ? 'flex-direction: row;' : '' }
  ${ noWrap ? 'flex-wrap: no-wrap;' : '' }
  ${ aEnd ? 'align-items: flex-end;' : ''}
  ${ sEnd ? 'align-self: self-end;' : '' }
  ${ aCenter ? 'align-items: center;' : ''}
  ${ basis ? `flex-basis: ${basis};` : '' }
  ${ sCenter ? 'align-self: center;' : '' }
  ${ aStretch ? 'align-items: stretch;' : ''} 
  ${ column ? 'flex-direction: column;' : '' }
  ${ sStart ? 'align-self: self-start;' : '' }
  ${ shrink ? `flex-shrink: ${shrink};` : '' }
  ${ jEnd ? 'justify-content: flex-end;' : ''}
  ${ aStart ? 'align-items: flex-start;' : ''}
  ${ jCenter ? 'justify-content: center;' : ''}
  ${ jStart ? 'justify-content: flex-start;' : ''}
  ${ around ? 'justify-content: space-around;' : ''}
  ${ evenly ? 'justify-content: space-evenly;' : ''}
  ${ between ? 'justify-content: space-between;' : ''}
  ${ rowReverse ? 'flex-direction: row-reverse;' : '' }
  ${ columnReverse ? 'flex-direction: column-reverse;' : '' }
`;

const setResponsiveStyles = props => {
  const mediaQuerys = {
    s: '(max-width: 480px)',
    m: '(min-width: 480px) and (max-width: 960px)',
    l: '(min-width: 960px) and (max-width: 1260px)',
    xl: '(min-width: 1800px)'
  };

  let responsiveProps = Object.entries(props).filter(prop => prop[0].includes('_'));
  if(!responsiveProps.length) return '';

  const query = {};

  responsiveProps.forEach(item => {
    const queryName = item[0].slice(item.indexOf('-'));
    const propName = item[0].slice(0, item.indexOf('-') - 1);

    if(!query[queryName]) query[queryName] = {};

    query[queryName][propName] = item[1];
  })

  return Object.entries(query).map(item => `
    @media ${mediaQuerys[item[0]]}{
      ${setStyles(item[1])}
    }
  `).join('');
};

const setStyles = props => `
  ${ size(props) }
  ${ marginPadding(props) }
  ${ positions(props) }
  ${ backgrounds(props) }
  ${ flexBox(props) }
  ${ border(props) }
  ${ other(props) }
`;

const View = styled.div`
  ${ setStyles }
  ${ setResponsiveStyles }
`;

export default View;
