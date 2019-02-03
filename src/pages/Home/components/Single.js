import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  min-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled("h1")`
  font-weight: 900;
  font-size: 1.8em;
  transform: ${props =>
    props.isOpen ? "translatey(0px)" : "translateY(200px)"};
  color: #ffffff;
  padding: 0 3%;
  transition: all 500ms ease-out;
`;

const Details = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 3%;
`;

const Detail = styled("div")`
  display: flex;
  width: 20vw;
  flex-direction: column;
  justify-content: flex-start;
`;

const DetailNote = styled("p")`
  color: #888888;
  margin: 0;
`;

const DetailData = styled("p")`
  color: #ffffff;
  margin: 0;
  font-weight: 500;
`;

class Single extends React.Component {
  state = {
    isDescriptionOpen: false
  };

  toggleDescription = () =>
    this.setState({ isDescriptionOpen: !this.state.isDescriptionOpen });

  render() {
    const { isDescriptionOpen } = this.state;
    const {
      title,
      start_time,
      end_time,
      place,
      image,
      description
    } = this.props;

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
        <Title isOpen={isDescriptionOpen}>{title}</Title>
        <Details>
          <Detail>
            <DetailNote>from</DetailNote>
            <DetailData>{start_time}</DetailData>
          </Detail>
          <Detail>
            <DetailNote>to</DetailNote>
            <DetailData>{end_time}</DetailData>
          </Detail>
          <Detail>
            <DetailNote>where</DetailNote>
            <DetailData>{place}</DetailData>
          </Detail>
        </Details>
        {isDescriptionOpen && <p style={{ color: "white" }}>{description}</p>}
      </Container>
    );
  }
}

export default Single;
