import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import { Carousel, Card, CardGroup } from 'react-bootstrap';
import image1 from '../../Image/image1.jpeg';
import image2 from '../../Image/image2.jpeg';
import image3 from '../../Image/image3.jpeg';

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
        <Link to={`/adoptionCenter`}>
          <Card className="card">
            <Card.Img variant="top" src={'/assets/card1.svg'} className="card-img-top" />
            <Card.Body>
              <Card.Title>Vet Service</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to={`/dayCareServices`}>
          <Card className="card">
            <Card.Img variant="top" src={'/assets/card2.svg'} className="card-img-top" />
            <Card.Body>
              <Card.Title>Day Care Service</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to={`/adoptionCenter`}>
          <Card className="card">
            <Card.Img variant="top" src={'/assets/card3.svg'} className="card-img-top" />
            <Card.Body>
              <Card.Title>Adoption Center</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </CardGroup>
    </div>
  );
}
export default Home;