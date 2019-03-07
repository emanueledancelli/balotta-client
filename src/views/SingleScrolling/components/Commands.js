import React from "react";
import { Flex } from "components/Flex";

// import styled from "@emotion/styled";

/**
 * TODO:
 * ADD IG STORIES LIKE BAR
 */

const Commands = ({ length, index }) => {
  return (
    <>
      <Flex padding="3%" justify="space-between">
        <Flex>
          <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.9)" }}>
            {!isNaN(index) ? `${index + 1}` : null}
          </span>
          <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>
            {length >= 1 && `/${length}`}
          </span>
        </Flex>
        <span>ciaone</span>
      </Flex>
    </>
  );
};

export default Commands;
