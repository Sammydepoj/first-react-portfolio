import React from 'react'
import '../Styles/Head.css'
import mypic from '../Components/Asset/mypic.jpeg'

const Header = () => {
  return (
    <div className="head">
        <div>
            <div className="logo-menu">
                <span>
                    <h2>Yemi Adepoju</h2>
                </span>
                <span>
                <ul>
                    <li>About me</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact me</li>
                </ul>
                </span>
            </div>

            <div className="intro">
            <p>Hi there,</p>
            <p>I AM YEMI ADEPOJU</p>
            <h1>A Top Notch Developer</h1>
            </div>
            
        </div> 
       
        <div className='image-container'>
            <img src={mypic} alt="my picture" />
        </div>


    </div>
  )
}

export default Header