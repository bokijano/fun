import React from "react";
import Smiley from "./NavbarComponents/pictures/smile.jpg";
import DiceOne from "./NavbarComponents/pictures/dices3.jpg";
import DiceTwo from "./NavbarComponents/pictures/dices4.jpg";
import Film from "./NavbarComponents/pictures/movie.jpg";
import Mercedes from "./NavbarComponents/pictures/auto.jpg";
import Fica from "./NavbarComponents/pictures/fica2.jpg";
import "./../App.css";
import { Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container">
      <Row style={{ marginTop: "70px" }}>
        <Col xs={4} md={4} className="quiz-look">
          <Image src={Smiley} alt="zvezda" responsive fluid />
          <h2>QUIZ!</h2>
          <h3>Football!</h3>
          <h3>Cars!</h3>
        </Col>
        <Col xs={4} md={4}>
          <Image
            style={{ marginTop: "50px" }}
            className="imgLook"
            src={DiceTwo}
            alt="dice3"
            responsive
            fluid
          />
          <h2 style={{ marginTop: "40px" }}>Fun with</h2>
        </Col>
        <Col xs={4} md={4}>
          <Image
            style={{ marginTop: "50px" }}
            className="imgLook"
            src={DiceOne}
            alt="dice3"
            responsive
            fluid
          />
          <h2 style={{ marginTop: "20px" }}>dices!</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Image
            className="movieLook1"
            src={Film}
            alt="film-type"
            responsive
            fluid
          />
          <h2 className="headingLook">What are your favorite movies?</h2>
        </Col>

        <Col style={{ float: "left", marginTop: "70px" }} xs={6} md={3}>
          <Image
            className="carLook1"
            src={Mercedes}
            alt="mercedes"
            responsive
            fluid
            rounded
          />

          <h3 style={{ marginTop: "5px" }}>Interesting things</h3>
        </Col>
        <Col style={{ float: "left", marginTop: "60px" }} xs={6} md={3}>
          <Image
            className="carLook1"
            src={Fica}
            alt="fica"
            responsive
            fluid
            rounded
          />
          <h2 style={{ marginTop: "20px" }}>about cars!</h2>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
