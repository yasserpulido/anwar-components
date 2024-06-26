import React from "react";

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
   * The value of the input
   */
  value?: string | number;
  /**
   * The error message to display
   */
  errors?: string;
  /**
   * The type of the input
   */
  type?: "text" | "date" | "password" | "search" | "time";
  /**
   * The placeholder for the input
   */
  placeholder?: string;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * The function to call when the input changes
   */
  onChange: (value: string) => void;
};

/**
 * A simple input component
 */
export const Input = ({
  label,
  name,
  value,
  errors = "",
  type = "text",
  placeholder = "Type here",
  disabled = false,
  onChange,
  ...props
}: Props) => {
  const hasDate = value !== "";

  return (
    <div>
      <FormGroup>
        <Label htmlFor={name}>{label}:</Label>
        <InputBase
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={(e) => onChange(e.currentTarget.value)}
          value={value}
          hasDate={hasDate}
          disabled={disabled}
          errors={errors !== ""}
          {...props}
        />
      </FormGroup>
      {errors !== "" && (
        <Error>
          <ErrorIcon>
            <Alert size="small" />
          </ErrorIcon>
          <ErrorMessage>{errors}</ErrorMessage>
        </Error>
      )}
    </div>
  );
};

const FormGroup = styled.div({
  marginBottom: "0.2rem",
});

const Label = styled.label({
  display: "block",
  marginBottom: "0.2rem",
});

type InputBaseProps = {
  hasDate: boolean;
  errors: boolean;
};

const InputBase = styled.input<InputBaseProps>(({ hasDate, errors }) => ({
  border: `1px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderBottom: `2px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderRadius: 0,
  fontSize: "1rem",
  padding: "0.2rem",
  width: "100%",
  fontWeight: fontWeight.regular,
  color: hasDate ? colors.Black : colors.FrenchGrey,

  ":focus": {
    outline: `2px solid ${colors.DenimBlue}`,
  },

  "::placeholder": {
    color: colors.FrenchGrey,
    opacity: 1,
    fontSize: "0.8rem",
  },

  ":disabled": {
    border: `1px solid ${colors.FrenchGrey}`,
    borderBottom: `2px solid ${colors.FrenchGrey}`,
    color: colors.FrenchGrey,
  },
}));

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
