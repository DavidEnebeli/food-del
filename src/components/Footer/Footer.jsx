import React from 'react'
import './Footer.css'
import { appAssets } from '../../assets/app_assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="footer-logo"src={appAssets.logo} alt="" />
                <p>Bringing your favorite African meals straight to your doorstep — fast, fresh, and flavorful.</p>
                <div className='footer-social-icons'>
                    <img src={appAssets.facebook_icon} alt="" />
                    <img src={appAssets.instagram_icon} alt="" />
                    <img src={appAssets.whatsapp_icon} alt="" />
                </div>


            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-804-555-6161</li>
                    <li>contact@olaskitchen.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">&copy; 2025 Ola's Kitchen - All rights reserved.</p>
      
    </div>
  )
}

export default Footer
