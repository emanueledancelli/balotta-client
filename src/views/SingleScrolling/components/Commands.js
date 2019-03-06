import React from "react";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import { Flex } from "components/Flex";

/**
 *
 * show helper UI elements to let user know he can swipe for more events
 * and scroll for more info.
 *
 */

const Commands = () => {
  return (
    <>
      <Flex style={{ color: "rgba(255,255,255, 0.1)" }} justify="space-between">
        <Flex align="center">
          <ChevronLeftIcon size={55} />
        </Flex>
        <Flex>
          <ChevronDownIcon size={55} />
        </Flex>
        <Flex>
          <ChevronRightIcon size={55} />
        </Flex>
      </Flex>
    </>
  );
};

export default Commands;
