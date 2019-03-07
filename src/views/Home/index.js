import React from "react";
import { connect } from "react-redux";
import { Loader } from "components/Loader";
import SingleScrolling from "views/SingleScrolling";
import SwipeableViews from "react-swipeable-views";

class Home extends React.Component {
  render() {
    const { isLoading, shows } = this.props;
    const eventList = shows.map((e, i) => {
      let l = shows.length;
      return (
        <div style={{ minHeight: "100vh", color: "#FFFFFF" }} key={e.id}>
          <SingleScrolling
            length={l}
            i={i}
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
        {isLoading ? (
          <Loader />
        ) : (
          <SwipeableViews enableMouseEvents>{eventList}</SwipeableViews>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { isLoading } = state.events;
  const { today } = state.events.data;

  return {
    isLoading,
    shows: today.filter(e =>
      e.acf.tags.includes("Concert" || "Clubbing" || "Culture")
    ),
    isOpen: state.ui.isEventOnFocus
  };
};

export default connect(mapStateToProps)(Home);
