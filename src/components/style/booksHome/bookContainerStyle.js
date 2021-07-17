import styled from 'styled-components';

const BookContainerStyle = styled.div`
position: relative;
top: 120px;
padding: 10px 0;
#bookContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        color:rgba(201, 172, 140, 1);
        font-size:31px;
    }
    ul{
        list-style: none;
        display: flex;
        color: rgba(255, 255, 255, 0.6);
        font-size: 20px;
        width: 787px;
        align-items: center;
        height: 40px;
        justify-content: space-around;
        li{
            a{
                color: rgba(255, 255, 255, 0.6);
            }
        }
    }
}
#books{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 80px;
}
  
` 
export {BookContainerStyle}