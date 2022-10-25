import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  return (
    <Nav>
      <Logo to="/">
        <i>{"<Clarusway/>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink
          as="a"
          href="https://github.com/orgs/clarusway/dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;