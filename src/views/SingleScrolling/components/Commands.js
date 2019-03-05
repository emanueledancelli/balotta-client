import React from "react";
import styled from "@emotion/styled";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import FavoriteOutlineIcon from "mdi-react/FavoriteOutlineIcon";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";

/**
 * TODO:
 * show helper UI elements to let user know he can swipe for more events
 * and scroll for more info.
 */

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  color: rgba(255, 255, 255, 0.1);
  justify-content: ${props => props.justify};
  flex-direction: ${props => props.direction};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Commands = () => {
  return (
    <>
      <Container justify="space-between">
        <Flex>
          <ChevronLeftIcon size={55} />
        </Flex>
        <Flex>
          <ChevronDownIcon size={55} />
        </Flex>
        <Flex>
          <ChevronRightIcon size={55} />
        </Flex>
      </Container>
    </>
  );
};

export default Commands;
