import React from "react";
import styled from "@emotion/styled";
import moment from "moment";
import FavoriteOutlineIcon from "mdi-react/FavoriteOutlineIcon";
import { connect } from "react-redux";
import { setUi } from "../../../actions/uiActions";
import { Swipeable } from "react-touch";

const Container = styled("div")`
  min-width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  scroll-behavior: smooth;
  overflow: ${props => (props.isOpen ? "hidden" : "scroll")};
`;

const Animated = styled.div`
  transform: ${props =>
    props.isOpen ? "translateY(-18vh)" : "translateY(0px)"};
  font-size: 1em;
  transition: all ${props => props.duration} ease-out;
  & p {
    color: ${props => (props.isOpen ? "#222222" : "white")};
  }
`;

const Title = styled("h1")`
  font-size: ${props => (props.isOpen ? "1.5em" : "1.8em")};
  color: #ffffff;
  padding: 0 3%;
  transform: ${props =>
    props.isOpen ? "translateY(-22vh)" : "translateY(0px)"};
  transition: all 200ms ease-out;
  letter-spacing: -1px;
`;

const Details = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  transform: ${props =>
    props.isOpen ? "translatey(-35vh)" : "translateY(0px)"};
  padding: 3%;
  transition: all 200ms ease-out;
  z-index: 10;
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
  min-height: 70vh;
  padding: 22vh 3% 12%;
  display: ${props => (props.isOpen ? "flex" : "none")};
  opacity: ${props => (props.isOpen ? "1" : "0")};
  background-color: white;
  position: absolute;
  line-height: 180%;
  font-size: 1em;
  top: 30vh;
  transition: all 200ms ease-out;
  box-sizing: border-box;
  z-index: 9;
`;

const ActionsContainer = styled.div`
  border: 1px solid red;
  & svg {
    color: #eb5757;
  }
`;

class Card extends React.Component {
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
      uiActive,
      setUi
    } = this.props;
    const getDate = moment(start_date)
      .format("dddd D MMMM")
      .split(" ");

    return (
      <Swipeable onSwipeDown={console.log("it works")}>
        <Container
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +
              image +
              ") center",
            backgroundSize: "cover"
          }}
          id={id}
          onClick={() => setUi(id)}
        >
          <Title
            isOpen={uiActive}
            dangerouslySetInnerHTML={this.createTitle()}
          />
          <Details>
            <Animated isOpen={uiActive} duration="300ms">
              <DetailsDate>
                <DateDay>{getDate[0]}</DateDay>
                <DateDayNumber>{getDate[1]}</DateDayNumber>
                <DateMonth>{getDate[2]}</DateMonth>
              </DetailsDate>
            </Animated>
            <Animated isOpen={uiActive} duration="300ms">
              <Detail>
                <DetailNote>from</DetailNote>
                <DetailData>{start_time}</DetailData>
                <DetailNote>to</DetailNote>
                <DetailData>{end_time}</DetailData>
              </Detail>
            </Animated>
            <Animated isOpen={uiActive} duration="300ms">
              <Detail>
                <DetailNote>where</DetailNote>
                <DetailData>{place}</DetailData>
              </Detail>
            </Animated>
          </Details>
          <ActionsContainer>
            <FavoriteOutlineIcon size={36} />
            <FavoriteOutlineIcon size={36} />
          </ActionsContainer>
          <DescriptionContainer isOpen={uiActive}>
            <div dangerouslySetInnerHTML={this.createDescription()} />
          </DescriptionContainer>
        </Container>
      </Swipeable>
    );
  }
}

const mapStateToProps = state => {
  return {
    uiActive: state.ui.isEventOnFocus
  };
};

const mapDispatchToProps = {
  setUi
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
