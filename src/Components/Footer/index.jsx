/* eslint-disable react/prop-types */
import React from 'react'

const Footer = ({logo,imgTwitter,imgFacebook,imgInstagram, imgWhatsApp }) => {
  return (
    <div>
        <div>
            <img src={logo} alt="logo" />
            <p>It is a long established
                 fact that a reader will 
                 be distracted by the readable 
                 content of a page whenters.</p>
            <div>
                <img src={imgTwitter} alt="logo twitter" />
                <img src={imgFacebook} alt="logo facebook" />
                <img src={imgInstagram} alt="logo instagram" />
            </div>
        </div>
        <div>
            <p>About Us</p>
            <a href="#">About</a>
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Faq</a>
        </div>
        <div>
            <p>Navigate</p>
            <a href="#">How We Work</a>
            <a href="#">Services</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
            <a href="#">Free Quote</a>
        </div>
        <div>
            <p>Contact Us</p>
            <span>Ricardo Margain 444</span>
            <span>Call: +52 81 1234 5678</span>
            <span>Email: info@challenge.com</span>
            <a href="#">
            <img src={imgWhatsApp} alt="logo whatsapp" />
            </a>
        </div>
    </div>
  )
}

export default Footer