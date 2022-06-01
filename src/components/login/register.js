// import { Ra } from "tabler-icons-react"
import axios from 'axios';
import React, { useState } from "react"
import './register.css'
import { Link } from 'react-router-dom';


import { useHistory } from 'react-router-dom';

import { uiActions } from '../../store/uislice';

import { useDispatch } from 'react-redux';

const Register=()=>{
  const dispatch=useDispatch(); 
  const history=useHistory();
  
  const [result,setresult]=useState('');

  let viewdata={
    name:'',
    email:'',
    password:'',
    passwordconfirm:''
  }
const registeruser=async(Event)=>{
  Event.preventDefault();
    viewdata.name= Event.target[0].value;
    viewdata.email= Event.target[1].value;
    viewdata.password= Event.target[2].value;
    viewdata.passwordconfirm= Event.target[3].value;




    const getback=axios.post('https://newapp0511.herokuapp.com/api/users/',viewdata);
    getback.then(value=>  {
      console.log(value.data.status);

      if(value.data.status==='success')
      {
        alert("you registered successfully");
        dispatch(uiActions.toggle());

          setresult('success');
          <Link to="/welcome" weight={700} >
          Register
        </Link>
             history.push('/welcome');

      }
      else
      {
      alert("Make sure email is right and password is min 8 length");
   console.log("fbsjbfs");
      }
      //  if(value.data.status==='success')
      //  console.log('fsfsfs');

    })

    

}



    return(
<div>
<form onSubmit={registeruser} >
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>
   
    <label htmlFor="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required/>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password and length should be min 8" name="psw" id="psw" required/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr/>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" className="registerbtn">Register</button>
  </div>
  
  <div className="container signin">
    <p>Already have an account?<Link to="/welcome" weight={700} >
            Register
          </Link>.</p>
  </div>
</form>
   {result==='success'?( <Link to="/product" weight={700} >
            Register
          </Link>):( <Link to="/register" weight={700} >
            Register
          </Link>)}
</div>
    )
}


export default Register;