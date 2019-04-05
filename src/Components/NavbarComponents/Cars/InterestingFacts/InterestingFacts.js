import React, { Component } from "react";
import { Image } from "react-bootstrap";

class InterextingFacts extends Component {
  render() {
    const { img, fact } = this.props.fac;
    return (
      <div>
        <p className="paragraph-style">{fact}</p>
        <Image className="image-style" src={img} rounded fluid />
      </div>
    );
  }
}

export default InterextingFacts;
