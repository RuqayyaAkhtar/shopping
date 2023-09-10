import { DELCART_USER } from "../Constants/delCartConstant";
export const delCart=(del)=>async(dispatch)=>{
    const delitem=JSON.parse(localStorage.getItem("cart"))
    const delData=delitem.filter((item)=>{
        return item.id !==del
    })
    localStorage.setItem("cart", JSON.stringify(delData))
    dispatch({
        type:DELCART_USER,
        payload:{msg:"item has been deleted from cart",type:"success"}
    })
 
}