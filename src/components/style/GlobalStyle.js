import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before {
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none

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
