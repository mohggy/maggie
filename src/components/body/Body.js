import React from "react";
import { Button } from "../button/Button";
import { BodyContainer, BodyLeft, BodyRight, Section } from "./BodyElement";

const Body = ({ heading, infoOne, infoTwo, buttonLabel, reverse, image }) => {
  return (
    <Section>
      <BodyContainer>
        <BodyLeft>
          <h1>{heading}</h1>
          <p>{infoOne}</p>
          <p>{infoTwo}</p>
          <Button to="/aboutme">{buttonLabel}</Button>
        </BodyLeft>

        <BodyRight reverse={reverse}>
          <img src={image} alt="me" />
        </BodyRight>
      </BodyContainer>
    </Section>
  );
};

export default Body;
