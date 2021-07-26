import styled from 'styled-components';

const BookContainerStyle = styled.div`
position: relative;
padding: 10px 0;
#bookContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        color:rgba(201, 172, 140, 1);
        font-size:31px;
        margin-bottom: 1.5rem;
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
        max-width: 100%;
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
    margin-top: 2rem;
    .book{
        img{
            border-radius: 15px;
        }
       .info{
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
       }
    }
}
  
` 
export {BookContainerStyle}