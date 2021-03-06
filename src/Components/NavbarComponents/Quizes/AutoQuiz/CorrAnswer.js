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
      <div className="answersLook">
        <form onSubmit={handleSubmit}>
          {num < questions.length ? (
            <input
              style={{ width: "50%", paddingLeft: "10%" }}
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
              <h2>
                <span className="correctLook1">{numCorrect}</span>
              </h2>
              <h5 style={{ marginTop: "15px", marginLeft: "-180px" }}>
                correct answers!
              </h5>
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
                <div>
                  <h2>
                    <span className="correctLook1">{numCorrect}</span>
                  </h2>
                  <h5 style={{ marginTop: "15px", marginLeft: "-200px" }}>
                    correct answers!
                  </h5>
                </div>
              ) : null}

              <button onClick={this.refreshPage} className="btn btn-success">
                Go to home page
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default CorrAnswer;
