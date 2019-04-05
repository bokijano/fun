import React, { Component } from "react";
import Car from "./../Car/Car";
import carData from "../../../../carData";

class CarList extends Component {
  state = {
    cars: carData
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
