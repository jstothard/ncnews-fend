import React from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import { Link } from "@reach/router";
import "./css/Logout.css";

const LogOut = props => {
  const { username, updateUser, avatar } = props;
  return (
    <div>
      <Navbar.Text>
        <div className="media">
          Signed in as:
          <span className="media-left">
            <Image
              src={avatar}
              roundedCircle
              fluid={true}
              className={"img-fluid rounded-circle img-nav"}
            />
          </span>
          <div className="media-body">
            <Link to={`/users/${username}`}>{username}</Link>
          </div>
        </div>
      </Navbar.Text>
      <Button variant="outline-light" onClick={() => updateUser({})}>
        Log Out
      </Button>
    </div>
  );
};

export default LogOut;
