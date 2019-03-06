import React from "react";
import { connect } from "react-redux";
import { Loader } from "components/Loader";
import SingleScrolling from "views/SingleScrolling";
import SwipeableViews from "react-swipeable-views";

class Home extends React.Component {
  render() {
    const { isLoading, shows } = this.props;
    const eventList = shows.map(e => {
      return (
        <div style={{ minHeight: "100vh", color: "#FFFFFF" }} key={e.id}>
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
  let tod = today.filter(e =>
    e.acf.tags.includes("Concert" || "Clubbing" || "Culture")
  );
  console.log(tod);

  return {
    isLoading,
    shows: today.filter(e =>
      e.acf.tags.includes("Concert" || "Clubbing" || "Culture")
    ),
    isOpen: state.ui.isEventOnFocus
  };
};

export default connect(mapStateToProps)(Home);
