import React from "react";
import styled from "@emotion/styled";
import HomeOutlineIcon from "mdi-react/HomeOutlineIcon";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";
import MapOutlineIcon from "mdi-react/MapOutlineIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";

const Container = styled("div")`
  height: 7vh;
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  z-index: 1;
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
`;

const Item = styled("p")`
  color: #9a9a9a;
  margin: 0;
`;

const Navigation = () => {
  return (
    <Container>
      <Item>
        <HomeOutlineIcon />
      </Item>
      <Item>
        <StarOutlineIcon />
      </Item>
      <Item>
        <MapOutlineIcon />
      </Item>
      <Item>
        <AccountOutlineIcon />
      </Item>
    </Container>
  );
};

export default Navigation;
