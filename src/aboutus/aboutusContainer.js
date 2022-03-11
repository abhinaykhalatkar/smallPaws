import React from "react";
import "./aboutus.css"

class AboutusContainer extends React.Component{
    render(){
        return(
            <div className="aboutus-container">
                <h2>About Us</h2>
                <div className="card">
                    <h3>Achievements</h3>
                    <div className="achievement-container">
                        <div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <p>2300</p>
                            </div>
                            <div>
                                <p>Happy Clientss</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <p>1200</p>
                            </div>
                            <div>
                                <p>Succesful Cases</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <p>2300</p>
                            </div>
                            <div>
                                <p>Connections</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <p>2300</p>
                            </div>
                            <div>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-2">
                    <h3>Contact Us</h3>
                    <div className="contact-details">
                        <p>Email Address : XXXXX@gmail.com</p>
                        <p>Address : Germany</p>
                    </div>
                </div>
                <div className="card-2">
                    <h3>Expertise</h3>
                </div>
            </div>
        )
    }
}

export default AboutusContainer;