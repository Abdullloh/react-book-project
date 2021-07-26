import styled from 'styled-components';


const SearchContainer = styled.div`
        padding: 40px 100px;
        max-width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        position:relative;
        bottom:20px;
        height: 169px;
        width: 1154px;
        max-width: 90%;
        background: #191919;
        box-shadow: 0px 4px 77px rgb(0 0 0 / 25%);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
          color:  #C9AC8C;
          font-size: 31px;
        }
     div{
       width:100%;
        input{
          height:47px;
          width:70%;
          background: #404040;
          border-radius: 15px;
          border:none;
        }
        button{
            height:47px;
            width:25%;
            background: #C9AC8C;
            border-radius: 15px;
            border:none;
            cursor:pointer;
            color: #3C2710;
            font-size: 16px;
            margin-left:1.5rem;
        }
     }
`
export{SearchContainer}