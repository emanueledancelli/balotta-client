import React from "react";
import styled from "@emotion/styled";
import { Title } from "components/Title";
import { Flex } from "components/Flex";
import { colors } from "styles/colors";
import { addToFavorities } from "utils/saveFavourites";
import { check } from "utils/check";
import { removeFromFavourites } from "utils/removeFromFavourites";
import Sharer from "./Sharer";
import moment from "moment";
import FavoriteOutlineIcon from "mdi-react/FavoriteOutlineIcon";
import FavoriteIcon from "mdi-react/FavoriteIcon";
import ShareVariantIcon from "mdi-react/ShareVariantIcon";

/**
 * TODO:
 * Clean initial styles with Flex component
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
  font-weight: 300;
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
    isShareOpen: false,
    isSaved: false,
    addMarginForNavigation: false
  };

  componentDidMount() {
    let s = check(this.props.id);
    let l = this.props.location.pathname;

    if (l === "/" || l.startsWith("/shared")) {
      this.handleAddMarginForNavigationState();
    }
    this.handleSaveButtonState(s);
  }

  handleAddMarginForNavigationState = () => {
    this.setState({ addMarginForNavigation: true });
  };

  handleSaveButtonState = s => {
    this.setState({ isSaved: s });
  };

  handleShareButton = () => {
    this.setState({ isShareOpen: !this.state.isShareOpen });
  };

  handleShadowAction = () => {
    this.setState({ isShareOpen: false });
  };

  handleSaveButton = () => {
    this.setState({ isSaved: !this.state.isSaved });
  };

  createTitle = title => {
    return { __html: title };
  };

  render() {
    const {
      imageUrl,
      title,
      startDate,
      startTime,
      endTime,
      place,
      i,
      length
    } = this.props;
    const { isSaved, isShareOpen } = this.state;

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
        {isShareOpen && (
          <Sharer
            title={title}
            id={this.props.id}
            handleClick={this.handleShadowAction}
          />
        )}
        <FlexItem flex={5} justify="center" align="flex-end">
          <Title dangerouslySetInnerHTML={this.createTitle(title)} />
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
        <FlexItem flex={1} justify="flex-end" align="flex-end">
          <Flex justify="space-between" padding="3%">
            <Flex align="flex-end">
              <span
                style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.9)" }}
              >
                {!isNaN(i) ? `${i + 1}` : null}
              </span>
              <span
                style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}
              >
                {length >= 1 && `/${length}`}
              </span>
            </Flex>
            <Flex flex={1} justify="flex-end" align="flex-end">
              <Flex
                justify="center"
                align="center"
                padding="2%"
                width="40px"
                height="40px"
                style={{
                  color: "white",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)"
                }}
                onClick={this.handleShareButton}
              >
                <ShareVariantIcon size={28} />
              </Flex>
              {!isSaved ? (
                <Flex
                  justify="center"
                  align="center"
                  padding="2%"
                  width="40px"
                  height="40px"
                  style={{
                    borderRadius: "20px",
                    marginLeft: "10px",
                    color: `${colors.red}`,
                    backgroundColor: "rgba(0, 0, 0, 0.3)"
                  }}
                  onClick={() => {
                    addToFavorities(this.props.id);
                    this.handleSaveButton();
                  }}
                >
                  <FavoriteOutlineIcon size={28} />
                </Flex>
              ) : (
                <Flex
                  justify="center"
                  align="center"
                  padding="2%"
                  width="40px"
                  height="40px"
                  style={{
                    marginLeft: "10px",
                    borderRadius: "20px",
                    color: `${colors.red}`,
                    backgroundColor: "rgba(0, 0, 0, 0.3)"
                  }}
                  onClick={() => {
                    removeFromFavourites(this.props.id);
                    this.handleSaveButton();
                  }}
                >
                  <FavoriteIcon size={28} />
                </Flex>
              )}
            </Flex>
          </Flex>
        </FlexItem>
        {this.state.addMarginForNavigation && <div style={{ height: "8vh" }} />}
      </Container>
    );
  }
}

export default Hero;
