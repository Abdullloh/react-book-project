import { UPDATE_USER,CLEAR_USER } from "../actionTypes"
//Action Creator
export const  updateUserAction = ({user,token}) => {
    
  return {
    payload:{user,token},
    type:UPDATE_USER,
  }
}
export const  clearUserAction = () =>{
  return {
    type:CLEAR_USER
  }
}