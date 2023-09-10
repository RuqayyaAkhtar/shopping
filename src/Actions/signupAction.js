import { SIGNUP_USER } from "../Constants/signupConstants"


export const signupAction=(user)=>async(dispatch)=>{
    var allusers=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")):[]
   
    var userEx=allusers.find((usr)=>{
        return usr.email===user.email
      })
      
      if(userEx){
         dispatch({
        type:SIGNUP_USER,
        payload:{msg:"User Already exist",type:"danger"}

    })
    }else{
        allusers.push(user)
        localStorage.setItem("users",JSON.stringify(allusers))
        dispatch({
            type:SIGNUP_USER,
            payload:{msg:"User registered successfully",type:"success"}
        })
         
      }

}
