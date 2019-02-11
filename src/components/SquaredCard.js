import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { mq } from "../style/mediaQueries";

const Image = styled.div`
  height: 160px;
  width: 160px;
  margin-right: 5px;
  display: inline-block;
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
  width: 160px;
  margin-right: 15px;
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const SquaredCard = props => {
  return (
    <Wrapper>
      <Link to={props.url}>
        <Container>
          <Image thumb={props.thumbnail} medium={props.medium} />
          <CardTitle dangerouslySetInnerHTML={{ __html: props.title }} />
        </Container>
      </Link>
    </Wrapper>
  );
};

export default SquaredCard;
