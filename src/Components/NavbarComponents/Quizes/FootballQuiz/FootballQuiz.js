import React, { Component } from "react";
import FootballList from "./FootballList";
import FootballQuestions from "./FootballQuestions";
import CorectAnswers from "./CorectAnswers";

class FootballQuiz extends Component {
  state = {
    question: FootballQuestions,
    num: 0,
    correct: "",
    numCorrect: 0
  };
  nextQuestion = () => {
    this.setState({
      num: this.state.num + 1
    });
  };
  handleChange = e => {
    this.setState({
      correct: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.state.correct ==
      this.state.question[this.state.num - 1].correctAnswer + 1
        ? this.setState({
            numCorrect: this.state.numCorrect + 1,
            correct: ""
          })
        : this.setState({
            numCorrect: this.state.numCorrect,
            correct: ""
          });
  };
  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <FootballList question={this.state.question} num={this.state.num} />
        <CorectAnswers
          question={this.state.question}
          num={this.state.num}
          correct={this.state.correct}
          numCorrect={this.state.numCorrect}
          nextQuestion={this.nextQuestion}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default FootballQuiz;
