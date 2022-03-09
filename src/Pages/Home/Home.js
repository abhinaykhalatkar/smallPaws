import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="page1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="page-1-heading">
                <p data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="py-2">
                  Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day. It is amazing how much love and laughter they bring into our lives and even how much closer we become with each other because of them.
                </p>
                <h6 data-aos="fade-right" data-aos-delay="400">- John Grogan </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-shape">
        <img src={'/assets/backImage.jpeg'} alt="" className="shape" />
      </div>

      {/* PAGE 2 */}
      <section className="page2">
        <div className="container">
          <div className="page2Heading">
            <h2 className="heading">ABOUT COMPANY</h2>
            <p className="py-3">
              SOME HISTORY
            </p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="page-2-heading">
                <p data-aos="fade-up"
                  data-aos-easing="ease-in-sine" className="py-4">
                  We are committed to ending the overpopulation, abuse, neglect of Heidelberg area Pets. Our goal is that every adoptable pet finds a loving home. We are an all-volunteer, no-kill organization.
                </p>
              </div>
              <div data-aos="fade-up"
                data-aos-easing="ease-in-sine" className="button">
                <Link to="/aboutUs">
                  <button className="btn__2">More</button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-up" data-aos-delay="200" className="bg">
                <img src={'/assets/undraw_career_development_re_sv91.svg'} alt="" className="svgImg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 3 */}
      <section className="page3">
        <div className="container">
          <div className="page3Heading">
            <h2 className="heading">SERVICES</h2>
            <p className="py-3">
              WE DO IT
            </p>
          </div>
          <div data-aos="fade-up" data-aos-easing="ease-in-sine">
            <CardGroup className="card-group">
              <NavLink to="/vetServices" className="card">
                <Card.Img variant="top" src={'/assets/card1.svg'} className="card-img-top" />
                <Card.Body>
                  <Card.Title>Vet Service</Card.Title>
                </Card.Body>
              </NavLink>
              <NavLink to="/dayCareServices" className="card">
                <Card.Img variant="top" src={'/assets/card2.svg'} className="card-img-top" />
                <Card.Body>
                  <Card.Title>Day Care Service</Card.Title>
                </Card.Body>
              </NavLink>
              <NavLink to="/adoptionCenter" className="card">
                <Card.Img variant="top" src={'/assets/card3.svg'} className="card-img-top" />
                <Card.Body>
                  <Card.Title>Adoption Center</Card.Title>
                </Card.Body>
              </NavLink>
            </CardGroup>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;