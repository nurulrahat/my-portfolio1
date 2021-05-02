import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navCls  w-100 p-md-2">
            <nav class="navbar navbar-expand-lg">
                <div class="container ">
                    <a class="navbar-brand text-light" href="#">Nurul-Rahat</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item px-lg-2">
                                <a class="nav-link active " aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item px-lg-2">
                                <a class="nav-link" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item px-lg-2">
                                <a class="nav-link" href="#">SERVICE</a>
                            </li>
                            <li class="nav-item px-lg-2">
                                <a class="nav-link " href="#" >PROJECT</a>
                            </li>
                            <li class="nav-item px-lg-2">
                                <a class="nav-link " href="#" >BLOG</a>
                            </li>
                            <li class="nav-item px-lg-2">
                                <a class="nav-link " href="#" >CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;