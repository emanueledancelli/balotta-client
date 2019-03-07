import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import SquaredList from "../../components/SquaredList";
import { Title } from "components/Title";

const Container = styled.div`
  height: 32vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Subtitle = styled.h2`
  color: #222;
  font-size: 1.2em;
  padding-left: 3%;
`;

const Numbers = styled.span`
  color: rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 0.9em;
`;

const Fix = styled.div`
  height: ${props => props.h};
`;

class Search extends React.Component {
  createTitle = title => {
    return { __html: title };
  };

  render() {
    const {
      today,
      weekEnd,
      week,
      concert,
      clubbing,
      shows,
      culture
    } = this.props;

    const shuffledDay = today;
    const shuffledWe = weekEnd;

    return (
      <>
        <Container onClick={this.handleHeroClick}>
          <Title color="#222222">Events</Title>
          <Title color="rgba(0, 0, 0, 0.2)">Places</Title>
        </Container>

        <Subtitle>
          Today <Numbers>&sdot; {today.length}</Numbers>
        </Subtitle>
        {today && <SquaredList hasTags list={shuffledDay} name="today" />}
        <Fix h="5vh" />
        <Subtitle>
          On the weekend <Numbers>&sdot; {weekEnd.length}</Numbers>
        </Subtitle>
        {weekEnd && <SquaredList hasTags list={shuffledWe} name="weekend" />}
        <Fix h="5vh" />
        <Subtitle>
          Clubbing {clubbing && <Numbers>&sdot; {clubbing.length}</Numbers>}
        </Subtitle>
        {clubbing && <SquaredList list={clubbing} name="clubbing" />}
        <Fix h="5vh" />
        <Subtitle>
          Concerts <Numbers>&sdot; {concert.length}</Numbers>
        </Subtitle>
        {concert && <SquaredList list={concert} name="concerts" />}
        <Fix h="5vh" />
        <Subtitle>
          Culture <Numbers>&sdot; {culture.length}</Numbers>
        </Subtitle>
        {culture && <SquaredList list={culture} name="culture" />}
        <Fix h="5vh" />
        <Subtitle>
          Shows <Numbers>&sdot; {shows.length}</Numbers>
        </Subtitle>
        {shows && <SquaredList list={shows} name="shows" />}
        <Fix h="5vh" />
        <Subtitle>
          Everything this week <Numbers>&sdot; {week.length}</Numbers>
        </Subtitle>
        {week && <SquaredList list={week} name="week" hasTags />}
        <Fix h="20vh" />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { isLoading } = state.events;
  const {
    today,
    weekEnd,
    week,
    concert,
    culture,
    clubbing,
    shows
  } = state.events.data;

  return {
    isLoading,
    today,
    weekEnd,
    week,
    concert,
    culture,
    clubbing,
    shows
  };
};

export default connect(mapStateToProps)(Search);