import React from "react";
import { hamburgerOptions } from "../../data/hamburgerData";
import { Button } from "../button/Button";
import {
  ButtonWrapper,
  CloseIcon,
  Icon,
  ResponsiveContainer,
  ResponsiveLink,
  ResponsiveMenu,
  ResponsiveWrapper,
} from "./ResponsiveNavElement";

const ResponsiveNav = ({open, toggle}) => {
  return (
    <div>
      <ResponsiveContainer open={open} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <ResponsiveWrapper>
          <ResponsiveMenu>
            {hamburgerOptions.map((option, index) => (
              <ResponsiveLink to={option.link} key={index}>
                {option.title}
              </ResponsiveLink>
            ))}
          </ResponsiveMenu>
          <ButtonWrapper>
            <Button primary="true" large="true" to="/social">
              Social Media
            </Button>
          </ButtonWrapper>
        </ResponsiveWrapper>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponsiveNav;
