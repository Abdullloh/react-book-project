import * as actions from '../actionTypes'
 const initialState= {
     token:null,
     user:{}
 }
const userReducer = (state = initialState, action) => {
  const { user, token } = {...action?.payload }
  console.log(state,action)
    console.log(user,token)
    switch (action.type) {
        case actions.UPDATE_USER: {
          return { ...state, user, token }
        }
        default: {
            return state;
          }
    }
}
export default userReducer