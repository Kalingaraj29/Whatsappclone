import React from 'react'
import download from './download.png'
import { signin } from '../Firebase/Firebase'
import { auth } from '../Firebase/Firebaseconfig'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {userin} from '../features/counter/counterSlice'
function Login() {
  
  const navigate=useNavigate(); 
  const dispatch=useDispatch();
  function signinwithauth() {
    signin(auth).then((result) => {
      navigate('/')
      const username=result.user.displayName
       dispatch(userin(username))
    }).catch((error) => {
      const errorMessage = error.message;
  console.log(errorMessage);
  })
  }
  return (

    <div className='Login'> 
      <img src={download} alt="" />
      <button onClick={signinwithauth}>Login</button>
    </div>
  )
}

export default Login
