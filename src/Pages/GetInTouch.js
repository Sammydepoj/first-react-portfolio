import React from 'react'
import '../Styles/GetInTouch.css'
import email from '../Components/Asset/email.svg'
import linkedin from '../Components/Asset/linkedin.svg'
import phone from '../Components/Asset/phone.svg'
import twitter from '../Components/Asset/twitter.svg'


export const GetInTouch = () => {
  return (
    <div className='Get'>
        <div className='getInTouch'>
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
            <div>
                <img src={linkedin} alt='' width={40}/>
                <img src={twitter} alt=''  width={40}/>
                <span> - Sammydepoj</span>
            </div>
            <div>
                <img src={email} alt='' />
                <span>Samueladepoju86@yahoo.com</span>
            </div>
            <div>
                <img src={phone} alt='' />
                <span>08127616629</span>
            </div>


        </div>
        <div className='sendMessage'>
                <h2>Need a service?</h2>
                <h2>Send a Message</h2>
                <form>
                    <input type={'text'} placeholder={'Enter Your Full Name'}/>
                    <br></br>
                    <input type={'text'} placeholder={'Enter Your email address'}/>
                    <br></br>
                    <input type={'text'} placeholder={'Enter Your Message'}/>
                    <br></br>
                    <button>Send Message</button>
                </form>
        </div>
    </div>
  )
}
