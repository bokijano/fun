import React, { Component } from "react";

class CorrAnswer extends Component {
  state = {
    displayRes: false
  };
  displayResult = () => {
    this.setState({
      displayRes: true
    });
  };
  refreshPage = () => {
    window.location.reload();
  };
  render() {
    const {
      questions,
      num,
      correct,
      numCorrect,
      handleChange,
      nextQuestion,
      handleSubmit
    } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {num < questions.length ? (
            <input
              type="text"
              value={correct}
              placeholder="Your answer"
              onChange={handleChange}
            />
          ) : null}
          {num < questions.length ? (
            <div>
              <button
                style={{ marginTop: "10px" }}
                onClick={nextQuestion}
                className="btn btn-primary"
              >
                Next question
              </button>

              <p style={{ marginTop: "10px" }}>{numCorrect} correct answers!</p>
            </div>
          ) : (
            <div>
              <button
                style={{ marginRight: "10px" }}
                className="btn btn-primary"
                onClick={this.displayResult}
              >
                Your result
              </button>
              {this.state.displayRes ? (
                <p style={{ marginTop: "10px" }}>
                  {numCorrect} correct answers!
                </p>
              ) : null}

              <button onClick={this.refreshPage} className="btn btn-success">
                Try again
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default CorrAnswer;
