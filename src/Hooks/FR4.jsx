import React from 'react'
import { useState } from 'react'

export default function FR4() {
    const [user,setUser] = useState({
        username:'',email:''
    })

    const handle =(e) =>{
      const {name,value} = e.target;
      setUser((preVal)=>({
        ...preVal,[name]:value
      }))

    }
  return (
    <div>
      <form>
      <label>Enter your name:</label>
        <input type='text' name='username' onChange={handle} ></input><br></br><br></br>
              <label>Enter your email:</label>
        <input type='email' name='email' onChange={handle} ></input><br></br>
        <button>Submmit</button>

      </form>
    </div>
  )
}
