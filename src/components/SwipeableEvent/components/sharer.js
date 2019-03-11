import React from "react";
import {
  ShareWrapper,
  Shadow,
  ShareDialog,
  ShareDialogHeader,
  ShareDialogBody,
  ShareAppName
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
            <ShareAppName>Facebook</ShareAppName>
          </FacebookShareButton>

          <TelegramShareButton title={title} url={shareUrl}>
            <TelegramIcon round size={50} />
            <ShareAppName>Telegram</ShareAppName>
          </TelegramShareButton>

          <WhatsappShareButton title={title} url={shareUrl}>
            <WhatsappIcon round size={50} />
            <ShareAppName>Whatsapp</ShareAppName>
          </WhatsappShareButton>

          <EmailShareButton title={title} url={shareUrl}>
            <EmailIcon round size={50} />
            <ShareAppName>Email</ShareAppName>
          </EmailShareButton>
        </ShareDialogBody>
      </ShareDialog>
    </ShareWrapper>
  );
};

export default Sharer;
