import React from "react";
import { connect } from "react-redux";
import { Hero, Title } from "./style";
import MetaTags from "components/MetaTags";
import SingleList from "./components/singleList";

const tags = {
  title: "Home - Balotta",
  description: "Scopri i migliori eventi della settimana"
};

class Home extends React.Component {
  state = {
    day: ""
  };

  componentDidMount() {
    this.setDay();
  }

  setDay = () => {
    let d = new Date().getDay();
    this.setState({ day: d });
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

    const { day } = this.state;

    return (
      <>
        <MetaTags {...tags} />

        <Hero>
          <Title active>Events</Title>
          <Title>Places</Title>
        </Hero>

        {today && today.length > 0 && (
          <SingleList title="Today" list={today} name="today" />
        )}
        {day !== 0 && weekEnd && weekEnd.length > 0 && (
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
