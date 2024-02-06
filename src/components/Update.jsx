import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from './../helperr/AxiosInstance';
import { toast } from 'react-toastify';

const Update = () => {

    let {id} = useParams();

    let navigate = useNavigate()

    let [fname, setFname] = useState("")
    let [fprice, setFprice] = useState("")

    useEffect(()=>{
        let fetchdata = async (id)=>{
            let {data} = await axiosInstance.get(`/posts/${id}`)
            console.log(data);
            setFname(data.fname)
            setFprice(data.fprice)
        }
        fetchdata()
    },[])

    let updateFood = (e)=>{
        e.preventDefault()
        let payload = {
            fname , fprice
        }
        axiosInstance.put(`/posts/${id}`, payload)
        toast.info(`${fname} updated`)
        navigate("/food")
    }

  return (
    <div>
        <form action="" style={{textAlign:'center', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
        <fieldset>
          <legend>Update Food,</legend>

          <label htmlFor="">Food Name: </label>
          <input value={fname} type="text" onChange={(e)=>{
            setFname(e.target.value)
          }} /> <br /><br />

          <label htmlFor="">Food Price : </label>
          <input value={fprice} type="number" onChange={(e)=>{
            setFprice(e.target.value)
          }} /> <br /><br />

          <button onClick={updateFood}>Update</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Update