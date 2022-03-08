import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, CardGroup } from'react-bootstrap';
import image1 from '../../Image/image1.jpeg';
import image2 from '../../Image/image2.jpeg';
import image3 from '../../Image/image3.jpeg';
import { NavLink } from "react-router-dom";



const Home = () => {
  return (
    <div>
      {/* Image Slider */}
      <div className="imageSlider">
        <Carousel fade={true} pause={false} className="carouselSlide">
          <Carousel.Item interval={2000} className="images">
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000} className="images">
            <img
              className="d-block w-100"
              src={image2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000} className="images">
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Card board */}
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
  );
}

export default Home;