import styled from "@emotion/styled";
import { colors } from "../theme";

type Props = {
  /**
   * The text to display in the anchor
   */
  text: string;
  /**
   * The URL the anchor should navigate to
   */
  href: string;
};

/**
 * A simple anchor component
 */
export const Anchor = ({ text, href }: Props) => {
  return <AnchorBase href={href}>{text}</AnchorBase>;
};

const AnchorBase = styled.a({
  color: colors.BlueDress,

  "&:active": {
    color: colors.DenimBlue,
  },
});
