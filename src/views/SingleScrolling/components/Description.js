import React from "react";
import styled from "@emotion/styled";
import { Title } from "components/Title";
import { Flex } from "components/Flex";
import { colors } from "styles/colors";

/**
 * DESCR:
 * get props from parent (SingleScrolling/Card)
 * title,
 * place,
 * start_date,
 * start_time,
 * end_time,
 * description
 *
 * then shows them, gets called with a loadable.
 */

const DescriptionContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 3%;
  color: #222;
  background-color: white;

  transition: all 200ms ease-out;
  box-sizing: border-box;
  word-break: break-word;
  z-index: 9;
  & a {
    color: #666;
    text-decoration: underline;
  }
`;

const createDescription = description => {
  return { __html: description };
};

const Description = ({
  title,
  place,
  startTime,
  startDate,
  endTime,
  description
}) => {
  const descr = createDescription(description);
  return (
    <Flex
      height="100vh"
      position="relative"
      direction="column"
      align="flex-start"
      justify="center"
    >
      <DescriptionContainer>
        <div style={{ height: "6vh", display: "block" }} />
        <Title color={colors.black} padding="0">
          {title}
        </Title>
        <Flex>{startTime}</Flex>
        <Flex>{startDate}</Flex>
        <Flex>{endTime}</Flex>
        <Flex>{place}</Flex>
        <div
          style={{ lineHeight: "160%", fontSize: "0.9rem" }}
          dangerouslySetInnerHTML={descr}
        />
        <div style={{ height: "5vh", backgroundColor: "black" }} />
      </DescriptionContainer>
    </Flex>
  );
};

export default Description;
