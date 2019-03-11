import { css } from "@emotion/core";
import { colors } from "./colors";

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900");

  h1,
  p,
  span,
  h2 {
    font-family: "Roboto", sans-serif;
  }

  .active {
    color: ${colors.black};
  }

  .active svg {
    color: ${colors.black};
    opacity: 1;
  }

  .active span {
    color: ${colors.black};
  }

  .active-home {
    color: ${colors.pureWhite};
  }

  .active-home svg {
    color: ${colors.pureWhite};
    opacity: 1;
  }

  .active-desktop span {
    color: ${colors.red};
  }

  .active-desktop {
    color: ${colors.red};
  }

  .active-desktop p {
    color: ${colors.black};
  }

  a {
    text-decoration: none;
  }
`;
