import React from "react";
import { connect } from "react-redux";
import SingleScrolling from "../SingleScrolling/SingleScrolling";
import SwipeableViews from "react-swipeable-views";

class List extends React.Component {
  state = {
    windowHeight: Number,
    index: 0
  };

  componentDidMount() {
    var iHeight = window.screen.height;
    this.setState({
      windowHeight: iHeight
    });
  }

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { windowHeight, index } = this.state;

    const {
      today,
      weekEnd,
      week,
      match,
      clubbing,
      shows,
      culture,
      concert
    } = this.props;

    const styles = {
      slide: {
        minHeight: windowHeight,
        color: "#fff"
      }
    };

    let eventsToMap;
    let eventsList;

    if (match.params.listname === "week") {
      eventsToMap = week;
    } else if (match.params.listname === "today") {
      eventsToMap = today;
    } else if (match.params.listname === "weekend") {
      eventsToMap = weekEnd;
    } else if (match.params.listname === "clubbing") {
      eventsToMap = clubbing;
    } else if (match.params.listname === "shows") {
      eventsToMap = shows;
    } else if (match.params.listname === "culture") {
      eventsToMap = culture;
    } else if (match.params.listname === "concerts") {
      eventsToMap = concert;
    }

    eventsList = eventsToMap.map(e => {
      return (
        <div style={styles.slide} key={e.key}>
          <SingleScrolling
            title={e.title.rendered}
            startDate={e.acf.start_date}
            startTime={e.acf.start_time}
            endTime={e.acf.end_time}
            place={e.acf.place.post_title}
            imageUrl={e.acf.image.url}
            description={e.acf.description}
          />
        </div>
      );
    });

    return (
      <>
        {!eventsToMap ? (
          <p>Loading...</p>
        ) : (
          <SwipeableViews ignoreNativeScroll={true}>
            {eventsList}
          </SwipeableViews>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const {
    today,
    weekEnd,
    week,
    culture,
    concert,
    shows,
    clubbing,
    isLoading
  } = state.events.data;

  return {
    isLoading,
    today,
    weekEnd,
    week,
    concert,
    culture,
    clubbing,
    shows,
    isOpen: state.ui.isEventOnFocus
  };
};

export default connect(mapStateToProps)(List);
