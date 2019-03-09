import React from "react";
import HeaderItems from "./HeaderItems";

const ActiveHeader = ({ location }) => {
  let l = location.pathname;
  let p = l.split("/");

  if (l === "/") {
    return <HeaderItems noIcons title="Best Today" />;
  }
  if (l.startsWith("/eventi")) {
    return <HeaderItems linkTo="/home" title={p[2]} />;
  }
  if (l.startsWith("/saved")) {
    return <HeaderItems linkTo="/favorite" title={p[1]} />;
  }
  if (l.startsWith("/shared")) {
    return <HeaderItems linkTo="/home" title={p[1]} />;
  } else {
    return null;
  }
};

export default ActiveHeader;
