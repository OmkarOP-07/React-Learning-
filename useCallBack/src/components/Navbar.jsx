//rafce 
import React from 'react'
import { memo } from 'react'
const Navbar = ({adjective , getAdjective}) => {
    console.log("navbar is rerendered")
  return (
    <div>
      I am a {adjective} Navbar.
      <button onClick={()=> {getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
