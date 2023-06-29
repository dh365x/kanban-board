import { createGlobalStyle } from "styled-components";

// prettier-ignore
export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
  display: none;
  box-sizing: border-box;
}
body {
  line-height: normal;
  font-family: 'Noto Sans KR', sans-serif;
}
menu, nav, ol, ul, li {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a{
  margin:0;
  padding:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
  color: inherit;
  text-decoration:none;
}
img{
  vertical-align:top;
}
hr{
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  height: 2px;
}
input, textarea{
  width:100%;
  height: 100%;
  margin:0;
  border:0;
  border-radius:0;
  appearance:none;
  vertical-align:top;
  box-sizing:content-box;
}
`;
