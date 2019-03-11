import React from "react";
import SwipeableViews from "react-swipeable-views";
import Loadable from "react-loadable";
import { Loader } from "components/Loader";

const Hero = Loadable({
  loader: () => import("./components/hero"),
  loading: Loader
});

const Description = Loadable({
  loader: () => import("./components/description"),
  loading: Loader
});

const SwipeableEvent = props => {
  const style = {
    container: {
      height: "100vh"
    },
    slide: {
      minHeight: "100vh"
    },
    scroll: {
      overflowY: "scroll",
      minHeight: "100vh"
    }
  };

  return (
    <SwipeableViews enableMouseEvents containerStyle={style.container} axis="y">
      <div style={style.slide}>
        <Hero {...props} />
      </div>
      <div style={style.scroll}>
        <div style={style.slide}>
          <Description {...props} />
        </div>
      </div>
    </SwipeableViews>
  );
};

export default SwipeableEvent;
