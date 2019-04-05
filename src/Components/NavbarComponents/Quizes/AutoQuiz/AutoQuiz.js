import React, { Component } from "react";
import CarList from "./CarList";
import CarQuestion from "./CarQuestion";
import CorrAnswer from "./CorrAnswer";
import Star from "./../quizPictures/car.jpg"
import { Image } from "react-bootstrap";
import "./AutoQuiz.css";

class AutoQuiz extends Component {
  state = {
    questions: CarQuestion,
    num: 0,
    correct: "",
    numCorrect: 0
  };
  handleChange = e => {
    this.setState({
      correct: e.target.value
    });
  };
  nextQuestion = () => {
    this.setState({
      num: this.state.num + 1
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.state.correct ==
    this.state.questions[this.state.num - 1].correctAnswer + 1
      ? this.setState({
          numCorrect: this.state.numCorrect + 1,
          correct: "",
          checkCorrect: false,
          checkWrong: false
        })
      : this.setState({
          numCorrect: this.state.numCorrect,
          correct: "",
          checkCorrect: false,
          checkWrong: false
        });
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <CarList questions={this.state.questions} num={this.state.num} />
        <CorrAnswer
          questions={this.state.questions}
          num={this.state.num}
          correct={this.state.correct}
          numCorrect={this.state.numCorrect}
          handleChange={this.handleChange}
          nextQuestion={this.nextQuestion}
          handleSubmit={this.handleSubmit}
        />
        <Image className="imageLook" src={Star} fluid />
      </div>
    );
  }
}

export default AutoQuiz;
