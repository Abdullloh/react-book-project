import styled from 'styled-components'


const AuthorPage = styled.div`
background: #191919;
overflow-x: hidden;
.slider-container{
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 54px;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
     .ant-carousel{
        width: 100%;
        .slick-slider{
            width: 100%;
            .slick-dots{
                width: 100%;
                margin:0;
                bottom: 87px;
                left: 86px;
                list-style:none;
                width: 260px;
                li{
                    list-style:none;
                    width: 57px;
                    & .active{
                        width: 95px
                    }
                    button{
                        &::before{
                            display:none;
                        }
                    }
                }
            }
        }
     }
     }
     form{
        position: relative;
        top: -50px;
        width: 1114px;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 95%;
        border-radius: 15px;
        padding: 35px 100px;
        background-color: rgb(25, 25, 25);
        display: flex;
        flex-wrap: wrap;
        box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px 0px;
        h1{
            width: 100%;
            text-align: center;
            font-family: "Rotterburg Stylish FREE";
            font-size: 31px;
            color: rgb(201, 172, 140);
            margin-bottom: 15px;
        }
        input{
            padding: 10px 27px;
            height: 47px;
            border-radius: 15px;
            margin-top:0;
            width: calc(100% - 174px);
            background-color: rgb(64, 64, 64);
            border: none;
            font-size: 16px;
            color: rgb(255, 255, 255);
        }
        button{
            margin-left: 14px;
            cursor: pointer;
            width: 160px;
            height: 47px;
            border-radius: 15px;
            background-color: rgb(201, 172, 140);
            border: 1px solid rgb(201, 172, 140);
            color: rgb(60, 39, 16);
            font-size: 16px;
            letter-spacing: 1px;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            transition: all 0.3s linear 0s;
            svg{
                margin-right:8px;
            }
            &:hover{
                outline: none;
                color: rgb(201, 172, 140);
                background-color: transparent;
                svg{
                    path{
                        fill:rgb(201, 172, 140);
                    }
                }
            }
        }
     }
}
.author-wrapper{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    
}
`
export {AuthorPage}