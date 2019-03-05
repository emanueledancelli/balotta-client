import React from "react";
import styled from "@emotion/styled";
import SwipeableViews from "react-swipeable-views";
import { Title } from "components/Title";
import Loadable from "react-loadable";
import { Loader } from "components/Loader";
import Commands from "./components/Commands";

const Description = Loadable({
  loader: () => import("./components/Description"),
  loading: Loader
});

const Container = styled.div`
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 3%;
  transition: all 200ms ease-out;
  z-index: 10;
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
  align-items: flex-start;
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

class SingleScrolling extends React.Component {
  state = {
    windowHeight: Number
  };
  componentDidMount() {
    let h = window.screen.height;
    this.setState({
      windowHeight: h
    });
  }
  createDescription = des => {
    return { __html: des };
  };

  render() {
    const { windowHeight } = this.state;
    const {
      title,
      //startDate,
      startTime,
      endTime,
      place,
      imageUrl,
      description
    } = this.props;

    /*     const getDate = moment(startDate)
      .format("dddd D MMMM")
      .split(" ");
 */

    const getDate = ["Martedì", "25", "Febbraio"];

    const style = {
      container: {
        height: windowHeight
      },
      slide: {
        minHeight: windowHeight
      },
      slide2: {
        minHeight: windowHeight,
        marginBottom: 100
      },
      singleSlide: {
        minHeight: windowHeight
      },
      scroll: {
        overflowY: "scroll",
        minHeight: windowHeight
      }
    };

    return (
      <>
        <SwipeableViews containerStyle={style.container} axis="y">
          <div style={style.slide}>
            <Container
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
                  imageUrl +
                  ") center",
                backgroundSize: "cover"
              }}
            >
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
              <Commands />
            </Container>
          </div>
          <div style={style.scroll}>
            <div style={style.slide2}>
              <Description description={description} />
            </div>
          </div>
        </SwipeableViews>
      </>
    );
  }
}

export default SingleScrolling;
