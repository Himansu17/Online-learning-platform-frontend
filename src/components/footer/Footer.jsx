import React from 'react'
import './footer.css'
import { SiFacebook } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024 Your Online Learning Platform. All rights reserved <br />
                Made with ❤️ <a href="https://github.com/Himansu17">Himansu</a>
            </p>
            <div className="social-links">
                <a href="https://www.facebook.com/himansupradhan.kanha"><SiFacebook /></a>
                <a href="https://www.linkedin.com/in/himansu-pradhan-2a26b025b/"><BsLinkedin /></a>
                <a href="https://www.instagram.com/ig_17rk/?__pwa=1"><FaSquareInstagram /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer