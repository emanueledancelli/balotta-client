import React from "react";
import { connect } from "react-redux";
import SwipeableEvent from "components/SwipeableEvent";
import SwipeableViews from "react-swipeable-views";
import { Loader } from "components/Loader";

class List extends React.Component {
  render() {
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

    const style = {
      container: {
        height: "100vh"
      },
      slide: {
        minHeight: "100vh"
      }
    };

    let eventsToMap;
    let listContent;
    let swipebleIndex = parseInt(match.params.index);

    switch (match.params.listname) {
      case "week":
        eventsToMap = week;
        break;
      case "today":
        eventsToMap = today;
        break;
      case "weekend":
        eventsToMap = weekEnd;
        break;
      case "culture":
        eventsToMap = culture;
        break;
      case "concerts":
        eventsToMap = concert;
        break;
      case "clubbing":
        eventsToMap = clubbing;
        break;
      case "shows":
        eventsToMap = shows;
        break;
      default:
        break;
    }

    listContent = eventsToMap.map((e, i) => {
      let l = eventsToMap.length;
      return (
        <div style={{ minHeight: "100vh", color: "#FFFFFF" }} key={e.id}>
          <SwipeableEvent
            length={l}
            i={i}
            style={style.slide}
            id={e.id}
            title={e.title.rendered}
            startDate={e.acf.start_date}
            startTime={e.acf.start_time}
            endTime={e.acf.end_time}
            place={e.acf.place.post_title}
            imageUrl={e.acf.image.url}
            description={e.acf.description}
            location={this.props.location}
          />
        </div>
      );
    });

    return (
      <>
        {!eventsToMap ? (
          <Loader />
        ) : (
          <SwipeableViews
            containerStyle={style.container}
            index={swipebleIndex}
            enableMouseEvents
          >
            {listContent}
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
    shows
  };
};

export default connect(mapStateToProps)(List);
