import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { vote } from "./api";

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
          {username ? (
            <ToggleButton type="radio" value={1} variant="secondary">
              <span className="glyphicon glyphicon-plus" aria-hidden="true" />
            </ToggleButton>
          ) : null}
          <ToggleButton type="radio" value={0} variant="secondary">
            {votes + voteChange}
          </ToggleButton>
          {username ? (
            <ToggleButton type="radio" value={-1} variant="secondary">
              <span className="glyphicon glyphicon-minus" aria-hidden="true" />
            </ToggleButton>
          ) : null}
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

Votes.propTypes = {};

export default Votes;
