import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Chatbox from './Components/Chatbox';
import Login from './Components/Login';
import { BrowserRouter, Navigate, Route ,Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase/Firebaseconfig';
import { userin } from './features/counter/counterSlice';


function App() {
  const {user}=useSelector((state)=>state.counter)
  const dispatch=useDispatch();
useEffect(()=>{
  onAuthStateChanged(auth, (response) => {
  if (response) {
    console.log(response);
    const uid = response.displayName;
   
    dispatch(userin(uid))

  } else {
   console.log("signedout");
  }
})},[])


  return (
    <div className="app">
    <BrowserRouter>
  
<Routes>
<Route  path='/' element={  <Header/>}>
<Route  path='/chat/:id' element={ <Chatbox/>}/>
</Route>
<Route path='/signin' element={<Login/>}/>
</Routes>

</BrowserRouter>
</div>
  )
}

export default App;
