import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul style={{display:"flex",gap:"20px",listStyleType:"none",fontSize:"20px",fontWeight:"500",cursor:"pointer"}}>
        <li className='bg-red-400'>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
