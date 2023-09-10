import { USER_CART } from '../Constants/cartConstant'
import { CREATE_QTY } from '../Constants/cartConstant'

export const userCart = (cart, qty) => async (dispatch) => {
  console.log(cart.id, "cartttt")
  var array = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  console.log(array, "aarrra")
  //   array.push(cart)
  //   localStorage.setItem("cart",JSON.stringify(array))

  var cartData = array.find((usr) => {
    return usr.id === cart.id
  })

  if (cartData) {
    cartData.qty = qty
    localStorage.setItem("cart", JSON.stringify(array))
    console.log(cartData, "cart-dataa123445")

  } else {
    array.push(cart)
    localStorage.setItem("cart", JSON.stringify(array))
  }
  dispatch({
    type: USER_CART,
    payload: { msg: "item has been added to cart", type: "success" }
  })

}

export const qtyAction = (qty) => (dispatch) => {
  dispatch({
    type: CREATE_QTY,
    payload: { msg: "" }
  })
}