import React from "react";
import { Section, Subtitle, Numbers } from "../style";
import ScrollingListContainer from "./scrollingListContainer";

const singleList = ({ list, name, title, isLast }) => {
  return (
    <Section isLast={isLast}>
      <Subtitle>
        {title} <Numbers>&sdot; {list.length}</Numbers>
      </Subtitle>
      <ScrollingListContainer hasTags list={list} name={name} />
    </Section>
  );
};

export default singleList;
