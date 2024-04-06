import React, { Ref, forwardRef } from "react";

import styled from "@emotion/styled";
import { Alert } from "grommet-icons";

import { colors } from "../theme/colors";
import { fontWeight } from "../theme";

type Props = {
  /**
   * The label for the input
   */
  label: string;
  /**
   * The name of the input
   */
  name: string;
  /**
   * Make the input disabled
   */
  disabled?: boolean;
  /**
   * The error message to display
   */
  errors?: string;
  /**
   * The onChange event handler
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * The onChange event handler
   */
  onChange: (file: File | null) => void;
};

/**
 * A simple input file component
 */
export const InputFile = forwardRef(
  (
    { label = "files", name, onChange, errors = "", ...props }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <Container>
        <Label htmlFor={name}>{label}:</Label>
        <InputBase
          id={name}
          name={name}
          type="file"
          accept="image/jpeg"
          ref={ref}
          onChange={(e) => {
            const file = e.target.files?.item(0);
            if (file) {
              onChange(file);
            } else {
              onChange(null);
            }
          }}
          {...props}
        />
        {errors !== "" && (
          <Error>
            <ErrorIcon>
              <Alert size="small" />
            </ErrorIcon>
            <ErrorMessage>{errors}</ErrorMessage>
          </Error>
        )}
      </Container>
    );
  }
);

InputFile.displayName = "InputFile";

const Container = styled.div({});

const Label = styled.label({
  display: "block",
  marginBottom: "0.2rem",
});

const InputBase = styled.input({
  fontWeight: fontWeight.regular,
  border: `1px solid ${colors.Black}`,
  borderBottom: `2px solid ${colors.Black}`,

  padding: "0.5rem",
  backgroundColor: colors.White,
  width: "100%",

  ":focus": {
    outline: `2px solid ${colors.DenimBlue}`,
  },

  ":disabled": {
    border: `1px solid ${colors.FrenchGrey}`,
    borderBottom: `2px solid ${colors.FrenchGrey}`,
    color: colors.FrenchGrey,
  },

  "::file-selector-button": {
    backgroundColor: colors.BlueDress,
    border: "none",
    color: colors.White,
    cursor: "pointer",
    display: "inline-block",
    fontFamily: "inherit",
    fontSize: "1rem",
    minWidth: "6rem",
    padding: "0.2rem 0.6rem",
    textDecoration: "none",
  },
});

const Error = styled.div({
  display: "flex",
  alignItems: "center",
});

const ErrorIcon = styled.div({
  "& svg, path": {
    fontSize: "1rem",
    marginRight: "0.4rem",
    stroke: colors.PersianRed,
  },
});

const ErrorMessage = styled.span({
  color: colors.PersianRed,
  fontSize: "0.8rem",
});
