import * as actions from '../actionTypes'
//Action Creator
export const  updateUserAction = ({user,token})=>{
    console.log(user,token)
  return {
    payload:{user,token},
    type:actions.UPDATE_USER,
  }
}