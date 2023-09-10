import React from 'react';
import Alert from './Alert';
import { useState,useEffect } from 'react';
import {BsPersonPlus} from 'react-icons/bs'
import{AiOutlineLock} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
// import { Link } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux';
import { loginAction } from '../Actions/loginAction';

const Login = ({closeSignup,showSignup}) => {
  const dispatch=useDispatch()
  const [user, setUser] = useState({});
  const [alert,setAlert]=useState({show:false});
  // const [msg,setMsg]=useState({});
  
  const handleChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { msg, type } = useSelector((state) => state.logins.logins);

  useEffect(() => {
    handleAlert({ msg: msg, type: type });
  }, [msg]);

  const loggedin=(e)=>{
    e.preventDefault()
    
    if (!user.email.includes("@")) {
      handleAlert({ msg: "invalid email!", type: "warning" });
    }else{
      dispatch(loginAction(user))
    } 
  }


  const handleAlert=({msg,type})=>{
 
    setAlert({ show: true, msg: msg, type: type });
}

  return (
    <div className='signup'>
    <div className='log-in'>
    {alert.show && <Alert msg={alert.msg} type={alert.type} />}
        <h2>LOGIN</h2>
        <AiOutlineClose className="cros cros1" onClick={closeSignup}/>
        <form onSubmit={loggedin}>

          <label htmlFor="mail">Email</label>
          <div className="inp-main">
            <BsPersonPlus className="in"/>
          <input
          id="mail"
            name="email"
            onChange={handleChange}
            type="email"
          />
          </div>
          <label htmlFor="pass">Password</label>
          <div className="inp-main">
            <AiOutlineLock className="in"/>
          <input
          id="pass"
            name="password"
            onChange={handleChange}
            type="password"
          />
        </div>
          <button>LOGIN</button>
        </form>
        <BsPerson className="pr"/>
        <p className="nop">No account yet?</p>
        <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
        <button className="rout" onClick={showSignup}>signup</button>
        {/* <li className="rout"><Link to={"/login"}>Login</Link></li> */}
      </div>
    </div>
  );
}

export default Login;