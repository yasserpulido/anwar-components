import React from "react";

import styled from "@emotion/styled";

import { colors } from "../theme";

type Props = {
  /**
   * The content of the workshop.
   */
  children: React.ReactNode;
};

/**
 * Workshop is a container for the content of a workshop.
 */
const Workshop = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div({
  border: `1px solid ${colors.Black}`,
  padding: "1rem",
});

export default Workshop;
