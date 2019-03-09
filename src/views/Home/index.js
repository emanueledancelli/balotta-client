import React from "react";
import { connect } from "react-redux";
import { Title } from "components/Title";
import { Hero } from "./style";
import SingleList from "./components/singleList";

class Home extends React.Component {
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

    return (
      <>
        <Hero>
          <Title color="#222222">Events</Title>
          <Title color="rgba(0, 0, 0, 0.2)">Places</Title>
        </Hero>
        {today && today.length > 0 && (
          <SingleList title="Today" list={today} name="today" />
        )}
        {weekEnd && weekEnd.length > 0 && (
          <SingleList title="On the weekend" list={weekEnd} name="weekend" />
        )}
        {clubbing && clubbing.length > 0 && (
          <SingleList title="Clubbing" list={clubbing} name="clubbing" />
        )}
        {concert && concert.length > 0 && (
          <SingleList title="Concerts" list={concert} name="concerts" />
        )}
        {culture && culture.length > 0 && (
          <SingleList title="Culture" list={culture} name="culture" />
        )}
        {shows && shows.length > 0 && (
          <SingleList title="Shows" list={shows} name="shows" />
        )}
        {week && week.length > 0 && (
          <SingleList
            isLast
            title="Everything this week"
            list={week}
            name="week"
          />
        )}
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

export default connect(mapStateToProps)(Home);
