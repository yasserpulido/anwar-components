import React, { useMemo } from "react";

import styled from "@emotion/styled";

type Props = {
  /**
   * The label to display next to the checkbox
   */
  label: string;
  /**
   * The name of the checkbox
   */
  name: string;
  /**
   * The value of the checkbox
   */
  value: boolean;
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The function to call when the checkbox is changed
   */
  onChange: (value: boolean) => void;
};

/**
 * A simple checkbox component
 */
const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ label, name, value, disabled = false, onChange, ...props }, ref) => {
    const checked = useMemo(() => value, [value]);

    return (
      <Container>
        <input
          id={name}
          name={name}
          type="checkbox"
          disabled={disabled}
          ref={ref}
          checked={checked}
          onChange={(e) => onChange(e.currentTarget.checked)}
          {...props}
        />
        <label htmlFor={name}>{label}</label>
      </Container>
    );
  }
);

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default Checkbox;
