import styled from "@emotion/styled";
import { Alert } from "grommet-icons";

import { colors, fontWeight } from "../theme";

type Props = {
  /**
   * The label of the textfield
   */
  label: string;
  /**
   * The name of the textfield
   */
  name: string;
  /**
   * The number of rows for the textfield
   */
  rows?: number;
  /**
   * The value of the textfield
   */
  value?: string | number;
  /**
   * The errors of the textfield
   */
  errors?: string;
  /**
   * The placeholder of the textfield
   */
  placeholder?: string;
  /**
   * The disabled state of the textfield
   */
  disabled?: boolean;
  /**
   * The onChange event of the textfield
   */
  onChange: (value: string) => void;
};

/**
 * The Textfield component is used to display a textfield with a label and errors.
 */
export const Textfield = ({
  label,
  name,
  value,
  rows = 2,
  errors = "",
  placeholder = "Type here",
  disabled = false,
  onChange,
  ...props
}: Props) => {
  return (
    <div>
      <FormGroup>
        <Label htmlFor={name}>{label}:</Label>
        <TextfieldBase
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e.currentTarget.value)}
          value={value}
          disabled={disabled}
          errors={errors !== ""}
          rows={rows >= 2 ? rows : 2}
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

type FormGroupProps = {
  errors: boolean;
};

const TextfieldBase = styled.textarea<FormGroupProps>(({ errors }) => ({
  resize: "none",
  border: `1px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderBottom: `2px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderRadius: 0,
  fontSize: "1rem",
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
