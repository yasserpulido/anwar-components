import styled from "@emotion/styled";

type Props = {
  /**
   * The text to display in the footer
   */
  text: string;
};

/**
 * A simple footer component
 */
export const Footerbar = ({ text }: Props) => {
  return (
    <Footer>
      <p>{text}</p>
    </Footer>
  );
};

const Footer = styled.footer({
  textAlign: "center",
  padding: "1rem",
  marginTop: "auto",
});
