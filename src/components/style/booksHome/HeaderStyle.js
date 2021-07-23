import style from 'styled-components';


const Header = style.header`
    height:80px;
    max-width:100%;
    background: #191919;
    display: flex;
    padding:0 30px 0 20px;
    align-items: center;  
    justify-content:space-between;
    a{
        color:
        rgba(201, 172, 140, 1);
    }
    nav{
        height:100%;
        display:flex;
        align-items:center;
        ul{
            display:flex;
            height:100%;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            margin-top: 0;
            list-style:none;
            li{
                margin-right:33.5px;
                height: 100%;
                display: flex;
                align-items: center;
                a{
                    color:white;
                    position:relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    
                    &::before{
                        content:'';
                        position:absolute;
                        bottom:0;
                        height:2px;
                        left:0;
                        width:0%;
                        background-color:white;
                        visibility:hidden;
                        transition:0.5s;
                    }
                    &:hover{
                        transition:0.5s;
                        &::before{
                            width:100%;
                            transition:0.5s;
                            visibility: visible;
                        }
                    }
                }
            }
        }
    }

`
export  {Header}