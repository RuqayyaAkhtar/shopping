import React, { useState } from 'react';
// import {BiLogoFacebook} from 'react-icons/bi'
// import {AiOutlineTwitter} from 'react-icons/ai'
// import {AiOutlineGooglePlus} from 'react-icons/ai'
// import {BiLogoPinterest} from 'react-icons/bi'
// import {AiOutlineInstagram} from 'react-icons/ai'
import { userCart } from '../Actions/cartAction';
import { useDispatch } from 'react-redux';
import {AiOutlineClose} from 'react-icons/ai'
import { qtyAction } from '../Actions/cartAction';

const PopUp = ({type,closepop,detail}) => {
  const dispatch=useDispatch()
  const [qty,setQty]=useState(1)

  const addToCart=(detail,qty)=>{
  dispatch(userCart(detail,qty))
  }
  const setQuantity=()=>{
    dispatch(qtyAction())
  }
  return (
    <div className='details'>
        {type==='pop-up' && <div className={`${type}`}>
      <div className="pop-right">
        <div className="image-div">
            <img src={detail.img} alt="" />
        </div>
      </div>
      <div className="pop-left" id='pop'>
      <AiOutlineClose className='cros' onClick={closepop} />
        <div className="pop-info">
            <h1>{detail.name}</h1>
            <p>4 rewiews</p>
            <h2>{detail.price}</h2>
            <p className='info-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
            <p className='view'>VIEW PRODUCT DETAILS</p>
            <div className="color">
                <p className='bp'>COLOR: <span className='sp'>Yellow</span></p>
            <p className='c-sp'><span className='red red11'></span> <span className='blue red red11'></span> <span className='pup red red11'></span></p>
            </div>
            <div className="size">
                <span className='bp'>SIZE: <span className='sp'>M</span> </span>
                <div className="b">
                    <button>M</button><button>L</button><button>XL</button>
                </div>
                <p className='pop-pop'><span className='small'>$95 </span> <span className='s-big'>{detail.price}</span></p>
            </div>
            <div className="add-cart">
                <div className="incr">
                    <button onClick={()=>{setQty(qty-(qty===0? 0:1))}}>-</button>
                    <span>{qty}</span>
                    <button onClick={()=>{setQty(qty+1)}}>+</button>
                </div>
                <button className='add' onClick={()=>{addToCart(detail,qty)}} >ADD TO CART</button>
            </div>
            <p className='or'>or</p>
            <button className='buy'>BUY IT NOW</button>

            {/* <div className="share">
            <BiLogoFacebook/>
        <AiOutlineTwitter/>
        <AiOutlineGooglePlus/>
        <BiLogoPinterest/>
        <AiOutlineInstagram/>
            </div> */}
            
        </div>
      </div>
      </div>}
    </div>
  );
}

export default PopUp;
