import React from "react";
import SwipeableViews from "react-swipeable-views";
import Loadable from "react-loadable";
import { Loader } from "components/Loader";

const Hero = Loadable({
  loader: () => import("./components/Hero"),
  loading: Loader
});

const Description = Loadable({
  loader: () => import("./components/Description"),
  loading: Loader
});

class SwipeableEvent extends React.Component {
  state = {
    windowHeight: Number
  };
  componentDidMount() {
    let h = window.screen.height;
    this.setState({
      windowHeight: h
    });
  }

  render() {
    const { windowHeight } = this.state;
    const style = {
      container: {
        height: windowHeight
      },
      slide: {
        minHeight: windowHeight
      },
      scroll: {
        overflowY: "scroll",
        minHeight: windowHeight
      }
    };

    return (
      <SwipeableViews
        enableMouseEvents
        containerStyle={style.container}
        axis="y"
      >
        <div style={style.slide}>
          <Hero {...this.props} />
        </div>
        <div style={style.scroll}>
          <div style={style.slide}>
            <Description {...this.props} />
          </div>
        </div>
      </SwipeableViews>
    );
  }
}

export default SwipeableEvent;
