import React from "react";
import {
  ShareWrapper,
  Shadow,
  ShareDialog,
  ShareDialogHeader,
  ShareDialogBody
} from "../style";
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

const Sharer = ({ handleClick, id, title }) => {
  const shareUrl = `https://balotta.co/shared/single/${id}`;

  return (
    <ShareWrapper>
      <Shadow onClick={handleClick} />
      <ShareDialog>
        <ShareDialogHeader>
          <span style={{ color: "#222222", fontWeight: "500" }}>Share:</span>
        </ShareDialogHeader>
        <ShareDialogBody>
          <FacebookShareButton title={title} url={shareUrl}>
            <FacebookIcon round size={50} />
          </FacebookShareButton>

          <TelegramShareButton title={title} url={shareUrl}>
            <TelegramIcon round size={50} />
          </TelegramShareButton>

          <WhatsappShareButton title={title} url={shareUrl}>
            <WhatsappIcon round size={50} />
          </WhatsappShareButton>

          <EmailShareButton title={title} url={shareUrl}>
            <EmailIcon round size={50} />
          </EmailShareButton>
        </ShareDialogBody>
      </ShareDialog>
    </ShareWrapper>
  );
};

export default Sharer;
