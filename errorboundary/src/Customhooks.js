import React from 'react'
import { apiurl } from './Usefetch'

export default function Customhooks() {
const url='https://jsonplaceholder.typicode.com/todos'
const datas=apiurl(url);

  return (
    <div>
      <h1>data</h1>
    </div>
  )
}
