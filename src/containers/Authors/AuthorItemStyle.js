import styled from 'styled-components'
import frame1 from '../../assets/images/bg1.svg'
import frame2 from '../../assets/images/bg2.svg'
const AuthorItemStyle = styled.div`
margin: 0 15px 30px ;
border-radius: 15px;
box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  .ant-card{
    width: 240px;
    width:240px;
    background: linear-gradient(209.09deg, #191919 -1.68%, #212121 135.36%);
    border: none;
    border-radius: 15px;
    &:hover{
        box-shadow: 0 5px 5px hsl(0deg 0% 100% / 20%);
    }
    .ant-card-body{
        text-align:center;
      background:url("../../assets/images/bg1.svg");
      .ant-card-meta{
          .ant-card-meta-detail{
              .ant-card-meta-title{
                  color:white
              }
              .ant-card-meta-description{
                  color:white;
              }
          }
      }
    }
  }
`
export {AuthorItemStyle}