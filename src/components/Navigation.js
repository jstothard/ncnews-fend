import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navigations.css";
import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

const Navigation = props => {
  const { topics } = props;
  return (
    <div className="Navbar">
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
          <Nav>
            <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
