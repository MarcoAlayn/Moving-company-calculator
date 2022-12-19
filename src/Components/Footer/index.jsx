/* eslint-disable react/prop-types */
import React from 'react'
import "./footer.css"

const Footer = ({logo,imgTwitter,imgFacebook,imgInstagram, imgWhatsApp }) => {
  return (
    <div className='footer-container'>
        
        <div className='sub-container large-text'>
            <div className='footer-logo '>
            <img src={logo} alt="logo" />
            </div>
            <span>It is a long established
                 fact that a <br /> reader will 
                 be distracted by the <br /> readable 
                 content of a page <br /> whenters.</span>
            <div className='text-center social-icons'>
                <img src={imgTwitter} alt="logo twitter" />
                <img src={imgFacebook} alt="logo facebook" />
                <img src={imgInstagram} alt="logo instagram" />
            </div>
        </div>
        <div className='sub-container change-font'>
            <p>About Us</p>
            <a href="#">About</a>
            <br />
            <a href="#">Privacy & Policy</a>
            <br />
            <a href="#">Terms & Conditions</a>
            <br />
            <a href="#">Faq</a>
        </div>
        <div className='sub-container change-font'>
            <p>Navigate</p>
            <a href="#">How We Work</a>
            <br />
            <a href="#">Services</a>
           <br />
            <a href="#">Faq</a>
            <br />
            <a href="#">Contact</a>
           <br />
            <a href="#">Free Quote</a>
        </div>
        <div className='whatsapp-logo-container sub-container'>
            <p>Contact Us</p>
            <span>Ricardo Margain 444</span>
            <br />
            <span>Call: +52 81 1234 5678</span>
            <br />
            <span>Email: info@challenge.com</span>
            <br />
            <a href="#">
            <img src={imgWhatsApp} alt="logo whatsapp" />
            </a>
        </div>
    </div>
  )
}

export default Footer