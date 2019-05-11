import styled from "@emotion/styled";
import { mq } from "styles";
/**
 * Sharer
 */

const Absolute = styled.div`
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  ${mq[2]} {
    display: flex;
    flex-direction: center;
    align-items: center;
    bottom: 0;
  }
`;

export const DesktopSharer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  margin-right: 150px;
`;

export const ShareWrapper = styled(Absolute)`
  height: 100vh;
  bottom: 0;
  ${mq[2]} {
    display: flex;
    flex-direction: center;
    align-items: center;
    top: 0;
  }
`;

export const Shadow = styled(Absolute)`
  height: 65vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ShareDialog = styled(Absolute)`
  height: 35vh;
  bottom: 0;
  display: flex;
  padding: 3%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  z-index: 11;
  ${mq[2]} {
    max-width: 940px;
    margin: 0 auto;
  }
`;

const Flex = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
`;

export const ShareDialogHeader = styled(Flex)`
  justify-content: flex-start;
  align-items: center;
  margin-top: -25px;
`;

export const ShareDialogBody = styled(Flex)`
  direction: row;
  align-items: flex-start;
  margin-top: 20px;
  justify-content: space-between;
`;

/**
 * description
 */

export const DescrWrapper = styled.div`
  height: 100vh;
  color: #222222;
  background-color: white;
  box-sizing: border-box;
  word-break: break-word;
  & a {
    color: #111;
    text-decoration: underline;
  }
`;

export const DescrContainer = styled.div`
  padding: 3%;
`;

const ResetH1 = styled.h1`
  padding: 0;
  margin: 0;
`;

export const Title = styled(ResetH1)`
  font-size: 1.5rem;
`;

export const Hero = styled.div`
  padding: 3%;
  margin-top: 10vh;
  display: flex;
`;

export const Label = styled.span`
  font-weight: 300;
  font-size: 0.8rem;
  opacity: 0.5;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
`;

export const Date = styled.span`
  font-weight: ${props => (props.isNumber ? 700 : 500)};
  font-size: ${props => (props.isNumber ? "1.6rem" : "0.9rem")};
  text-transform: capitalize;
`;

export const InfoSectionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  flex: initial;
  margin: 0;
  height: auto;
  padding: 0;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InfoSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3%;
  padding-bottom: 7vh;
  box-sizing: border-box;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
`;
