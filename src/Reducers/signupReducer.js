import { SIGNUP_USER } from "../Constants/signupConstants"
export const signupReducer=(state={signups:{}},action)=>{

switch(action.type){
case SIGNUP_USER:
    return{
        ...state,signups:action.payload
    }
default:
    return state;

}
}
