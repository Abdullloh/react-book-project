import styled from 'styled-components'

const UserStyle = styled.div`
height: calc(100vh - 80px);
width: 100%;
padding: 0 77px 0 81px;
background: #191919;
.topSection{
    position: relative;
    max-width: 1281px;
    margin: auto;
    top: 21px;
    width: 100%;
    img{
        width: 100%;
    }
    .user{
        position: absolute;
        top: 0;
        color: white;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 0 0 0 96px;
        .user_Image{
            height: 169px;
            width: 169px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                height: 100%;
                border-radius: 50%;
            }
        }
            .user_Info{
                margin-left: 34px;
                h3{
                    font-size: 32px;
                    line-height: 144.4%;
                    color: #C9AC8C;
                    font-weight: normal;
                }
        }
    }
}
.category{
    position: relative;
    top: 30px;
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);
    h4{
        margin:0 10px;
        cursor:pointer;
        font-size: 20px;
        line-height: 20px;
        font-style: normal;
        font-weight: normal;
        &:hover{
            color: #C9AC8C;
        }
    }
    
}

  
`
export {UserStyle}