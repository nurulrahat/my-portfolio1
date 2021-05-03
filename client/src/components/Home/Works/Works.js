import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import './work.css'
const Works = () => {
    return (
        
      <div id="work">
            <div className="container">
            <div className=" mb-5 mt-4"><h2>WOrKS</h2></div>
            <div className="row workCls">
                <div className="col-md-4 workLink text-center">
                    <h2 className="pb-2">Lawyers'-Lobbying</h2>
                    <div class="w-100">
                        <iframe src=" https://lawyers-lobbying.web.app/" allowfullscreen></iframe>
                    </div>
                    <ul className="linkList text-center ps-0">
                        <li><a href=""><FaGithub></FaGithub> gitHub</a></li>
                        <li><a href=""><FaGlobe></FaGlobe> Live</a></li>
                    </ul>
                </div>
                <div className="col-md-4 workLink text-center">
                    <h2 className="pb-2">Get-Goods</h2>
                    <div class="w-100">
                        <iframe src="https://get-goods.web.app/" allowfullscreen></iframe>
                    </div>
                    <ul className="linkList text-center ps-0">
                        <li><a href=""><FaGithub></FaGithub> gitHub</a></li>
                        <li><a href=""><FaGlobe></FaGlobe> Live</a></li>
                       
                    </ul>
                </div>
                <div className="col-md-4 workLink text-center">
                    <h2 className="pb-2">Find-Info</h2>
                    <div class="w-100">
                        <iframe src="https://find-team-info.netlify.app" allowfullscreen></iframe>
                    </div>
                    <ul className="linkList text-center ps-0">
                        <li><a href=""><FaGithub></FaGithub> gitHub</a></li>
                        <li><a href=""><FaGlobe></FaGlobe> Live</a></li>
                  
                    </ul>
                </div>
               
            </div>
        </div>
      </div>
    );
};

export default Works;