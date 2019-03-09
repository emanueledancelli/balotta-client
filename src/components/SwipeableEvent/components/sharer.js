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

/**
 * FIX:
 * Check console log
 * quotes gets passed an object but needs a string
 */

const Sharer = ({ handleClick, id, title }) => {
  const shareUrl = `https://balotta.co/shared/single/${id}`;
  const quotes = { title };

  return (
    <ShareWrapper>
      <Shadow onClick={handleClick} />
      <ShareDialog>
        <ShareDialogHeader>
          <span style={{ color: "#222222", fontWeight: "500" }}>Share:</span>
        </ShareDialogHeader>
        <ShareDialogBody>
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
        </ShareDialogBody>
      </ShareDialog>
    </ShareWrapper>
  );
};

export default Sharer;
