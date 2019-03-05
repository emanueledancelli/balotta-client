import React from "react";
import styled from "@emotion/styled";

/**
 * TODO:
 * show helper UI elements to let user know he can swipe for more events
 * and scroll for more info.
 */

const Container = styled.div`
  width: 100vw;
  padding: 3%;
  box-sizing: border-box;
  display: flex;
  border: 2px solid red;
  align-content: center;
  justify-content: space-around;
`;

const Commands = () => {
  return (
    <>
      <Container>
        <p>left</p>
        <p>favourite</p>
        <p>right</p>
      </Container>
      <Container>
        <p>info</p>
      </Container>
    </>
  );
};

export default Commands;
