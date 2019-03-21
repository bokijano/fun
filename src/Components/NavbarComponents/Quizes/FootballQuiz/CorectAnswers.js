import React, { Component } from "react";

class CorectAnswers extends Component {
  state = {
    displayRes: false
  };
  refreshPage() {
    window.location.reload();
  }
  displayResult = () => {
    this.setState({
      displayRes: true
    });
  };
  render() {
    const {
      num,
      question,
      nextQuestion,
      correct,
      numCorrect,
      handleChange,
      handleSubmit
    } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {num < question.length ? (
            <input
              value={correct}
              type="text"
              placeholder="Your answer"
              onChange={handleChange}
            />
          ) : null}
          {num < question.length ? (
            <div>
              <button
                style={{ marginTop: "10px" }}
                className="btn btn-primary"
                onClick={nextQuestion}
              >
                Next question
              </button>
              <p style={{ marginTop: "10px" }}>{numCorrect} correct answers!</p>
            </div>
          ) : (
            <div>
              <p>No more questions</p>
              <button style={{marginRight: "10px"}} onClick={this.displayResult} className="btn btn-primary">
                Your result
              </button>
              {this.state.displayRes ? (
                <div>
                  <p style={{ marginTop: "10px" }}>
                    {numCorrect} correct answers!
                  </p>
                </div>
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

export default CorectAnswers;
