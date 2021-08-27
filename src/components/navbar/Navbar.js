import React from "react";
import { Nav, HamburgerBars, HamburgerMenu, HamburgerMenuLinks, NavButton } from "./NavbarElement";
import { hamburgerOptions } from "../../data/hamburgerData.js";
import { Button } from "../button/Button";

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <HamburgerBars onClick={toggle}/>
      <HamburgerMenu>
          {hamburgerOptions.map((option, index) => (
              <HamburgerMenuLinks to={option.link} key={index}>
                  {option.title}
              </HamburgerMenuLinks>
          ))}
      </HamburgerMenu>
      <NavButton>
          <Button to='/social' primary="true" >Social Media</Button>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
