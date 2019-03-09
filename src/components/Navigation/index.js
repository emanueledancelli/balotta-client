import React from "react";
import HomeOutlineIcon from "mdi-react/HomeOutlineIcon";
import WhatshotIcon from "mdi-react/WhatshotIcon";
import FavoriteOutlineIcon from "mdi-react/FavoriteOutlineIcon";
import { NavLink } from "react-router-dom";
import { NavContainer, NavItem, NavItemName } from "./style";

class Navigation extends React.Component {
  state = {
    isScrolled: false
  };

  render() {
    const { location } = this.props;
    return (
      <NavContainer location={location}>
        <NavLink
          to="/"
          activeClassName={location.pathname === "/" ? "active-home" : "active"}
          exact
        >
          <NavItem>
            <WhatshotIcon />
            <NavItemName>Best</NavItemName>
          </NavItem>
        </NavLink>

        <NavLink to="/home" exact>
          <NavItem>
            <HomeOutlineIcon size={26} />
            <NavItemName>Home</NavItemName>
          </NavItem>
        </NavLink>

        <NavLink to="/favorite" activeClassName="active" exact>
          <NavItem>
            <FavoriteOutlineIcon size={22} />
            <NavItemName>Saved</NavItemName>
          </NavItem>
        </NavLink>
      </NavContainer>
    );
  }
}

export default Navigation;
