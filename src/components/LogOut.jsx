import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "@reach/router";

const LogOut = props => {
  const { username, updateUser } = props;
  return (
    <div>
      <Navbar.Text>
        Signed in as: <Link to={`/users/${username}`}>{username}</Link>
      </Navbar.Text>{" "}
      <Button variant="outline-light" onClick={() => updateUser({})}>
        Log Out
      </Button>
    </div>
  );
};

export default LogOut;
