import styled from 'styled-components'

const SelectStyle = styled.div`
    z-index: 1;
    position: absolute;
    background:#191717db;
    display: flex;
    flex-direction: column;
    color:#000;
    width: 100%;
    height:115px;
    top: 105%;
    border-radius: 4px;
    
    .selectOption{
        height: calc(100% / 4);
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid;
        color:#fff;
        transition:0.4s;
            &:hover{
                background:#fff;
                color:black;
                transition:0.4s;
                border-bottom: none;
            }
            &:first-child{
                border-top-right-radius: 3px;
                border-top-left-radius: 3px;
            }
            &:last-child{
                border-bottom-right-radius: 3px;
                border-bottom-left-radius: 3px;
                border-bottom:none;
            }
    }
`
export {SelectStyle}