import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Image_1 from "./factsPicture/1.jpg";
import Image_2 from "./factsPicture/2.jpg";
import Image_3 from "./factsPicture/3.jpg";
import Image_4 from "./factsPicture/4.jpg";
import Image_5 from "./factsPicture/5.jpg";
import Image_6 from "./factsPicture/6.jpg";
import Image_7 from "./factsPicture/7.jpg";
import Image_8 from "./factsPicture/8.jpg";
import Image_9 from "./factsPicture/9.jpg";
import Image_10 from "./factsPicture/10.jpg";
import Image_11 from "./factsPicture/11.jpg";
import Image_12 from "./factsPicture/12.jpg";
import Image_13 from "./factsPicture/13.jpg";
import Image_14 from "./factsPicture/14.jpg";
import Image_15 from "./factsPicture/15.jpg";
import Image_16 from "./factsPicture/16.jpg";
import Image_17 from "./factsPicture/17.jpg";
import Image_18 from "./factsPicture/18.jpg";
import Image_19 from "./factsPicture/19.jpg";
import Image_20 from "./factsPicture/20.jpg";
import Image_21 from "./factsPicture/21.jpg";
import Image_22 from "./factsPicture/22.jpg";
import Image_23 from "./factsPicture/23.jpg";
import Image_24 from "./factsPicture/24.jpg";
import Image_25 from "./factsPicture/25.jpg";

class InterextingFacts extends Component {
  state = {
    image: [
      Image_1,
      Image_2,
      Image_3,
      Image_4,
      Image_5,
      Image_6,
      Image_7,
      Image_8,
      Image_9,
      Image_10,
      Image_11,
      Image_12,
      Image_13,
      Image_14,
      Image_15,
      Image_16,
      Image_17,
      Image_18,
      Image_19,
      Image_20,
      Image_21,
      Image_22,
      Image_23,
      Image_24,
      Image_25
    ]
  };
  render() {
    const { id, fact } = this.props.fac;
    const { image } = this.state;
    return (
      <div>
        <p className="paragraph-style">{fact}</p>
        <Image
          className="image-style"
          src={image[id - 1]}
          responsive
          rounded
          fluid
        />
      </div>
    );
  }
}

export default InterextingFacts;
