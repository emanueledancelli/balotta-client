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

const Title = styled("h1")`
  font-weight: 600;
  font-size: ${props => (props.isOpen ? "1.8em" : "2em")};
  color: #ffffff;
  padding: 0 3%;
  transform: ${props =>
    props.isOpen ? "translateY(-25vh)" : "translateY(0px)"};
  transition: all 500ms ease-out;
  letter-spacing: -1px;
`;

const Details = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  transform: ${props =>
    props.isOpen ? "translatey(-25vh)" : "translateY(0px)"};
  padding: 3%;
  transition: all 500ms ease-out;
`;

const slideIn = keyframes`
  from {opacity: 0};
  to { opacity: 1};
`;

const Detail = styled("div")`
  display: flex;
  width: 30vw;
  flex-direction: column;
  justify-content: flex-start;
`;

const DetailNote = styled("p")`
  color: #888888;
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
  width: 98vw;
  border-radius: 5px;
  display: flex;
  height: 55vh;
  opacity: ${props => (props.isOpen ? "1" : "0")};
  justify-content: center;
  align-items: center;
  background-color: white;
  position: absolute;
  line-height: 150%;
  top: 45vh;
  padding: 5%;
  margin: 10px;
  overflow: auto;
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
        <Details isOpen={isDescriptionOpen}>
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
        </Details>
        <DescriptionContainer
          isOpen={isDescriptionOpen}
          dangerouslySetInnerHTML={this.createDescription()}
        />
      </Container>
    );
  }
}

export default Single;
