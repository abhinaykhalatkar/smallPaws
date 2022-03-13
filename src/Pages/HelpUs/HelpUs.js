import "./HelpUs.css";
import Grid from '@mui/material/Grid';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { NavLink, Link } from "react-router-dom";

export default function HelpUs() {
    return (
        <section className="helpus-page">
            <div className="help-heading">
                <h2 className="heading">Help Us</h2>
            </div>
            <div className="help-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="help-Heading mt-5">
                            <h2 className="heading">Donate Now</h2>
                            <p className="py-3">
                                Let’s Make a change
                            </p>
                        </div>
                        <div className="help-subHeading">
                            <p data-aos="fade-right"
                                data-aos-easing="ease-in-sine" data-aos-delay="500" className="help-py">
                                A wonderful serenity has taken possession of my entire soul, like these sweetheart. I am alone, bliss of souls like mine.
                            </p>
                        </div>
                        <div className="row" style={{ padding: "20px" }}>
                            <div className="col-md-6" >
                                <TextField
                                    variant="standard" id="email"
                                    label="Email"
                                    type="text" placeholder="Enter email address" style={{ width: "80%" }} />
                            </div>
                            <div className="col-md-6">
                                <TextField
                                    variant="standard" id="number"
                                    label="Amount"
                                    type="number" placeholder="Enter amount" style={{ width: "80%" }} />
                            </div>
                        </div>
                        <div className="loginButton">
                                <button className="btn-login">Donate Now</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div data-aos="fade-up" data-aos-delay="200" className="bg">
                            <img src={'/assets/undraw_gifts_re_97j6.svg'} alt="" className="helpImg" />
                        </div>
                    </div>
                </div>
                </div>
            <div className="help-container-1">
                <div className="row">
                    <div className="col-md-6">
                        <div className="help-Heading mt-5">
                            <h2 className="heading">Volunteer</h2>
                            <p className="py-3">
                                Let’s Make a change
                            </p>
                        </div>
                        <div className="help-subHeading">
                            <p data-aos="fade-right"
                                data-aos-easing="ease-in-sine" data-aos-delay="500" className="help-py">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div data-aos="fade-up" data-aos-delay="500" className="bg">
                            <img src={'/assets/undraw_team_page_re_cffb.svg'} alt="" className="helpImg" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}