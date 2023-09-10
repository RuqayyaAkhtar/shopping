import React from 'react';
import { useEffect } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import Alert from "./Alert";
import { useDispatch, useSelector } from "react-redux";
import { delCart } from '../Actions/delCartAction';
import { userCart } from '../Actions/cartAction';
import { useState } from 'react';

const Cart = ({closeSignup}) => {
  const dispatch=useDispatch()
  var showCartData=JSON.parse(localStorage.getItem("cart"))
  const { type } = useSelector((state) => state.cart.cart);
  console.log(type,"typpee")

  
    useEffect(() => {
      if(type==="success"){
      dispatch(userCart());
      }
    }, [type]);
    // console.log("okkkk000")
  



  const updateQty=(item,qty)=>{
    dispatch(userCart(item,qty))
  }

  const deleteArray=(id)=>{
  dispatch(delCart(id))
  }

  return (
    <>
     <div className="signup">
      <div className='sign-up'>
        <h2>YOUR CART</h2>
        <AiOutlineClose className="cros cros1" onClick={closeSignup}/>
        <div className="show-cart-main">
        {
          showCartData && showCartData.map((item)=>{
            console.log(showCartData,"dataa///.....")
          return<>
         
          <div className="cart-detail">
            <div className="cart-image"><img src={item.img} alt="" /></div>
            <div className="cart-info">
            <div className="c-info">
                        <h4>Float Coats Haavy</h4>
                        <p className='cart-p cp'>bwown / S</p>
                        <p className='cart-p'>{item.price}</p>
            </div>
            <div className="increment">
            <div id='inc'>
                    <button onClick={()=>{updateQty(item,item.qty-(item.qty===0? 0:1))}}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={()=>{updateQty(item,item.qty+1)}}>+</button>
                </div>
             <button className='remove' onClick={()=>{deleteArray(item.id)}}>Remove</button>
            </div>

            </div>
          </div> </>})}
          </div>
          <div className="offer">
            <span className='subtotal'>Subtotal</span>
            <span className='total'>$181</span>
          </div>
        <button className='vieww' >VIEW CART</button>
        <button className='add1'>CHECK OUT</button>
        
      </div>
    </div>
      
    </>
  );
}

export default Cart;
