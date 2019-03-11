import React from "react";
import { Link } from "react-router-dom";
import { HorizontalContainer, Image, CardTitle, Tag } from "../style";

const scrollingListItem = ({
  title,
  hasTags,
  tags,
  listName,
  index,
  id,
  thumbnail,
  medium
}) => {
  const iw = window.innerWidth;
  return (
    <Link
      style={{ display: "inline-block" }}
      to={iw > 940 ? `/single/${id}` : `/eventi/${listName}/${id}/${index}`}
      key={id}
    >
      <HorizontalContainer>
        <Image thumb={thumbnail} medium={medium}>
          {hasTags && <Tag>{tags[0] || null}</Tag>}
        </Image>
        <CardTitle dangerouslySetInnerHTML={{ __html: title }} />
      </HorizontalContainer>
    </Link>
  );
};

export default scrollingListItem;
