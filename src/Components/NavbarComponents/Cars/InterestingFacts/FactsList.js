import React, { Component } from "react";
import FactsData from "../../../../FactsData";
import InterestingFacts from "./InterestingFacts";
import "./Facts.css";

class FactsList extends Component {
  state = {
    facts: FactsData,
    seeJourney: false
  };
  handleFacts = () => {
    this.setState({
      seeJourney: !this.state.seeJourney
    });
  };
  render() {
    const { facts, seeJourney } = this.state;
    const factsList = seeJourney
      ? facts.map(fac => {
          return (
            <div>
              <InterestingFacts key={fac.id} fac={fac} />
            </div>
          );
        })
      : null;
    return (
      <div className="factsLook">
        <p>
          Everybody feel love about cars inherited from their fathers and their
          friends, in their youth. The first gifts and toys of young boys are
          always cars, so it's no wonder that in time they turn into sincere
          enthusiasts in the auto-moto industry and competitions related to this
          lifestyle. But there are some facts that even the most reputed
          industry connoisseurs do not know. Some will surprise you, some will
          laugh, and some of you will get a new perspective on this crazy world
          we live in. Certainly, an interesting study to discuss at coffee time.
          Enjoy!
        </p>
        <span onClick={this.handleFacts} className="btn-journey">
          click and start the journey
        </span>
        {factsList}
      </div>
    );
  }
}

export default FactsList;
