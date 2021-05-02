import React from 'react';
import './header.css'
import headerBack from '../../../images/headerBack.jpg'
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, } from "react-icons/fa";
import Typical from 'react-typical'
const Header = () => {
    return (
        <div className=" headerCls text-center">
            <div className="headerBackCls">
                <img className="w-100" src={headerBack} alt=""/>
            </div>
            <div className="headerDetails w-75">
         
            <h1 class="animate__animated animate__zoomIn"> Hi! I'm Nurul Rahat</h1>
            <Typical
        steps={['Front-End Developer',2000, 'MERN Developer', 1000]}
        loop={Infinity}
        wrapper="p"
      /> 
            <ul className="d-flex justify-content-center m-5">
                <li><a href="https://github.com/nurulrahat"> <FaGithub size={35}></FaGithub></a></li>
                <li><a href="https://www.linkedin.com/in/nurulmostafarahat/"><FaLinkedin size={35}></FaLinkedin></a></li>
                <li><a href="https://www.facebook.com/NurulMostafaRahat1"><FaFacebookF size={35}></FaFacebookF></a></li>
                <li><a href="https://twitter.com/NurulRahat"><FaTwitter size={35}></FaTwitter> </a></li>
            </ul>
          
            </div>
        </div>
    );
};

export default Header;