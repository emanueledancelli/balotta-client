import styled from "@emotion/styled";

/**
 * Sharer
 */

const Absolute = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
`;

export const ShareWrapper = styled(Absolute)`
  bottom: 0;
  left: 0;
  height: 100vh;
`;

export const Shadow = styled(Absolute)`
  top: 0;
  height: 65vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ShareDialog = styled(Absolute)`
  height: 35vh;
  padding: 3%;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  z-index: 11;
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
`;

export const ShareDialogBody = styled(Flex)`
  direction: row;
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
  height: auto;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  color: #222222;
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
