import React, { Component } from "react";

class FootballList extends Component {
  render() {
    const { num, question } = this.props;
    const footballList = question.map(ans => {
      return (
        <div key={ans.id}>
          <p>{ans.question}</p>
          <ol>
            <li>{ans.answers[0]}</li>
            <li>{ans.answers[1]}</li>
            <li>{ans.answers[2]}</li>
            <li>{ans.answers[3]}</li>
            <li>{ans.answers[4]}</li>
          </ol>
        </div>
      );
    });
    return <div>{footballList[num]}</div>;
  }
}

export default FootballList;
