import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navigations.css";
import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import Auth from "./Auth";
import LogOut from "./LogOut";

const Navigation = props => {
  const {
    topics,
    updateUser,
    loggedIn,
    user: { username }
  } = props;
  return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Topics" id="collasible-nav-dropdown" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand onClick={() => navigate("/")}>
          NorthCoders News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Topics" id="collasible-nav-dropdown">
              {topics.map(({ slug }) => (
                <NavDropdown.Item
                  key={slug}
                  onClick={() => navigate(`/topics/${slug}`)}
                >
                  {slug[0].toUpperCase() + slug.slice(1)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          {loggedIn ? (
            <LogOut username={username} updateUser={updateUser} />
          ) : (
            <Auth updateUser={updateUser} />
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
