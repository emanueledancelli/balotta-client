import React from "react";
import {
  DescrWrapper,
  DescrContainer,
  Label,
  Text,
  Date,
  InfoSectionItem,
  InfoSectionContainer,
  Title,
  Hero
} from "../style";
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
    <DescrWrapper>
      <Hero>
        <Title dangerouslySetInnerHTML={createTitle(title)} />
      </Hero>
      <InfoSectionContainer>
        <InfoSectionItem>
          <Date>{getDate[0]}</Date>
          <Date isNumber>{getDate[1]}</Date>
          <Date>{getDate[2]}</Date>
        </InfoSectionItem>
        <InfoSectionItem>
          <Label>from</Label>
          <Text>{startTime}</Text>
          <Label>to</Label>
          <Text>{endTime}</Text>
        </InfoSectionItem>
        <InfoSectionItem>
          <Label>where</Label>
          <Text>{place}</Text>
        </InfoSectionItem>
      </InfoSectionContainer>
      <DescrContainer>
        <div style={{ height: "5vh" }} />
        <Label>Info</Label>
        <div
          style={{
            marginTop: "-15px",
            backgroundColor: "white",
            fontSize: "1em"
          }}
          dangerouslySetInnerHTML={descr}
        />
        <div style={{ height: "10vh" }} />
      </DescrContainer>
    </DescrWrapper>
  );
};

export default Description;
