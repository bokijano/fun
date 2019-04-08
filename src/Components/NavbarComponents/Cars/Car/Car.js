import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Car.css";
import Image_1 from "./../carPictures/oldtimer/old1.jpg";
import Image_11 from "./../carPictures/oldtimer/old2.jpg";
import Image_12 from "./../carPictures/oldtimer/old3.jpg";
import Image_13 from "./../carPictures/oldtimer/old4.jpg";
import Image_14 from "./../carPictures/oldtimer/old5.jpg";
import Image_2 from "./../carPictures/luxuryCars/lux1.jpg";
import Image_21 from "./../carPictures/luxuryCars/lux2.jpg";
import Image_22 from "./../carPictures/luxuryCars/lux3.jpg";
import Image_23 from "./../carPictures/luxuryCars/lux4.jpg";
import Image_24 from "./../carPictures/luxuryCars/lux5.jpg";
import Image_3 from "./../carPictures/racingCars/race1.jpg";
import Image_31 from "./../carPictures/racingCars/race2.jpg";
import Image_32 from "./../carPictures/racingCars/race3.jpg";
import Image_33 from "./../carPictures/racingCars/race4.jpg";
import Image_34 from "./../carPictures/racingCars/race5.jpg";

class Car extends Component {
  state = {
    seeMoreInfo: false,
    image: [
      Image_1,
      Image_2,
      Image_3,
      Image_11,
      Image_21,
      Image_31,
      Image_12,
      Image_22,
      Image_32,
      Image_13,
      Image_23,
      Image_33,
      Image_14,
      Image_24,
      Image_34
    ]
  };
  handleInfo = () => {
    this.setState({
      seeMoreInfo: !this.state.seeMoreInfo
    });
  };
  render() {
    const { id, name, infoOne, infoTwo, infoThree } = this.props.car;
    const { image } = this.state;
    const { seeMoreInfo } = this.state;
    return (
      <div className="container">
        <div className="carLook">
          <Image src={image[id - 1]} roundedCircle fluid />
          <h2>{name}</h2>
          <p>{infoOne}</p>
          <h3 onClick={this.handleInfo}>see more</h3>
        </div>
        {seeMoreInfo ? (
          <div className="moreInfo">
            <Image
              style={{ width: "50%", padding: "0 5px" }}
              src={image[id + 2]}
              fluid
            />
            <Image
              style={{ width: "50%", padding: "0 5px" }}
              src={image[id + 5]}
              fluid
            />
            <p style={{ textAlign: "justify" }}>{infoTwo}</p>
            <Image
              style={{ width: "50%", padding: "0 5px" }}
              src={image[id + 8]}
              fluid
            />
            <Image
              style={{ width: "50%", padding: "0 5px" }}
              src={image[id + 11]}
              fluid
            />
            <p>{infoThree}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Car;
