import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate()

  let [name, setName] = useState("")
  let [password, setPassword] = useState("")

  let handleLogin=(e)=>{{
    e.preventDefault()
    let dbname = window.localStorage.getItem("name",name)
    let dbpassword = window.localStorage.getItem("password",password)

    if(dbname==name && dbpassword==password)
    {
      navigate("/order")
      toast.success(`${name} login success`)
    }
    else
    {
      toast.error(`Invalid creadentials`)
    }
  }}
  

  return (
    <div>
        <form action="" style={{textAlign:'center', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
            <fieldset>
                <legend>Login here,</legend>

                <label htmlFor="">Name : </label>
                <input type="text" onChange={(e)=>{
                  setName(e.target.value)
                }} /><br /><br />

                <label htmlFor="">Password : </label>
                <input type="password"onChange={(e)=>{
                  setPassword(e.target.value)
                }} /><br /><br />

                <button onClick={handleLogin} >Login</button>
                <button type="reset">Cancel</button><br /><br />
            </fieldset>
        </form>
    </div>
  )
}

export default Login