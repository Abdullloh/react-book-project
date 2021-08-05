import styled from 'styled-components'

const AccountContainer = styled.div`
width: 100%;
height: calc(100vh - 80px);
display: flex;
flex-wrap:wrap;
background: #191919;
color: white;
   .imgContainer{
       width:30%;
       height:50%;
       align-items: center;
       justify-content: center;
       display: flex;
     div{
        height: 175px;
        width: 175px;
        position:relative;
         img{
            height:100%;
            width:100%;
            border-radius: 50%;
         }
         .cameraIcon{
            position: absolute;
            right: 0;
            bottom: 0;
            font-size: 45px;
            background: #f3f6f91f;
            border-radius: 8px;
            padding: 8px 8px;
            cursor: pointer;
            &:hover{
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
            }
         }
     }
   }
`
export {AccountContainer}