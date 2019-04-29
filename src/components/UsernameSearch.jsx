import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { navigate } from "@reach/router";

class UsernameSearch extends Component {
  state = {
    username: ""
  };

  render() {
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search Username"
          className="mr-sm-2"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <Button variant="outline-light" onClick={this.searchUsers}>
          Search
        </Button>
      </Form>
    );
  }

  handleInputChange = ({ target }) => {
    this.setState({
      username: target.value
    });
  };

  searchUsers = () => {
    const { username } = this.state;
    navigate(`/users/${username}`);
    this.setState({ username: "" });
  };
}

export default UsernameSearch;
