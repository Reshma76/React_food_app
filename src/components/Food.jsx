import React, { useEffect, useState } from 'react'
import axiosInstance from './../helperr/AxiosInstance';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Food = () => {
  let [products , setProducts] = useState([])

  useEffect(()=>{
    let fetchdata = async ()=>{
      let {data} = await axiosInstance.get("/posts")
      setProducts(data)
    }
    fetchdata()
  },[])


  let handledelete=(id)=>{
    axiosInstance.delete(`/posts/${id}`)
    toast.error(`food deleted`)
    window.location.assign("/food")
  }

  return (
    <div className='foodContainer'>
      {products.map((x)=>{
        return(
          <div className='foods'>
            <img src={"https://api.dicebear.com/7.x/fun-emoji/svg"} alt="" />
            <h3>Food Name : {x.fname}</h3>
            <h3>Food price : {x.fprice}</h3>
            <div className='btn'>
              <button><Link id="links" to={`/update/${x.id}`}>Update</Link></button>
              <button onClick={()=>{
                handledelete(x.id)
              }}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Food