import React from "react";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import { HeaderContainer, HeaderTitle } from "../style";
import { Link } from "react-router-dom";

const headerItems = ({ title, linkTo, noIcons }) => {
  if (noIcons) {
    return (
      <HeaderContainer center>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <Link style={{ color: "rgba(255,255,255,0.5)" }} to={linkTo || ""}>
          <ChevronLeftIcon size={40} />
        </Link>
        <HeaderTitle>{title}</HeaderTitle>
        <Link
          style={{ color: "rgba(255,255,255,0.5)", opacity: 0 }}
          to={linkTo || ""}
        >
          <ChevronLeftIcon size={40} />
        </Link>
      </HeaderContainer>
    );
  }
};

export default headerItems;
