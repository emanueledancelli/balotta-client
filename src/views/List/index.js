import React from "react";
import { connect } from "react-redux";
import { Loader } from "components/Loader";
import MetaTags from "components/MetaTags";
import SwipeableEvent from "components/SwipeableEvent";
import SwipeableViews from "react-swipeable-views";

class List extends React.Component {
  stte = {
    title: "",
    description: ""
  };

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

    let title;
    let description;
    let eventsToMap;
    let listContent;
    let swipebleIndex = parseInt(match.params.index);

    switch (match.params.listname) {
      case "week":
        eventsToMap = week;
        title = "This week - Balotta";
        description = "I migliori eventi questa settimana";
        break;
      case "today":
        eventsToMap = today;
        title = "Today - Balotta";
        description = "I migliori eventi oggi";
        break;
      case "weekend":
        eventsToMap = weekEnd;
        title = "Weekend - Balotta";
        description = "I migliori eventi nel weekend";
        break;
      case "culture":
        eventsToMap = culture;
        title = "Culture - Balotta";
        description = "I migliori eventi di cultura";
        break;
      case "concerts":
        eventsToMap = concert;
        title = "Concerts - Balotta";
        description = "I migliori concerti questa settimana";
        break;
      case "clubbing":
        eventsToMap = clubbing;
        title = "Clubbing - Balotta";
        description = "I migliori eventi di vita nottura questa settimana";
        break;
      case "shows":
        eventsToMap = shows;
        title = "Shows - Balotta";
        description = "I migliori shows questa settimana";
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
        <MetaTags title={title} description={description} />

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
