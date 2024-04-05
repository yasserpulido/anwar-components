import { ChangeEvent, Ref, forwardRef, useEffect, useState } from "react";

import styled from "@emotion/styled";
import { Alert } from "grommet-icons";

import { colors, fontWeight } from "../theme";

export type Option = {
  id: string;
  name: string;
};

type Props = {
  label: string;
  name: string;
  options: Array<Option>;
  errors?: string;
  value?: Option[] | Option;
  multiple?: boolean;
  onChange: (value: Option[] | Option) => void;
};

export const Dropdown = forwardRef(
  (
    {
      label,
      name,
      options,
      value,
      errors = "",
      multiple = false,
      onChange,
    }: Props,
    ref: Ref<HTMLSelectElement>
  ) => {
    const [selectedOptions, setSelectedOptions] = useState<Option[] | Option>(
      value ?? []
    );

    useEffect(() => {
      setSelectedOptions(value ?? []);
    }, [value, options]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      if (!multiple) {
        const selected = options.find(
          (option) => option.id.toString() === e.currentTarget.value
        );

        if (selected) {
          setSelectedOptions(selected);
          onChange(selected);
        }
        return;
      }

      const values = Array.from(
        e.currentTarget.selectedOptions,
        (option) => option.value
      );

      const selectedOptions = options
        .filter((option) => values.includes(option.id.toString()))
        .map((option) => ({ ...option, id: option.id.toString() }));

      setSelectedOptions(selectedOptions);
      onChange(selectedOptions);
    };

    return (
      <FormGroup>
        <Label htmlFor={name}>{label}:</Label>
        <Select
          value={
            multiple
              ? ((selectedOptions as Option[]) ?? [])?.map(
                  (option) => option.id
                )
              : (selectedOptions as Option).id
          }
          onChange={handleChange}
          multiple={multiple}
          errors={errors !== ""}
          ref={ref}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id.toString()}>
              {option.name}
            </option>
          ))}
        </Select>
        {errors !== "" && (
          <Error>
            <ErrorIcon>
              <Alert size="small" />
            </ErrorIcon>
            <ErrorMessage>{errors}</ErrorMessage>
          </Error>
        )}
      </FormGroup>
    );
  }
);

Dropdown.displayName = "Dropdown";

const FormGroup = styled.div({
  marginBottom: "0.2rem",
});

const Label = styled.label({
  display: "block",
  marginBottom: "0.2rem",
  fontSize: "1rem",
});

type SelectProps = {
  errors: boolean;
};

const Select = styled.select<SelectProps>(({ errors }) => ({
  border: `1px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderBottom: `2px solid ${errors ? colors.PersianRed : colors.Black}`,
  borderRadius: 0,
  fontSize: "1rem",
  padding: "0.2rem",
  width: "100%",
  fontWeight: fontWeight.regular,
  color: colors.Black,
  background: colors.White,
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
