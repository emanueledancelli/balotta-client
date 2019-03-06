import React from "react";
import styled from "@emotion/styled";
import { Title } from "components/Title";

/**
 * TODO:
 * get props from parent (SingleScrolling/Card)
 * title,
 * place,
 * start_date,
 * start_time,
 * end_time,
 * description
 *
 * then shows them, gets called with a loadable.
 */

const Container = styled.div`
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const DescriptionContainer = styled("div")`
  width: 100vw;
  min-height: 100vh;
  padding: 3%;
  color: #222;
  background-color: white;
  line-height: 160%;
  font-size: 0.9em;
  transition: all 200ms ease-out;
  box-sizing: border-box;
  word-break: break-word;
  z-index: 9;
  & a {
    color: #666;
    text-decoration: underline;
  }
`;

const createDescription = description => {
  return { __html: description };
};

const Description = ({
  title,
  // place,
  // start_time,
  // start_date,
  // end_time,
  description
}) => {
  const descr = createDescription(description);
  return (
    <Container>
      <DescriptionContainer>
        <div dangerouslySetInnerHTML={descr} />
      </DescriptionContainer>
    </Container>
  );
};

export default Description;
