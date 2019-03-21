import React, { Component } from "react";

class CarList extends Component {
  state = {};
  render() {
    const { questions, num } = this.props;
    const carList = questions.map(question => {
      return (
        <div key={question.id}>
          <p>{question.question}</p>
          <ol>
            <li>{question.answers[0]}</li>
            <li>{question.answers[1]}</li>
            <li>{question.answers[2]}</li>
            <li>{question.answers[3]}</li>
            <li>{question.answers[4]}</li>
          </ol>
        </div>
      );
    });
    return <div>{carList[num]}</div>;
  }
}

export default CarList;
