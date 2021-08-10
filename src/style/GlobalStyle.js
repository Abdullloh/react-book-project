import {createGlobalStyle} from 'styled-components';
// import {} from '../fonts/rotterburg-font/RotternBurg'
const GlobalStyle = createGlobalStyle`
*,*::after,*::before {
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
}
* @font-face{       
  font-family: "RotternBug";
  src: local("RotternBug"),
  url("../fonts/rotterburg-font/RotternBurg.otf") format("otf");
  font-weight: bold;
}
::-webkit-scrollbar {
    width: 7px;
    height: 5px;
    
  }
  ::-webkit-scrollbar-thumb {
    background:#fff;
    border-radius: 10px;
    
  }
  ::-webkit-scrollbar-track {
          background: black;
      }
`
export default GlobalStyle
