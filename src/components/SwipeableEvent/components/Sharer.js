import React from "react";
import styled from "@emotion/styled";
import { Flex } from "components/Flex";
import {
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 35vh;
  width: 100%;
  padding: 3%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  z-index: 11;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  height: 65vh;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SharerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

const Sharer = ({ handleClick, id, title }) => {
  const shareUrl = `https://balotta.co/shared/single/${id}`;
  const quotes = { title };

  return (
    <SharerWrapper>
      <Shadow onClick={handleClick} />
      <Container>
        <Flex width="90%" margin="0 auto">
          <span style={{ color: "#222222", fontWeight: "500" }}>Share:</span>
        </Flex>
        <Flex
          direction="row"
          justify="space-between"
          width="90%"
          margin="0 auto"
        >
          <FacebookShareButton quote={quotes} url={shareUrl}>
            <FacebookIcon round size={50} />
          </FacebookShareButton>

          <TelegramShareButton quote={quotes} url={shareUrl}>
            <TelegramIcon round size={50} />
          </TelegramShareButton>

          <WhatsappShareButton quote={quotes} url={shareUrl}>
            <WhatsappIcon round size={50} />
          </WhatsappShareButton>

          <EmailShareButton quote={quotes} url={shareUrl}>
            <EmailIcon round size={50} />
          </EmailShareButton>
        </Flex>
      </Container>
    </SharerWrapper>
  );
};

export default Sharer;
