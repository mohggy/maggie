import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav({
  height: "80px",
  display: "flex",
  backgroundColor: "#ff9999",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  zIndex: "100",
  position: "fixed",
  width: "100%",
});

export const HamburgerBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    height: 35px;
    width: 40px;
    color: white;
    transform: translateY(15%);
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenuLinks = styled(Link)({
  color: "white",
  cursor: "pointer",
  textDecoration: "none",
  height: "100%",
  padding: "0 1rem",
  alignItems: "center",
  display: "flex",

});


export const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
