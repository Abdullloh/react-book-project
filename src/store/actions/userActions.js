import * as actions from '../actionTypes'
//Action Creator
export const  updateUserAction = ({user,token})=>{
    console.log(user,token)
  return {
    type:actions.UPDATE_USER,
    payload:{user,token},
  }
}