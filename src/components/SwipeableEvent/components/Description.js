import React from "react";
import styled from "@emotion/styled";
import { Title } from "components/Title";
import { Flex } from "components/Flex";
import { colors } from "styles/colors";
import moment from "moment";
import "moment/locale/it";

/**
 * TODO:
 * Update style to reflect hero.
 */

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: #222;
  background-color: white;
  transition: all 200ms ease-out;
  box-sizing: border-box;
  word-break: break-word;
  z-index: 9;
  & a {
    color: #111;
    text-decoration: underline;
  }
`;

const Text = styled.span`
  opacity: ${props => (props.isLabel ? "0.5" : "1")};
  font-size: ${props => (props.isLabel ? "0.8rem" : "0.9rem")};
  font-weight: ${props => (props.isLabel ? "300" : "500")};
`;

const createDescription = description => {
  return { __html: description };
};

const createTitle = title => {
  return { __html: title };
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
  const getDate = moment(startDate)
    .locale("it")
    .format("dddd D MMMM")
    .split(" ");
  return (
    <Flex
      height="100vh"
      position="relative"
      direction="column"
      align="Flex-start"
      justify="center"
    >
      <Container>
        <Flex padding="3%" margin="10vh 0 0" align="flex-end">
          <Title
            style={{ padding: "0", margin: "0" }}
            color="#222"
            size="1.5rem"
            dangerouslySetInnerHTML={createTitle(title)}
          />
        </Flex>
        <Flex
          margin="0 0 5vh"
          padding="3%"
          direction="row"
          justify="space-between"
        >
          <Flex width="33%" direction="column">
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                textTransform: "capitalize"
              }}
            >
              {getDate[0]}
            </span>
            <span style={{ fontWeight: "700", fontSize: "1.6rem" }}>
              {getDate[1]}
            </span>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                textTransform: "capitalize"
              }}
            >
              {getDate[2]}
            </span>
          </Flex>
          <Flex width="33%" direction="column">
            <span
              style={{ opacity: "0.5", fontWeight: "300", fontSize: "0.8rem" }}
            >
              from
            </span>
            <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>
              {startTime}
            </span>
            <span
              style={{ opacity: "0.5", fontWeight: "300", fontSize: "0.8rem" }}
            >
              to
            </span>
            <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>
              {endTime}
            </span>
          </Flex>
          <Flex width="33%" direction="column">
            <span
              style={{ opacity: "0.5", fontWeight: "300", fontSize: "0.8rem" }}
            >
              where
            </span>
            <span style={{ fontWeight: "500" }}>{place}</span>
          </Flex>
        </Flex>
        <div
          style={{
            height: "2px",
            borderBottom: "0.5px solid rgba(0,0,0,0.1)",
            width: "100vw"
          }}
        />
        <Flex
          direction="column"
          style={{
            lineHeight: "160%",
            fontSize: "1rem",
            padding: "3%",
            marginTop: "5vh"
          }}
        >
          <span
            style={{
              fontWeight: "300",
              fontSize: "0.8rem",
              zIndex: "0",
              opacity: "0.5",
              marginBottom: "-2vh"
            }}
          >
            Info
          </span>
          <div
            style={{ backgroundColor: "white", fontSize: "1em" }}
            dangerouslySetInnerHTML={descr}
          />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Description;
