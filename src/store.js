
import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"


import { signupReducer } from "./Reducers/signupReducer"
import { loginReducer } from "./Reducers/loginReducer"
import { cartReducer } from "./Reducers/cartReducer"
import { delCartReducer } from "./Reducers/delCartReducer"
import { searchReducer } from "./Reducers/searchReducer"
// thunk------redux-thunk
const middleware=[thunk]


const initialState={

}

// combineReducers----redux
const reducer=combineReducers({
    signups:signupReducer,
    logins:loginReducer,
    cart:cartReducer,
    delCart:delCartReducer,
    Searchs:searchReducer
})



// createStore------redux
const store=createStore(reducer,initialState,applyMiddleware(...middleware))

export default store