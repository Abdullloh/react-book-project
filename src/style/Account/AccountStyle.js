import styled from 'styled-components';

const AccountStyle = styled.div`
height:100%;
width:70%;
max-width:100%;
padding: 50px 30px;
 .formContainer{
    width: 80%;
    height: 100%;
    max-width: 100%;
    form{
        max-width: 100%;
        button{
            height: 46px;
    padding: 12px 20px;
    font-weight: 700;
    font-family: "Roboto Bold";
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s linear;
    cursor: pointer;
    overflow: hidden;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    background: #152540;
    border: 1px solid #152540;
    margin-top: 35px;
    margin-left: auto;
    &:hover{
        outline: none;
        background: #fff;
        color: #152540;
    }
        }
      .input-wrapper{
        label{
            display:block;
        }
        input{
            width: 708px;
            max-width:100%;
            height: 44px;
            background: #F3F6F9;
            border-radius: 4px;
            border: transparent;
        }
        p{
            font-size: 12px;
            line-height: 18px;
            color: #B5B5C3;
            opacity: 0.8;
        }
       
      }
      .input-wrapper-50{
          display:flex;
          width:708px;
          max-width:100%;
          .phone{
              width:50%;
              label{
                display:block;
            }
            .phone{
                width: 90%;
                max-width:100%;
                height: 44px;
                background: #F3F6F9;
                border-radius: 4px;
                border: transparent;
            }
            p{
                font-size: 12px;
                line-height: 18px;
                color: #B5B5C3;
                opacity: 0.8;
            }
           
              &:last-child{
                  .email{
                    width: 100%;
                    max-width:100%;
                    height: 44px;
                    background: #F3F6F9;
                    border-radius: 4px;
                    border: transparent;
                  }
              }
          }
         
      }
    }
 }
`
export {AccountStyle}