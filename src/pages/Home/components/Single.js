import React from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

const Container = styled("div")`
  min-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: ${props => (props.isOpen ? "fixed" : "")};
`;

const Animated = styled("div")`
  transform: ${props =>
    props.isOpen ? "translateY(-28vh)" : "translateY(0px)"};
  font-size: ${props => (props.isOpen ? "0.9em" : "1em")};
  transition: all ${props => props.duration} ease-out;
`;

const Title = styled("h1")`
  font-weight: 700;
  font-size: ${props => (props.isOpen ? "1.8em" : "2em")};
  color: #ffffff;
  padding: 0 3%;
  transform: ${props =>
    props.isOpen ? "translateY(-26vh)" : "translateY(0px)"};
  transition: all 400ms ease-out;
  letter-spacing: -1px;
`;

const Details = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  transform: ${props =>
    props.isOpen ? "translatey(-27vh)" : "translateY(0px)"};
  padding: 3%;
  transition: all 500ms ease-out;
`;

const Detail = styled("div")`
  display: flex;
  width: 30vw;
  flex-direction: column;
  justify-content: flex-start;
`;

const DetailNote = styled("p")`
  color: #fff;
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
  color: #ffffff;
  margin: 0;
  font-weight: 500;
`;

const DateDay = styled("p")`
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  text-transform: capitalize;
  color: #f8f8f8;
`;

const DateDayNumber = styled("p")`
  color: #ffffff;
  margin: 1px;
  font-size: 1.8em;
  font-weight: 700;
  color: #f8f8f8;
`;

const DateMonth = styled("p")`
  color: #ffffff;
  margin: 0;
  font-weight: 500;
  color: #f8f8f8;
`;

const DescriptionContainer = styled("div")`
  width: 100vw;
  height: 62vh;
  padding: 12% 3%;
  opacity: ${props => (props.isOpen ? "1" : "0")};
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  line-height: 180%;
  font-size: 1em;
  top: 38vh;
  overflow: auto;
  clip-path: polygon(0 9%, 100% 0%, 100% 100%, 0% 100%);
  transition: all 500ms ease-out;
  box-sizing: border-box;
  z-index: 1;
`;

class Single extends React.Component {
  state = {
    isDescriptionOpen: false,
    windowWidth: 0,
    windowHeight: 0
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  };

  toggleDescription = () =>
    this.setState({ isDescriptionOpen: !this.state.isDescriptionOpen });

  createTitle = () => {
    return { __html: this.props.title };
  };

  createDescription = () => {
    return { __html: this.props.description };
  };

  render() {
    const { start_date, start_time, end_time, place, image } = this.props;
    const { isDescriptionOpen, windowHeight, windowWidth } = this.state;
    const getDate = start_date.split(" ");

    return (
      <Container
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
            image +
            ") center",
          backgroundSize: "cover"
        }}
        onClick={this.toggleDescription}
      >
        <Title
          isOpen={isDescriptionOpen}
          dangerouslySetInnerHTML={this.createTitle()}
        />
        <Details>
          <Animated isOpen={isDescriptionOpen} duration="400ms">
            <DetailsDate>
              <DateDay>{getDate[0]}</DateDay>
              <DateDayNumber>{getDate[1]}</DateDayNumber>
              <DateMonth>{getDate[2]}</DateMonth>
            </DetailsDate>
          </Animated>
          <Animated isOpen={isDescriptionOpen} duration="400ms">
            <Detail>
              <DetailNote>from</DetailNote>
              <DetailData>{start_time}</DetailData>
              <DetailNote>to</DetailNote>
              <DetailData>{end_time}</DetailData>
            </Detail>
          </Animated>
          <Animated isOpen={isDescriptionOpen} duration="400ms">
            <Detail>
              <DetailNote>where</DetailNote>
              <DetailData>{place}</DetailData>
            </Detail>
          </Animated>
        </Details>
        <DescriptionContainer isOpen={isDescriptionOpen}>
          <div dangerouslySetInnerHTML={this.createDescription()} />
        </DescriptionContainer>
      </Container>
    );
  }
}

export default Single;
