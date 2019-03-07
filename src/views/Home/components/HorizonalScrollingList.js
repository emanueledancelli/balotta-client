import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { mq } from "styles/mediaQueries";

const Image = styled.div`
  height: 150px;
  width: 150px;
  margin-right: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background: url(${props => props.thumb});
  background-size: cover;
  ${mq[2]} {
    height: 350px;
    width: 350px;
    margin-right: 25px;
    background: url(${props => props.medium});
  }
`;

const CardTitle = styled.p`
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 0.9em;
  margin-top: 0.6em;
  color: #666;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  width: 150px;
  margin-right: 10px;
`;

const Tag = styled.p`
  color: #cdcdcd;
  background-color: #222;
  padding: 1% 2%;
  font-size: 0.8em;
  margin: 0;
`;

const SquareContainer = styled.div`
  padding-left: 3%;
  white-space: nowrap;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HorizonalScrollingList = ({ name, list, hasTags }) => {
  const stuff = list.map((e, index) => {
    let thumbnail = e.acf.image.sizes.thumbnail;
    let medium = e.acf.image.sizes.medium_large;
    let title = e.title.rendered;
    let listName = name;

    return (
      <Link
        style={{ display: "inline-block" }}
        to={`/eventi/${listName}/${e.id}/${index}`}
        key={e.id}
      >
        <Container>
          <Image thumb={thumbnail} medium={medium}>
            {hasTags && <Tag>{e.acf.tags[0] || null}</Tag>}
          </Image>
          <CardTitle dangerouslySetInnerHTML={{ __html: title }} />
        </Container>
      </Link>
    );
  });

  return <SquareContainer>{stuff}</SquareContainer>;
};

export default HorizonalScrollingList;
