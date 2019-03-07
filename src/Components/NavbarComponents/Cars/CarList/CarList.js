import React, { Component } from "react";
import Car from "./../Car/Car";
import CarData from "./../carData";
import "./CarList.css";

class CarList extends Component {
  state = {
    cars: CarData
  };
  render() {
    return (
      <section className="carList">
        {this.state.cars.map(car => (
          <Car key={car.id} car={car} />
        ))}
      </section>
    );
  }
}

export default CarList;
