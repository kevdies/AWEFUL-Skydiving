import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import { Button } from "reactstrap";

function Nav() {
  return (
    <nav>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/AWEFUL-logo.png"
            style={{
              height: 100,
              width: 100,
            }}
                  />
              </NavbarBrand>
        <Link to="about">
          <Button size="lg">About</Button>
        </Link>
        <Link to="media">
          <Button size="lg">Media</Button>
        </Link>
        <Link to="events">
          <Button size="lg">Events</Button>
        </Link>
        <Link to="login">
          <Button size="lg">Login</Button>
        </Link>
        <Link to="contact">
          <Button size="lg">Contact</Button>
        </Link>
      </Navbar>
    </nav>
  );
}

export default Nav;
