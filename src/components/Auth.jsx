import "./css/Auth.css";
import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { getUser } from "./api";
import PropTypes from "prop-types";

class Auth extends Component {
  state = {
    username: "weegembump",
    isLoading: false,
    isIncorrect: false
  };

  render() {
    const { username, isLoading, isIncorrect } = this.state;
    return (
      <div>
        <Form inline>
          <FormControl
            id="username"
            type="text"
            placeholder="Username"
            className={`${isIncorrect ? "wrong-entry" : null} mr-sm-2 `}
            onChange={this.updateField}
            value={username}
            isInvalid={isIncorrect}
          />
          <Button
            type="submit"
            variant="outline-light"
            disabled={isLoading}
            onClick={this.login}
          >
            {isLoading ? "Loading…" : "Login"}
          </Button>
        </Form>
      </div>
    );
  }

  updateField = ({ target: { id, value } }) => {
    this.setState({ [id]: value, isIncorrect: false });
  };

  login = event => {
    event.preventDefault();
    this.setState({
      isLoading: true
    });
    getUser(this.state.username)
      .then(user => {
        this.setState({ isLoading: false, username: "" });
        this.props.updateUser(user);
      })
      .catch(() =>
        this.setState({
          isIncorrect: true,
          isLoading: false
        })
      );
  };
}

Auth.propTypes = {};

export default Auth;
