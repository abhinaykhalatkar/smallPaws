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
                                <p className="bold center">2300</p>
                            </div>
                            <div>
                                <p className="bold">Happy Clients</p>
                            </div>
                        </div>
                      
                        <div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <p className="bold center">1200</p>
                            </div>
                            <div>
                                <p className="bold">Successful Cases</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <p className="bold center">3000</p>
                            </div>
                            <div>
                                <p className="bold">Connections</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <p className="bold center">2300</p>
                            </div>
                            <div>
                                <p className="bold">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-2">
                    <h3>Contact Us</h3>
                    <div className="contact-details">
                        <p className="bold">Email Address : XXXXX@gmail.com</p>
                        <p className="bold">Address : Germany</p>
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