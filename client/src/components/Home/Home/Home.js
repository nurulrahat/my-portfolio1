import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <AboutMe></AboutMe>
        </>
    );
};

export default Home;