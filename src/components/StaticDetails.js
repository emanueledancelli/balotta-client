import React from "react";
import styled from "@emotion/styled";
import { keyframes, withEmotionCache } from "@emotion/core";
import moment from "moment";

import { useSwipeable, Swipeable } from "react-swipeable";
import { history } from "../index";

const Container = styled("div")`
  min-width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
`;

const Title = styled("h1")`
  font-size: 2em;
  color: #ffffff;
  padding: 0 3%;
  transition: all 200ms ease-out;
  letter-spacing: -1px;
`;

const DetailsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 3%;
  transition: all 500ms ease-out;
  z-index: 10;
`;

const Detail = styled("div")`
  display: flex;
  width: 30vw;
  flex-direction: column;
  justify-content: flex-start;
`;

const DetailNote = styled("p")`
  font-weight: 400;
  opacity: 0.5;
  margin: 0;
`;

const DetailsDate = styled("div")`
  display: flex;
  width: 30vw;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const DetailData = styled("p")`
  margin: 0;
  font-weight: 500;
`;

const DateDay = styled("p")`
  margin: 0;
  font-weight: 500;
  text-transform: capitalize;
`;

const DateDayNumber = styled("p")`
  margin: 1px;
  font-size: 1.8em;
  font-weight: 700;
`;

const DateMonth = styled("p")`
  margin: 0;
  font-weight: 500;
`;

const DescriptionContainer = styled("div")`
  width: 100vw;
  min-height: 70vh;
  padding: 22vh 3% 12%;
  background-color: white;
  position: absolute;
  opacity: 0;
  line-height: 180%;
  font-size: 1em;
  top: 30vh;
  transition: all 200ms ease-out;
  box-sizing: border-box;
  z-index: 9;
`;

class Details extends React.Component {
  state = {
    isSingle: false,
    show: true,
    doingAnimation: true,
    //base component styles
    style: {
      title: {
        fontSize: "2em",
        transform: "translateY(0px)",
        transition: "all 300ms ease-out"
      },
      description: {
        opacity: 0,
        transition: "all 300ms ease-out"
      },
      details: {
        transform: "translateY(0px)",
        color: "white",
        transition: "all 300ms ease-out"
      }
    }
  };

  /*   componentDidMount() {
    setTimeout(this.mountAnimation, 20);
  }

  mountAnimation = () => {
    this.setState({
      style: {
        title: {
          fontSize: "1.8em",
          transform: "translateY(-24vh)"
        },
        description: {
          opacity: 1
        },
        details: {
          transform: "translateY(-20vh)",
          color: "#222"
        }
      }
    });
  }; */

  /*   unMountAnimation = () => {
    this.setState({
      style: {
        fontSize: "2em"
      }
    });
  };
 */
  createTitle = () => {
    return { __html: this.props.title };
  };

  createDescription = () => {
    return { __html: this.props.description };
  };

  render() {
    const {
      start_date,
      start_time,
      end_time,
      place,
      image,
      id,
      location,
      match
    } = this.props;
    const { style } = this.state;
    const getDate = moment(start_date)
      .format("dddd D MMMM")
      .split(" ");

    return (
      <Container
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
            image +
            ") center",
          backgroundSize: "cover"
        }}
        id={id}
      >
        <Swipeable onSwipedRight={alert("swiped down")}>
          <Title
            style={style.title}
            dangerouslySetInnerHTML={this.createTitle()}
          />
          <DetailsContainer style={style.details}>
            <DetailsDate>
              <DateDay>{getDate[0]}</DateDay>
              <DateDayNumber>{getDate[1]}</DateDayNumber>
              <DateMonth>{getDate[2]}</DateMonth>
            </DetailsDate>
            <Detail>
              <DetailNote>from</DetailNote>
              <DetailData>{start_time}</DetailData>
              <DetailNote>to</DetailNote>
              <DetailData>{end_time}</DetailData>
            </Detail>
            <Detail>
              <DetailNote>where</DetailNote>
              <DetailData>{place}</DetailData>
            </Detail>
          </DetailsContainer>
        </Swipeable>
      </Container>
    );
  }
}

export default Details;
