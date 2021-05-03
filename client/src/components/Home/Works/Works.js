import React from 'react';
import './work.css'
const Works = () => {
    return (
        <div className="container">
            <div className=" mb-5"><h2>WOrKS</h2></div>
            <div className="row workCls">
                <div className="col-md-4">
                    <h3>Lawyers'-Lobbying</h3>
                    <div class="w-100">
                        <iframe src=" https://lawyers-lobbying.web.app/" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-md-4">
                <div class="w-100">
                        <iframe class="" src="https://get-goods.web.app/home" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-md-4">
                <div class="w-100">
                        <iframe class="" src="https://find-team-info.netlify.app/" allowfullscreen></iframe>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Works;