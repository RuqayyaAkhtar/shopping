import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineShopping} from 'react-icons/ai';
import {AiOutlineEye} from 'react-icons/ai'
import { useState } from 'react';
import Container from "react-bootstrap/Container";
// import {cartAction} from '../Actions/cartAction'
import { userCart } from '../Actions/cartAction';
import { useSelector,useDispatch } from 'react-redux';
import PopUp from './PopUp';
const Shop = ({Data,type}) => {
    const [show , setpop]=useState(false)
    const [detail,setDetail]=useState({})
    const dispatch=useDispatch()

    const showPop=(item)=>{
      setpop(true)
      setDetail(item)
    }
    const closepop=()=>{
        setpop(false)
      }
      const addToCart=(item)=>{
       dispatch(userCart(item))
      }
      

  return (
    <div>
        {show && <PopUp closepop={closepop} type={"pop-up"} detail={detail} />}
       <Container fluid='xxl' className='shop'>
        <div className={`div right ${type=="women"?"_m":"_w"}`}></div>
        <div className="div left">
        <h2>For Her</h2>
        <div className="shop-main">
             {
            Data && Data.map((item)=>{
              
                return<>
               <div className="shop-c ">
            <div className="image-main c1">
              <img src={item.img} alt="" className='g1'/>
              <img src={item.img2} alt="" className='g11' />
              <div className="icon-d">
                <AiOutlineHeart className='heart'/>
                <AiOutlineEye className='eye' onClick={()=>{showPop(item)}} />
                <AiOutlineShopping className='bag' onClick={()=>{addToCart(item)}} />
              </div>
            </div>
            <p>{item.name}</p>
            <p className='red-d'>{item.price} <span className='red'></span> <span className='blue red'></span> <span className='pup red'></span></p>
          </div> 
                </>
            })
           }
          <div className="last-s">
          <span className='lin1'></span>
          <p className='lost'>shop now</p>
          <span className='lin2'></span>
        </div>
        </div>
       
        </div>

      </Container>
      
    </div>
  );
}

export default Shop;
