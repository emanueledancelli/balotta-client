import React from "react";
import { Flex } from "components/Flex";
import styled from "@emotion/styled";

/**
 * TODO:
 * ADD IG STORIES LIKE BAR
 */

/* 
const Line = styled.div`
  height: 3px;
  min-width: 20px;
  background-color: #eb5757;
  margin: 0 2px 3px;
`;

const lines = length => {
  let l = [];
  for (let e = 0; e < length; e++) {
    l.push(<Line key={e.index} length={length} />);
  }
  return <>{l}</>;
};
 */

const Commands = ({ length, index }) => {
  return (
    <>
      <Flex padding="3%">
        <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>
          {index + 1}/
        </span>
        <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>
          {length}
        </span>
      </Flex>
    </>
  );
};

export default Commands;
