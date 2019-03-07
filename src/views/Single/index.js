import React from "react";
import { getSingleEvent } from "api";
import { Loader } from "components/Loader";
import SwipeableEvent from "components/SwipeableEvent";

class Single extends React.Component {
  state = {
    e: ""
  };

  componentDidMount() {
    getSingleEvent(this.props.match.params.id).then(res =>
      this.setState({ e: res.data })
    );
  }

  render() {
    const { e } = this.state;
    return (
      <>
        {!e ? (
          <Loader />
        ) : (
          <SwipeableEvent
            id={e.id}
            title={e.title.rendered}
            startDate={e.acf.start_date}
            startTime={e.acf.start_time}
            endTime={e.acf.end_time}
            place={e.acf.place.post_title}
            imageUrl={e.acf.image.url}
            key={e.id}
            description={e.acf.description}
            location={this.props.location}
          />
        )}
      </>
    );
  }
}

export default Single;
