import { SEARCH_ITEM } from "../Constants/searchConstant";

export const searchReducer=(state={searchs:{}},action)=>{

    switch(action.type){
    case SEARCH_ITEM:
        return{
            ...state,searchs:action.payload
        }
    default:
        return state;
    
    }
    }