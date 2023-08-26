import React, { useState } from 'react'
import { Avatar, IconButton } from '@mui/material'
import { FaRocketchat,FaBars,FaSearch } from "react-icons/fa";
import { auth, db } from '../Firebase/Firebaseconfig';
import { Fetchlivedata, adddoc, getdataid, signout } from '../Firebase/Firebase';
import { Outlet, useNavigate } from 'react-router-dom';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { usersignout } from '../features/counter/counterSlice';

export default function Header() {

 const {user} =useSelector((state)=>state.counter)


const dispatch=useDispatch();


 const posts=Fetchlivedata("posts")

 const navigate=useNavigate()
 const[searchvalue,setsearchvalue]=useState('');
 const[messg,setmessg]=useState('');
 function handlefunc(e) {
  e.preventDefault();
adddoc(db,"posts",searchvalue)
setsearchvalue("")
 }


//  function loaded(id) {
//   let collectionRef = collection(db, "posts", id, "groupmessages");
//    const q=query(collectionRef,orderBy("createdat",'asc'))
// onSnapshot(q, (querySnapshot) => {
//   let result=[]
//     querySnapshot.forEach((doc) => {
//       result.push(doc.data().messages)
//     });
//    setmessg(result[result.length-1]);
//   });
//  }

function signoutfunc() {
  signout(auth).then(() => {
    navigate('/signin')
    dispatch(usersignout(""))
  }).catch((error) => {
    // An error happened.
  });
 
 
}

  return (
    <>
    <div className='headsidebars'>
    <button onClick={signoutfunc}>Logout</button>
    <p>Welcome {user}</p>
    <div className='headers'>
        <div className="headerstop">
        <div className="header_avatar">
        <Avatar alt="Remy Sharp" src= "https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg"/>
        </div>
        <div className="header_right">
        <IconButton> <FaRocketchat/></IconButton>
        <IconButton> <FaBars/></IconButton>
        </div>
        </div>
        <div className="searchicon">
            <div className="searchicon_search">
                <FaSearch/>
            </div>
            <form onSubmit={handlefunc}>
            <div className="searchicon_input">
                  <input type="text" placeholder='Search or start a new chat ' value={searchvalue} onChange={(e)=>{setsearchvalue(e.target.value)}}/>
            </div>
            </form>
        </div>
    </div>
    <div className="chatlist">
      {posts && posts.map((element)=>{
         const {name,message,createdat,id}=element
     //const mesg=loaded(id)
         return(
            <div key={createdat} className='div' onClick={()=>{
              navigate(`/chat/${id}`)
            }}>
            <div className="chatlisthead">
            <div className="chatlist_avatar">
        <Avatar style={{width:'40px'}} alt="Remy Sharp" src= "https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg"/>
        </div>
        <div className="chatlistnamemsg">
         <div className="chatlist_name">
              <h4>{name}</h4>
         </div> 
         </div>
         </div>
         </div>
         )
       })}
    </div>
    
    </div>
    <Outlet/>
     </>
   
  )
}
