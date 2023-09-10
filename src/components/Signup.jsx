import React from "react";
import { useState, useEffect } from "react";
import {BsPerson} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import Alert from "./Alert";
import { useDispatch, useSelector } from "react-redux";
// import { signupAction } from "../actions/signupActions";
import { signupAction } from "../Actions/signupAction";
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import {AiOutlineFile} from 'react-icons/ai'
import {BsPersonPlus} from 'react-icons/bs'
import{AiOutlineLock} from 'react-icons/ai'
// import { Link } from "react-router-dom";

const Signup = ({closeSignup,showlog}) => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [alert, setAlert] = useState({ show: false });
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const { msg, type } = useSelector((state) => state.signups.signups);

    console.log(msg, "msg");
    useEffect(() => {
      handleAlert({ msg: msg, type: type });
    }, [msg]);
  
    const submit = (e) => {
      e.preventDefault();
      if (!user.email.includes("@")) {
        handleAlert({ msg: "invalid email!", type: "warning" });
      } else if (user.password.length < 9) {
        handleAlert({
          msg: "Password length must be greater than 8",
          type: "warning",
        });
      } else {
        dispatch(signupAction(user));
      }
    };
  
    
    const handleAlert = ({ msg, type }) => {
      if(type==='success'){
        // setTimeout(() => {
        //   navigate("/login");
        // }, 2000);
      }
      setAlert({ show: true, msg: msg, type: type });
    
    };
  return (
    <div className="signup">
      <div className='sign-up'>
     {alert.show && <Alert msg={alert.msg} type={alert.type} />}
        <h2>SIGN UP</h2>
        <AiOutlineClose className="cros cros1" onClick={closeSignup}/>
        <form onSubmit={submit}>
          <label htmlFor="nam">Name</label>
          <div className="inp-main">
            <AiOutlineFile className="in"/>
          <input
          id="nam"
            name="name"
            onChange={handleChange}
            type="text"
          />
          </div>
       
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
          {/* <button>sign</button> */}
          <button>REGISTER</button>
        </form>
        <BsPerson className="pr"/>
        <p className="nop">No account yet?</p>
        <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
        <button className="rout" onClick={showlog} >Login</button>
        {/* <li className="rout"><Link to={"/login"}>Login</Link></li> */}
      </div>
    </div>
  );
};

export default Signup;