import { UPDATE_USER,CLEAR_USER,UPDATE_LANGUAGE } from "../actionTypes"
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
export const updateLanguageAction = (lang) => {
  return {
    payload: lang,
    type: UPDATE_LANGUAGE,
  }
}
