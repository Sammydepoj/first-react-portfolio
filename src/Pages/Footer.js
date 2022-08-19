import React from 'react'
import '../Styles/footer.css'
import email from '../Components/Asset/email.svg'
import linkedin from '../Components/Asset/linkedin.svg'
import twitter from '../Components/Asset/twitter.svg'


export const Footer = () => {
    return (
        <div className='foot'>
            <div className='name'>
                <span>
                    <hr></hr>
                </span>
                <span>
                    <h2>
                        Yemi Adepoju.
                    </h2>
                </span>
                <span>
                    <hr></hr>
                </span>
            </div>
            <div className='socials'>
                <img src={linkedin} alt='' width={40}/>
                <img src={twitter} alt=''  width={40}/>
                <img src={email} alt=''  width={40}/>

            </div>
        </div>
    )
}
