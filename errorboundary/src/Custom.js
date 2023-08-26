import React, { useState } from 'react'
import { Apiurl } from './Usefetch';

export default function Custom() {
      const url='https://jsonplaceholder.typicode.com/users'
const datas=Apiurl(url);
const[searchtext,setsearchtext]=useState('');


  return (
    <div>
      <input type="text" placeholder='Enter a text' value={searchtext} onChange={(e)=>setsearchtext(e.target.value)}/>
      {/* {datas && datas.slice(0,10).map(({title,id})=><p key={id}>{title}</p>
      )} */}
    {searchtext && datas.slice(0,10).filter(({name})=>{
  return (name.includes(searchtext))
}).map(({name,id})=>
<p key ={id}>{name}</p>
)}
    </div>
  )
}
