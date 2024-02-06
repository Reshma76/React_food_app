import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className='logoblock'>
            LOGO
        </div>
        <div className='menublock'>
            <ul>
                <li><Link to={"order"} >Order</Link></li>
                <li><Link to={"food"}>Food</Link></li>
                <li><Link to={"login"}>Login</Link></li>
                <li><Link to={"signup"}>Signup</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav