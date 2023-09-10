import { LOGIN_USER } from "../Constants/loginConstant";
export const loginReducer=(state={logins:{}},action)=>{

    switch(action.type){
    case LOGIN_USER:
        return{
            ...state,logins:action.payload
        }
    default:
        return state;
    
    }
    }