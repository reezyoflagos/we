import React from 'react'
import  './footer.css'

const Footer = () => {
  return (
    <div className='foot'>
      <h1 className='footin'>
            Send Me Mail
      </h1>
      <div>
       
        <input type="email" name="emailaddress" className='input' placeholder='example@gmail.com'> 
        </input>
        <button className='end'>
            Contact
        </button>
        <br/><br/>
       
      </div>
    </div>
  )
}

export default Footer
