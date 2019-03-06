import React from "react";
import styled from "@emotion/styled";
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
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
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

const shareUrl = "https://balotta.co";
const title = "balotta";

const Sharer = ({ handleClick }) => {
  return (
    <SharerWrapper>
      <Shadow onClick={handleClick} />
      <Container>
        <FacebookShareButton quote={title} url={shareUrl}>
          <FacebookIcon size={50} />
        </FacebookShareButton>

        <TelegramShareButton quote={title} url={shareUrl}>
          <TelegramIcon size={50} />
        </TelegramShareButton>

        <WhatsappShareButton quote={title} url={shareUrl}>
          <WhatsappIcon size={50} />
        </WhatsappShareButton>

        <EmailShareButton quote={title} url={shareUrl}>
          <EmailIcon size={50} />
        </EmailShareButton>
      </Container>
    </SharerWrapper>
  );
};

export default Sharer;
