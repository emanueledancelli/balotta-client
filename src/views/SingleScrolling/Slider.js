import React from "react";
//import SingleScrolling from "./SingleScrolling";
import SwipeableViews from "react-swipeable-views";

class Slider extends React.Component {
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
    const { index, windowHeight } = this.state;

    const styles = {
      slide: {
        minHeight: windowHeight,
        color: "#fff"
      }
    };

    return (
      <>
        <SwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents
        >
          <div style={styles.slide}>{/* <SingleScrolling /> */}</div>
          <div style={styles.slide}>{/* <SingleScrolling /> */}</div>
          <div style={styles.slide}>{/* <SingleScrolling /> */}</div>
        </SwipeableViews>
      </>
    );
  }
}

export default Slider;
