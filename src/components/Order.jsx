import React, { useState } from 'react'
import axiosInstance from './../helperr/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = () => {

  let navigate = useNavigate()

  let [fname , setFname] = useState("")
  let [fprice , setFprice] = useState("")

  let foodOrder = (e)=>{
    e.preventDefault()
    let payload = {
      fname, fprice
    }

    axiosInstance.post("/posts", payload)
    toast.success("Food orderd successfully")
    navigate("/food")
  }

  return (
    <div>
        <form action="" style={{textAlign:'center', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
        <fieldset>
          <legend>Order here,</legend>

          <label htmlFor="">Food Name: </label>
          <input type="text" onChange={(e)=>{
            setFname(e.target.value)
          }} /> <br /><br />

          <label htmlFor="">Food Price : </label>
          <input type="number" onChange={(e)=>{
            setFprice(e.target.value)
          }} /> <br /><br />

          <button onClick={foodOrder}>Order</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Order