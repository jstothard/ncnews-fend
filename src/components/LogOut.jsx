import React from "react";
import { Navbar, Button } from "react-bootstrap";

const LogOut = props => {
  const { username, updateUser } = props;
  return (
    <div>
      <Navbar.Text>Signed in as: {username}</Navbar.Text>{" "}
      <Button variant="outline-light" onClick={() => updateUser({})}>
        Log Out
      </Button>
    </div>
  );
};

export default LogOut;
