import { collection, onSnapshot, orderBy, query,doc, getDoc, addDoc, serverTimestamp, setDoc, getDocs } from "firebase/firestore";
import { auth, db } from "./Firebaseconfig";
import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const provider = new GoogleAuthProvider();

export function Fetchlivedata(fbcollection) {

    const[posts,setposts]=useState([]);

    useEffect(()=>{
     const collectionref=collection(db,fbcollection)
     const queryref=query(collectionref,orderBy("createdat","desc"))

     const unsub=onSnapshot(queryref,(docs)=>
     {
        let results=[];
       docs.forEach((doc)=>{
        results.push({...doc.data(),id:doc.id})
       })

       setposts(results)
     })
     return ()=>unsub()

    },[fbcollection])
    return posts
    }


  function adddoc(db,posts,searchvalue) {
    const collectionref=collection(db,posts)
    const data={createdat:serverTimestamp(),message:"",name:searchvalue}
    addDoc(collectionref,data)
  }

  async function addmessages(db,posts,id,groupmessages,searchvalues,username) {
  await addDoc(collection(db,posts,id,groupmessages),{
    messages:searchvalues,users:username,createdat:serverTimestamp()

  })
  }


  function groupname(db,posts,id) {
      const collectionref=doc(db,posts,id)
    return getDoc(collectionref)
  }

function signin(auth) {
 return signInWithPopup(auth,provider)
}

function signout() {

  return signOut(auth)
  
}

  export {adddoc,addmessages,groupname,signin,signout}
