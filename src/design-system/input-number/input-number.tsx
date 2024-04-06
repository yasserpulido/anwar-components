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
   * The minimum value of the input
   */
  min?: number;
  /**
   * The maximum value of the input
   */
  max?: number;
  /**
   * The minimum length of the input
   */
  minLength?: number;
  /**
   * The maximum length of the input
   */
  maxLength?: number;
  /**
   * The step value of the input
   */
  step?: number;
  /**
   * The value of the input
   */
  value?: number;
  /**
   * The error message to display
   */
  errors?: string;
  /**
   * The placeholder text
   */
  placeholder?: string;
  /**
   * Make the input disabled
   */
  disabled?: boolean;
  /**
   * The onChange event handler
   */
  onChange: (value: string) => void;
};

/**
 * A simple input number component
 */
export const InputNumber = forwardRef(
  (
    {
      label,
      name,
      placeholder = "Type here",
      errors = "",
      onChange,
      ...props
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <Container>
        <FormGroup>
          <Label htmlFor={name}>{label}:</Label>
          <InputBase
            id={name}
            name={name}
            placeholder={placeholder}
            type="number"
            onChange={(e) => onChange(e.target.value)}
            errors={errors !== ""}
            ref={ref}
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
      </Container>
    );
  }
);

InputNumber.displayName = "InputNumber";

const Container = styled.div({});

const FormGroup = styled.div({
  marginBottom: "0.2rem",
});

const Label = styled.label({
  display: "block",
  marginBottom: "0.2rem",
});

type InputBaseProps = {
  errors: boolean;
};

const InputBase = styled.input<InputBaseProps>(({ errors }) => ({
  border: `1px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderBottom: `2px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderRadius: 0,
  fontSize: "1.2em",
  padding: "0",
  paddingLeft: "0.2rem",
  lineHeight: "1.5rem",
  width: "100%",
  fontWeight: fontWeight.regular,

  ":focus": {
    outline: `2px solid ${colors.DenimBlue}`,
  },

  "::placeholder": {
    color: colors.FrenchGrey,
    opacity: 1,
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
