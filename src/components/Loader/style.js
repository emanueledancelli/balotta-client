import { colors } from "styles";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const flipY = keyframes`
  0% { transform: rotateY(0deg); }
  25% { transform: rotateY(360deg); }
`;

const flipX = keyframes`
  from { transform: rotateX(0deg); }
  to { transform: rotateX(360deg); }
`;

const fadeOut = keyframes`
from { opacity: 1; transform: scale(1)}
to { opacity: 0; transform: scale(0.5)}
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const LoaderText = styled.p`
  font-weight: 900;
  letter-spacing: -1px;
  color: ${colors.black};
  font-size: 2em;
  animation: ${flipY} 800ms ease-out, ${flipX} 800ms ease-out,
    ${fadeOut} 800ms ease-out;
  animation-delay: 0s, 800ms, 1600ms;
`;
