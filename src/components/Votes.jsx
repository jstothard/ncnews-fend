import React, { Component } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { vote } from "./api";
import "./css/Votes.css";

class Votes extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { voteChange } = this.state;
    const { votes, username } = this.props;
    return (
      <div>
        <ToggleButtonGroup
          vertical
          size="sm"
          name="vote"
          defaultValue={0}
          onChange={this.updateVote}
          value={voteChange}
        >
          <ToggleButton
            type="radio"
            value={1}
            variant="secondary"
            visible={username ? "true" : "false"}
          >
            <span className="glyphicon glyphicon-plus" aria-hidden="true" />
          </ToggleButton>
          <ToggleButton type="radio" value={0} variant="secondary">
            {votes + voteChange}
          </ToggleButton>
          <ToggleButton
            type="radio"
            value={-1}
            variant="secondary"
            visible={username ? "true" : "false"}
          >
            <span className="glyphicon glyphicon-minus" aria-hidden="true" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
  updateVote = e => {
    const { id, content } = this.props;
    const { voteChange } = this.state;
    const diff = e - voteChange;
    this.setState({
      voteChange: e
    });
    vote(id, diff, content).catch(() =>
      this.setState({
        voteChange
      })
    );
  };
}

export default Votes;
