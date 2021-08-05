import styled from 'styled-components'

const HeaderUserStyle = styled.div`
 display:flex;
 height:80px;
 align-items: center;
 width:100%;
 flex-wrap: wrap;
 background:#191919;
.settings{
      height:100%;
      width:298px !important;
      border:1px solid;
      display: flex;
      align-items: center;
      border: 1px solid rgba(243,246,249,.1);
      border-radius: 4px 4px 0 0;
      flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(25% - 4px);
    cursor: pointer;
      padding: 0 26px;
      margin-left:4px;
      &:first-child{
        margin-left:0px;
      }
      span{
        height: 35px;
        width: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: #e5eaee;
        color: #3699ff;
        margin-right: 5px
      }
      p{
        color: hsla(0,0%,100%,.6);
      }
  }
  .active{
    background: hsla(0,0%,100%,.2)
  }
 

`
export {
    HeaderUserStyle
}