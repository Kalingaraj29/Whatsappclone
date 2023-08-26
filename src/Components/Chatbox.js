import React, { useEffect, useState } from 'react'
import './Chatbox.css'
import { FaSmile,FaMicrophone } from "react-icons/fa";
import { Avatar, IconButton } from '@mui/material'
import { useParams } from 'react-router-dom';
import { addmessages, fectchmessagedata, groupname, gruopname } from '../Firebase/Firebase';
import { db } from '../Firebase/Firebaseconfig';
import { Timestamp, collection, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useSelector } from 'react-redux';


export default function Chatbox() {

const {id}=useParams();
const {user} =useSelector((state)=>state.counter)

const[message,setmessage]=useState([]);
const[title,settitle]=useState('');
const[searchvalues,setsearchvalues]=useState('');

useEffect(()=>{
  let collectionRef = collection(db, "posts", id, "groupmessages");
  const q=query(collectionRef,orderBy("createdat",'asc'))
 const unsub= onSnapshot(q, (querySnapshot) => {
  const result=[]
    querySnapshot.forEach((doc) => {
      result.push({...doc.data(),id:doc.id})
    });
    setmessage(result)
  });
  return ()=>unsub()
},[id])

useEffect(()=>{
groupname(db,"posts",id).then((response)=>{
  const {name} =response.data()
  settitle(name)
 }).catch((err)=>{
   console.log(err);
 })
},[id])



function handlefunc(e) {
  e.preventDefault();
  addmessages(db,"posts",id,"groupmessages",searchvalues,user)
  setsearchvalues("")
}

  return (
    <div className='chatbox'>
      <div className="headerclass">
        <div className="images">
      <div className="header_avatar">
        <Avatar alt="Remy Sharp" src= "https://images.pexels.com/photos/15953937/pexels-photo-15953937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.jpg"/>
        </div>
        <div className="images_title">
            <h1>{title}</h1>
        </div>
        </div>
      </div>
      <div className="body">
         {message && message.map((element)=>{
          const{messages,id,users,createdat}=element
         
          return(
             <div className="di" key={id}>
            <p className=
             {`${(user==users)?'correct' :'false'}`}
           >{messages}</p>
            <p>{new Date(createdat?.toDate()
            ).toUTCString()}</p>
            </div>
          )
         })}
      </div>
      <div className="footer">
        <div className="smile">
          <FaSmile/>
          </div>
          <div className="inputsearch">
            <form action="" onSubmit={handlefunc}>
            <input type="text" value={searchvalues} onChange={(e)=>{setsearchvalues(e.target.value)}}/>
            </form>
          </div>
          <div className="mic">
          <FaMicrophone/>
          </div>
       
      </div>
    </div>
  )
}
