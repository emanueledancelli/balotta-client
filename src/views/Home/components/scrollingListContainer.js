import React from "react";
import ScrollingListItem from "./scrollingListItem";
import { SquareContainer } from "../style";

const scrollingListContainer = ({ name, list, hasTags }) => {
  const stuff = list.map((e, index) => {
    let thumbnail = e.acf.image.sizes.thumbnail;
    let medium = e.acf.image.sizes.medium_large;
    let title = e.title.rendered;
    let listName = name;

    return (
      <ScrollingListItem
        key={e.id}
        listName={listName}
        id={e.id}
        index={index}
        thumbnail={thumbnail}
        medium={medium}
        tags={e.acf.tags}
        hasTags={hasTags}
        title={title}
      />
    );
  });

  return <SquareContainer>{stuff}</SquareContainer>;
};

export default scrollingListContainer;
