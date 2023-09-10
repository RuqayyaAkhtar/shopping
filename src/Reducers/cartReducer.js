import { USER_CART } from "../Constants/cartConstant";
export const cartReducer=(state={cart:{}},action)=>{

    switch(action.type){
        case USER_CART:
            return{
                ...state,cart:action.payload
            }
            default:
                return state;
    }
}