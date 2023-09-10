import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import { searchData } from '../Actions/searchAction';
import { useDispatch ,useSelector} from 'react-redux';
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineShopping} from 'react-icons/ai';
import {AiOutlineEye} from 'react-icons/ai'
import { useState } from 'react';

const Search = ({closeSignup}) => {
  const [show , setpop]=useState(false)
  const [detail,setDetail]=useState({})

  const showPop=(item)=>{
    setpop(true)
    setDetail(item)
  }

    // const addToCart=(item)=>{
    //  dispatch(userCart(item))
    // }

  const dispatch=useDispatch()

  const {data}=useSelector((state)=> state.Searchs.searchs)
  console.log(data,"data..///")

  const searchItem=(e)=>{

  dispatch(searchData(e.target.value))
  
  const div=document.getElementById('s-dv')
  div.classList.add("new")
  }
  return (
    <div>
      <div className="s-main details ">
        <div className="s-div" id='s-dv'>
        <input type="text" name="txt" id="search" placeholder='Search for products' onChange={searchItem} />
        <AiOutlineClose onClick={closeSignup} className='cross'/>
        <div className="itemss">
          {
            data && data.map((item)=>{
              return <>
                    <div className="shop-c item-main">
            <div className="image-main c1">
              <img src={item.img} alt="" className='g1'/>
              <img src={item.img2} alt="" className='g11' />
              <div className="icon-d">
                <AiOutlineHeart className='heart'/>
                <AiOutlineEye className='eye' onClick={()=>{showPop(item)}} />
                <AiOutlineShopping className='bag' />
              </div>
            </div>
            <p>{item.name}</p>
          </div> 
              </>
            })
          }
        </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
