import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    let navigate = useNavigate()

    let [name, setName] = useState("")
    let [password, setPassword] = useState("")
    let [email, setEmail] = useState("")
    let [dob, setDob] = useState("")

    let handlesignup=(e)=>{
        e.preventDefault()
        window.localStorage.setItem("name",name)
        window.localStorage.setItem("password",password)
        window.localStorage.setItem("email",email)
        window.localStorage.setItem("dob",dob)
        navigate("/login")
    }
    

  return (
    <div>
        <form action="" style={{textAlign:'center', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
            <fieldset>
                <legend>Signup here,</legend>

                <label htmlFor="">Name : </label>
                <input type="text" onChange={(e)=>{
                  setName(e.target.value)
                }} /><br /><br />
                
                <label htmlFor="">Email : </label>
                <input type="email" onChange={(e)=>{
                  setEmail(e.target.value)
                }} /><br /><br />

                <label htmlFor="">Password : </label>
                <input type="password" onChange={(e)=>{
                  setPassword(e.target.value)
                }} /><br /><br />

                <label htmlFor="">DOB : </label>
                <input type="date" onChange={(e)=>{
                  setDob(e.target.value)
                }} /><br /><br />

                <button onClick={handlesignup}>Signup</button>
                <button type="reset">Cancel</button><br /><br />
            </fieldset>
        </form>
    </div>
  )
}

export default Signup