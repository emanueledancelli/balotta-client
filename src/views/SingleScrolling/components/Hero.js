import React from "react";
import styled from "@emotion/styled";
import { Title } from "components/Title";
import { Flex } from "components/Flex";
import { colors } from "styles/colors";
import Commands from "./Commands";
import moment from "moment";
import FavoriteOutlineIcon from "mdi-react/FavoriteOutlineIcon";
import ShareVariantIcon from "mdi-react/ShareVariantIcon";

/**
 * hero component showing all info for event
 */

const Container = styled.div`
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const FlexItem = styled.div`
  display: flex;
  width: ${props => props.width || "100vw"};
  flex-direction: ${props => props.direction || "column"};
  flex: ${props => props.flex || 1};
  align-content: ${props => props.align || "auto"};
  justify-content: ${props => props.justify || "auto"};
`;

const Details = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  flex-direction: row;
  justify-content: flex-start;
  padding: 3%;
  transition: all 200ms ease-out;
`;

const Detail = styled.div`
  display: flex;
  width: 30vw;
  flex-direction: column;
  justify-content: flex-start;
`;

const DetailNote = styled.p`
  color: #fff;
  font-weight: 400;
  opacity: 0.5;
  margin: 0;
`;

const DetailsDate = styled.div`
  display: flex;
  width: 30vw;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
`;

const DetailData = styled.p`
  color: #ffffff;
  margin: 0;
  font-weight: 500;
`;

const DateDay = styled.p`
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  text-transform: capitalize;
  color: #f8f8f8;
`;

const DateDayNumber = styled.p`
  color: #ffffff;
  margin: 1px;
  font-size: 1.8em;
  font-weight: 700;
  color: #f8f8f8;
`;

const DateMonth = styled.p`
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  color: #f8f8f8;
`;

class Hero extends React.Component {
  state = {
    isShareOpen: false
  };

  render() {
    const {
      imageUrl,
      title,
      startDate,
      startTime,
      endTime,
      place
    } = this.props;

    const getDate = moment(startDate)
      .format("dddd D MMMM")
      .split(" ");

    return (
      <Container
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(" +
            imageUrl +
            ") center",
          backgroundSize: "cover"
        }}
      >
        <FlexItem flex={3} justify="flex-end" align="flex-end">
          <Title>{title}</Title>
          <Details>
            <DetailsDate>
              <DateDay>{getDate[0]}</DateDay>
              <DateDayNumber>{getDate[1]}</DateDayNumber>
              <DateMonth>{getDate[2]}</DateMonth>
            </DetailsDate>
            <Detail>
              <DetailNote>from</DetailNote>
              <DetailData>{startTime}</DetailData>
              <DetailNote>to</DetailNote>
              <DetailData>{endTime}</DetailData>
            </Detail>
            <Detail>
              <DetailNote>where</DetailNote>
              <DetailData>{place}</DetailData>
            </Detail>
          </Details>
        </FlexItem>
        <Flex flex={1} justify="space-evenly" align="flex-end">
          <Flex
            justify="center"
            align="center"
            padding="2%"
            width="20%"
            margin="0 5px 0"
            style={{
              borderRadius: "20px",
              color: `${colors.red}`,
              backgroundColor: "rgba(0, 0, 0, 0.3)"
            }}
          >
            <ShareVariantIcon size={20} />

            <span
              style={{
                color: "white",
                fontWeight: "500",
                marginLeft: "5px",
                fontSize: "0.8rem"
              }}
            >
              Share
            </span>
          </Flex>
          <Flex
            justify="center"
            align="center"
            padding="2%"
            width="20%"
            margin="0 5px 0"
            style={{
              borderRadius: "20px",
              color: `${colors.red}`,
              backgroundColor: "rgba(0, 0, 0, 0.3)"
            }}
          >
            <FavoriteOutlineIcon size={20} />
            <span
              style={{
                color: "white",
                fontWeight: "500",
                marginLeft: "5px",
                fontSize: "0.8rem"
              }}
            >
              Save
            </span>
          </Flex>
        </Flex>
        <FlexItem flex={1} justify="flex-end" align="flex-end">
          <Commands length={this.props.length} index={this.props.i} />
        </FlexItem>
      </Container>
    );
  }
}

export default Hero;
