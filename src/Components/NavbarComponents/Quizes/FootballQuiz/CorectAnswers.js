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
      <div className="answerLook">
        <form onSubmit={handleSubmit}>
          {num < question.length ? (
            <input
              style={{ width: "50%", paddingLeft: "10%" }}
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
              <h2>
                <span className="correctLook">{numCorrect}</span>
              </h2>
              <h5
                style={{
                  marginTop: "-10px",
                  marginBottom: "-10px",
                  marginLeft: "-150px"
                }}
              >
                correct answers!
              </h5>
            </div>
          ) : (
            <div>
              <p>No more questions</p>
              <button
                style={{ marginRight: "10px" }}
                onClick={this.displayResult}
                className="btn btn-primary"
              >
                Your result
              </button>
              {this.state.displayRes ? (
                <div>
                  <h2>
                    <span className="correctLook">{numCorrect}</span>
                  </h2>
                  <h5 style={{ marginTop: "5px", marginLeft: "-100px" }}>
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

export default CorectAnswers;
