import React from 'react';
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {BiLogoPinterest} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Li from 'react-bootstrap/Li';
import {HiMagnifyingGlass} from 'react-icons/hi2'
// import {BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'
import {BsChevronDown} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'
import Signup from './Signup';


const Navv = ({signup,showCart,showSearch}) => {
  return (
    <div className='nav-main'>
      <div className="nav1">
        <div className="right-ic">
        <BiLogoFacebook/>
        <AiOutlineTwitter/>
        <AiOutlineGooglePlus/>
        <BiLogoPinterest/>
        <AiOutlineInstagram/>
        <p>Call: +01 23456789</p>
        </div>
        <div className="l-text">
          <p>English</p>
          <p>USD</p>
        </div>
      </div>
      <div className="nav2">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container className='con-1'>
        <Nav className='nom'>
          <ul className='ul'>
          <li>Shop <BsChevronDown className='dw'/></li>
          <li>Blog <BsChevronDown className='dw'/></li>
          <li>pages</li>
          <li>buy theme!</li>
          </ul>
        </Nav>
        <div className="li2">
        <HiMagnifyingGlass onClick={showSearch}/>
        <BsPerson onClick={signup}/>
        <AiOutlineHeart/>
        <BsCart onClick={showCart}/>
        </div>

      </Container>
    </Navbar>



      </div>

    </div>
  );
}

export default Navv;
