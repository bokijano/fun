import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Car.css";

class Car extends Component {
  state = {
    seeMoreInfo: false
  };
  handleInfo = () => {
    this.setState({
      seeMoreInfo: !this.state.seeMoreInfo
    });
  };
  render() {
    const {
      img,
      name,
      infoOne,
      imgOne,
      imgTwo,
      infoTwo,
      imgThree,
      imgFour,
      infoThree
    } = this.props.car;
    const { seeMoreInfo } = this.state;
    return (
      <div>
        <div className="carLook">
          <Image src={img} roundedCircle fluid />
          <h3>{name}</h3>
          <p>{infoOne}</p>
          <h5 onClick={this.handleInfo}>see more</h5>
        </div>
        {seeMoreInfo ? (
          <div className="moreInfo">
            <Image
              style={{ width: "50%", padding: "0 5px" }}
              src={imgOne}
              fluid
            />
            <Image
              style={{ width: "50%", padding: "0 5px" }}
              src={imgTwo}
              fluid
            />
            <p>{infoTwo}</p>
            <Image
              style={{ width: "50%", padding: "0 5px" }}
              src={imgThree}
              fluid
            />
            <Image
              style={{ width: "50%", padding: "0 5px" }}
              src={imgFour}
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
