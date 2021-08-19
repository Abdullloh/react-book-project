import {CLEAR_USER,UPDATE_USER,UPDATE_LANGUAGE} from '../actionTypes';

 const initialState= {
     token:null,
     user: {
      lang: 'eng'
    },
 };
const userReducer = (state = initialState, action) => {
  const { user, token } = { ...action?.payload };

    switch (action.type) {
        case UPDATE_USER: {
          return { ...state, user, token }
        }
        case UPDATE_LANGUAGE :{
          return {
            ...state,
            user: {
              ...state.user,
              lang: action.payload
            }
          };
        }
        case CLEAR_USER: {
          return initialState;
        }
        default: {
            return state;
          }
    }
};
export default userReducer