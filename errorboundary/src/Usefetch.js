import { useEffect, useState } from "react"

const Apiurl=(url)=>{
     const [data,setData]=useState(null)

     useEffect(
        async()=>
     {const res=await fetch(url)
     const response=await res.json();
     setData(response);
     }
     ,[url])

     return data
}

export {Apiurl}