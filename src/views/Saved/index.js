import React from "react";
import styled from "@emotion/styled";
import { getFavEvents } from "../../api/index";
import DeleteOutlineIcon from "mdi-react/DeleteOutlineIcon";
import { Flex } from "components/Flex";
import { mq } from "styles/mediaQueries";
import MetaTags from "components/MetaTags";
import { Link } from "react-router-dom";

/**
 * Wait on refactor for new ui
 */

const Container = styled.div`
  height: 32vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  color: #222;
  margin-bottom: -3vh;
  padding-left: 3%;
  font-size: 2em;
`;
const SquareContainer = styled.div`
  padding-left: 3%;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Fix = styled.div`
  height: ${props => props.h};
`;

const Square = styled.div`
  width: 45vw;
  height: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #eb5757;
  ${mq[2]} {
    width: 350px;
    height: 350px;
  }
`;

const tags = {
  title: "Saved events - Balotta",
  description: "Controlla i tuoi eventi salvati"
};

class Saved extends React.Component {
  state = {
    eventsToShow: [],
    isLoading: false
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    let names = JSON.parse(localStorage.getItem("fav"));
    if (names !== null) {
      getFavEvents(names).then(res => {
        this.setState({
          eventsToShow: res,
          isLoading: false
        });
      });
    } else {
      this.setState({ isLoading: false });
    }
  }

  clearSavedEvents = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    const { eventsToShow, isLoading } = this.state;
    let favEv;
    let iw = window.innerHeight;

    if (eventsToShow.length >= 1) {
      favEv = eventsToShow.map(e => {
        let thumbnail = e.data.acf.image.sizes.medium;
        return (
          <Link to={`saved/single/${e.data.id}`} key={e.data.id}>
            <Square
              style={{
                background: `url(${thumbnail})`,
                backgroundSize: "cover"
              }}
            />
          </Link>
        );
      });
    } else {
      favEv = <p style={{ color: "#888" }}>Save some events already</p>;
    }

    return (
      <>
        <MetaTags {...tags} />

        <Container>
          <Title>Your saved events</Title>
        </Container>

        <Flex
          justify={iw > 940 ? "center" : "flex-start"}
          align="center"
          width="20%"
          padding="0 3% 5%"
          margin="0 5px 0"
          style={{ borderRadius: "20px" }}
        >
          <DeleteOutlineIcon />
          <span
            style={{ fontSize: "0.8rem", fontWeight: "500" }}
            onClick={this.clearSavedEvents}
          >
            clear
          </span>
        </Flex>
        <SquareContainer>
          {isLoading ? <p>Loading...</p> : favEv}
        </SquareContainer>
        <Fix h="20vh" />
      </>
    );
  }
}

export default Saved;
