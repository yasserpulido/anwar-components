import styled from "@emotion/styled";
import { colors } from "../theme";

type Props = {
  /**
   * The content of the timeline.
   */
  children: React.ReactNode;
};

/**
 * Timeline component.
 */
export const Timeline = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.section({
  position: "relative",
  paddingLeft: "4rem",

  "& > article": {
    marginBottom: "1rem",
    minHeight: "200px",
  },

  "& > article:last-child": {
    marginBottom: 0,
  },

  "> article::before": {
    content: '" "',
    backgroundColor: colors.White,
    border: `1px solid ${colors.DoveGrey}`,
    display: "inline-block",
    position: "absolute",
    marginTop: "1rem",
    left: "1.3rem",
    width: "1.5rem",
    height: "1.5rem",
    zIndex: 1,
  },

  "::before": {
    content: '" "',
    backgroundColor: colors.DoveGrey,
    display: "inline-block",
    position: "absolute",
    left: "2rem",
    width: "1px",
    height: "100%",
    zIndex: 1,
  },
});
