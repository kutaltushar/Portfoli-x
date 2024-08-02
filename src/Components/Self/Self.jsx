import React from 'react'
import './Self.css'
import Profile_img from '../../assets/Profile_img.svg'

const Self = () => {
  return (
    <div className='self'>
      <img src={Profile_img} alt=""  />
  
      <div className="structure">
      <h1>Hello,I'm Tushar Kutal,Full Stack Java Developer Based in India.</h1>
      <p>.</p>
      </div>
      <div className="self-action">
        <div className="self-connect">Connect with me</div>
        <div className="self-resume">My resume</div>
      </div>
    </div>
    
  )
}

export default Self
