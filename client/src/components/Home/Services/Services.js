import React from 'react';
import './services.css'
const Services = () => {
    return (
        <div id="service">
        <div className="container serviceBody mb-4">
            <div className="mb-4">
                <h2>SERvICES</h2>
            </div>
            <div className="row m-3">
                <div className="col-md-4 text-center zoomEffect">
                    <div><img src="" alt="" /></div>
                    <div>
                        <h3>REACT-WEB-APP</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa similique ratione delectus dolor neque fugiat. Nesciunt omnis culpa, aliquid voluptate ducimus cum ipsa adipisci ea iste dicta saepe impedit?</p>
                        <button type="button" class="btn btn-outline-dark d-inline-block px-3 m-3">
                                       Details</button>
                    </div>
                </div>
                <div className="col-md-4 text-center zoomEffect">
                    <div><img src="" alt="" /></div>
                    <div>
                        <h3>PSD to HTML</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa similique ratione delectus dolor neque fugiat. Nesciunt omnis culpa, aliquid voluptate ducimus cum ipsa adipisci ea iste dicta saepe impedit?</p>
                        <button type="button" class="btn btn-outline-dark d-inline-block px-3 m-3">
                                       Details</button>
                    </div>
                    </div>
                <div className="col-md-4  text-center zoomEffect">
                    <div><img src="" alt="" /></div>
                    <div>
                        <h3>BUG-FIX</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa similique ratione delectus dolor neque fugiat. Nesciunt omnis culpa, aliquid voluptate ducimus cum ipsa adipisci ea iste dicta saepe impedit?</p>
                        <button type="button" class="btn btn-outline-dark d-inline-block px-3 m-3">
                                       Details</button>
                    </div>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Services;