import React from "react";
import { Title } from "components/Title";
import { Flex } from "components/Flex";
import { DescrContainer, Label, Text, Date } from "../style";
import moment from "moment";
import "moment/locale/it";

/**
 * TODO:
 *
 * Create Text styled component and replace spans.
 * Change FROM opacity TO color in styles/colors.
 * Change DATES to be passed from index (DO NOT CALL moment both here and in hero).
 * PUT DescriptionContainer/Container in its own file.
 * FIND a way to extrapolate data for dangerouslysetinnerhtml to index
 *
 */

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
      <DescrContainer>
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
            <Date>{getDate[0]}</Date>
            <Date isNumber>{getDate[1]}</Date>
            <Date>{getDate[2]}</Date>
          </Flex>
          <Flex width="33%" direction="column">
            <Label>from</Label>
            <Text>{startTime}</Text>
            <Label>to</Label>
            <Text>{endTime}</Text>
          </Flex>
          <Flex width="33%" direction="column">
            <Label>where</Label>
            <Text>{place}</Text>
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
      </DescrContainer>
    </Flex>
  );
};

export default Description;
