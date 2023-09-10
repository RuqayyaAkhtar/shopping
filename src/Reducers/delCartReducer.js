import {DELCART_USER} from '../Constants/delCartConstant'
export const delCartReducer=(state={delCartData:{}},action)=>{
switch(action.type){
case DELCART_USER:
    return{
        ...state,delCartData:action.payload
    }
    default : 
    return state
}
}