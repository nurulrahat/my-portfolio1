import React from 'react';
import './aboutme.css'
import myImage from '../../../images/cvF1.png'
import { FaDownload, FaFileDownload } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
const AboutMe = () => {
    return (
        <div id="about">
            <div className="container p-2">
                <div className="row align-content-center mt-5 text-dark">
                    <div className="col-md-4 ">
                        <ScrollAnimation animateIn='animate__slideInLeft'>
                            <div className="shadow-lg p-3 bg-body rounded myImgCls ">
                                <img className="" src={myImage} alt="" />
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="col-md-8 align-self-center">
                        <ScrollAnimation animateIn='animate__slideInRight'>
                            <div className="">
                                <h2>About Me .</h2>
                                <small>Professional Front-End Developer|| Graphics Designer</small>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <hr class="text-danger" />

                                <div Class="d-inline-block m-3 p-3">
                                    <h4>LANGuAGE</h4>
                                    <ul>

                                        <li>javascript</li>
                                        <li>java</li>
                                        <li>C++</li>
                                        <li>C</li>
                                    </ul>
                                </div>
                                <div Class="d-inline-block m-3 p-3">
                                    <h4>FRAMeWORK</h4>
                                    <ul>

                                        <li>ReactJs</li>
                                        <li>Express</li>
                                        <li>NPM</li>
                                        <li>Bootstrap</li>

                                    </ul>
                                </div>
                                <div Class="d-inline-block m-3 p-3">
                                    <h4>BACkEND</h4>
                                    <ul>

                                        <li>mongoDB</li>
                                        <li>FireBase</li>
                                        <li>Heroku</li>
                                        <li>Netlify</li>
                                    </ul>
                                </div>
                                <div className="ms-md-5">
                                    <a target="_blank" href="https://drive.google.com/file/d/1F_bQYppyjQrhlhcMvDJVXv4njKc13-Q_/view?usp=sharing">  <button type="button" class="btn btn-outline-dark d-inline-block px-3">
                                        <FaFileDownload></FaFileDownload> RESUME</button>
                                    </a>

                                    <button type="button" class="btn btn-outline-dark d-inline-block px-3 ms-3">
                                        Hire Me</button>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;