import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <AboutMe></AboutMe>
            <Services></Services>
            <Works></Works>
            <Blog></Blog>
        </>
    );
};

export default Home;