import { LOGIN_USER } from "../Constants/loginConstant"


export const loginAction=(user)=>async(dispatch)=>{
    var newuser=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")):[]
    const userExist=newuser.find((usr)=>{
       return usr.email===user.email
       })
   
       if(userExist){
           if(userExist.password===user.password){
               dispatch({
                   type:LOGIN_USER,
                   payload:{msg:'User has been successfully loggedin', type:'success'}
               })
               localStorage.setItem("loggedIn", JSON.stringify(user))
           }  else{
               dispatch({
                   type:LOGIN_USER,
                   payload:{msg:'wrong password', type:'warning'}
               })
           }
         }else{
           dispatch({
               type:LOGIN_USER,
               payload:{msg:'User does not exist', type:'danger'}
           })
         }
   
   }