import "./AboutUs.css";
import { Card, CardGroup } from 'react-bootstrap';


export default function AboutUs() {
    return (
        <section className="aboutus-page">
            <div className="about-heading">
                <h2 className="heading">About Us</h2>
            </div>
            <div className="about-container">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <div className="about-subHeading">
                            <p data-aos="fade-up"
                                data-aos-easing="ease-in-sine" className="py-4">
                                We are committed to ending the overpopulation, abuse, neglect of Heidelberg area Pets. Our goal is that every adoptable pet finds a loving home. We are an all-volunteer, no-kill organization.
                            </p>
                        </div>
                        <div className="about-subHeading">
                            <span data-aos="fade-up"
                                data-aos-easing="ease-in-sine" className="py-4">
                                Locally:<br />
                                In calendar year 2020, the City of Heidelberg shelter alone took in 27,375 dogs
                                and cats and:<br />
                                • euthanized 16,681 dogs and cats<br />
                                • adopted out 5,399 dogs and cats<br />
                                • redeemed back to owners 1,409 dogs and cats<br />
                                • rescue organizations saved 3,554 dogs and cats<br />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div data-aos="fade-up" data-aos-delay="200" className="bg">
                            <img src={'/assets/undraw_profile_re_4a55.svg'} alt="" className="aboutImg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-container-1">
                <div className="row">
                    <div className="col-md-12 p-5">
                        <div className="about-Heading mt-5">
                            <h2 className="heading">Achievements</h2>
                        </div>
                        <div>
                            <CardGroup className="card-group">
                                <div className="card" data-aos="fade-up" data-aos-easing="ease-in-sine">
                                    <Card.Img variant="top" src={'/assets/Happyclient.svg'} className="card-img-top" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-center">22000</Card.Title>
                                        <p>Happy Clients</p>
                                    </Card.Body>
                                </div>
                                <div className="card" data-aos="fade-up" data-aos-easing="ease-in-sine"  data-aos-delay="250">
                                    <Card.Img variant="top" src={'/assets/cases.svg'} className="card-img-top" />
                                    <Card.Body>
                                    <Card.Title className="d-flex justify-content-center">10000</Card.Title>
                                    <p>Successful Cases</p>
                                    </Card.Body>
                                </div>
                                <div className="card" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="200">
                                    <Card.Img variant="top" src={'/assets/connections.svg'} className="card-img-top" />
                                    <Card.Body>
                                    <Card.Title className="d-flex justify-content-center">50000</Card.Title>
                                    <p>Connections</p>
                                    </Card.Body>
                                </div>
                            </CardGroup>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}