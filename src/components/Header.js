import React from "react";
import styled from "@emotion/styled";
import SortVariantIcon from "mdi-react/SortVariantIcon";

const Container = styled("div")`
  background-color: transparent;
  position: absolute;
  height: 7vh;
  min-width: 100vw;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
`;

const Filter = styled("p")`
  color: #ffffff;
  width: 50%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 3%;
`;

const FilterIcon = styled("p")`
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  font-weight: 300;
  padding-top: 2%;
  padding-right: 3%;
`;

const Header = props => {
  return (
    <Container>
      <Filter>All events this week</Filter>
      <FilterIcon>
        <SortVariantIcon />
      </FilterIcon>
    </Container>
  );
};

export default Header;
