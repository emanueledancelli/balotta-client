import React from "react";
import { getSingleEvent } from "api";
import { Loader } from "components/Loader";
import MetaTags from "components/MetaTags";
import SwipeableEvent from "components/SwipeableEvent";

class Single extends React.Component {
  state = {
    e: "",
    title: "",
    image: "",
    description: ""
  };

  componentDidMount() {
    getSingleEvent(this.props.match.params.id)
      .then(r => this.handleState(r.data))
      .then(() => this.handleTags());
  }

  handleState = d => {
    this.setState({ e: d });
  };

  handleTags = () => {
    let s = this.state.e.acf.description.slice(0, 20);
    this.setState({
      title: `${this.state.e.title.rendered} - Balotta`,
      image: this.state.e.acf.image.url,
      description: s
    });
  };

  render() {
    const { e, title, description, image } = this.state;

    const tags = {
      title,
      description,
      image
    };

    return (
      <>
        <MetaTags {...tags} />
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
