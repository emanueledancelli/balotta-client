import React from "react";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import { HeaderContainer, HeaderItem } from "../style";
import { Link } from "react-router-dom";

const headerItems = ({ title, linkTo, noIcons }) => {
  if (noIcons) {
    return (
      <HeaderContainer center>
        <HeaderItem>{title}</HeaderItem>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <HeaderItem>
          <Link style={{ color: "rgba(255,255,255,0.5)" }} to={linkTo || ""}>
            <ChevronLeftIcon size={40} />
          </Link>
        </HeaderItem>
        <HeaderItem>{title}</HeaderItem>
        <HeaderItem>
          <Link
            style={{ color: "rgba(255,255,255,0.5)", opacity: 0 }}
            to={linkTo || ""}
          >
            <ChevronLeftIcon size={40} />
          </Link>
        </HeaderItem>
      </HeaderContainer>
    );
  }
};

export default headerItems;
