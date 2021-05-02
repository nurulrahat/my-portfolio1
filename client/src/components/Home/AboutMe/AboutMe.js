import React from 'react';
import './aboutme.css'
import myImage from '../../../images/cvF1.png'
const AboutMe = () => {
    return (
        <div className="container ">
            <div className="row align-content-center ">
                <div className="col-md-4 shadow-lg p-3 bg-body rounded myImgCls">
                    <img className="" src={myImage} alt="" />
                </div>
                <div className="col-md-8 align-self-center">
                    <div className="">
                       <h2>About Me .</h2>
                       <small>Professional Front-End Developer|| Graphics Designer</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;