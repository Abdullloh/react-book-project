import styled from 'styled-components';

const BookItemStyle = styled.div`
margin:0 5px;
cursor:pointer;
.book-img{
    position: relative;
	overflow: hidden;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
    border-radius: 15px;
    img{
        border-radius: 15px;
        width:164px;
        max-width:100%;
        height:264px;
        vertical-align: top;
        max-width: 100%;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        &:hover{
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            border-radius: 15px;
        }
    }
}
.book-info{
h6{
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #C9AC8C;
}
p{
    font-weight: 300;
    font-size: 12px;
    line-height: 144.4%;
    color: rgba(255, 255, 255, 0.6);
}

`
export { BookItemStyle}