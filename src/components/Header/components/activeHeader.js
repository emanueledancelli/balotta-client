import React from "react";
import Items from "./items";

const activeHeader = ({ location }) => {
  let l = location.pathname;
  let p = l.split("/");

  if (l === "/") {
    return <Items noIcons title="Best Today" />;
  }
  if (l.startsWith("/eventi")) {
    return <Items linkTo="/home" title={p[2]} />;
  }
  if (l.startsWith("/saved")) {
    return <Items linkTo="/favorite" title={p[1]} />;
  }
  if (l.startsWith("/shared")) {
    return <Items linkTo="/home" title={p[1]} />;
  } else {
    return null;
  }
};

export default activeHeader;
