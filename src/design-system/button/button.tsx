import styled from "@emotion/styled";

import { colors } from "../theme/colors";

type Props = {
  /**
   * The text to display on the button
   */
  text: string;
  /**
   * The variant of the button
   */
  variant:
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "link"
    | "link-danger";
  /**
   * Whether the button is disabled
   * @default false
   * */
  disabled?: boolean;
  /**
   * The type of the button
   * @default "button"
   */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  /**
   * The size of the button
   * @default "medium"
   */
  size?: "medium" | "large";
  /**
   * The function to call when the button is clicked
   */
  onClick?: () => void;
};

/**
 * A button component
 */
const Button = ({
  text,
  variant,
  disabled = false,
  type = "button",
  size = "medium",
  onClick,
}: Props) => {
  return (
    <BaseButton
      variant={variant}
      disabled={disabled}
      type={type}
      size={size}
      onClick={onClick}
    >
      {text}
    </BaseButton>
  );
};

type BaseButtonProps = {
  variant: string;
  size: string;
};

const BaseButton = styled.button<BaseButtonProps>(({ variant, size }) => ({
  backgroundColor:
    variant === "primary"
      ? colors.BlueDress
      : variant === "danger"
        ? colors.PersianRed
        : variant === "warning"
          ? colors.ArylideYellow
          : variant === "success"
            ? colors.GreenBlue
            : "transparent",
  border: "none",
  color:
    variant === "link"
      ? colors.BlueDress
      : variant === "link-danger"
        ? colors.PersianRed
        : variant === "warning"
          ? colors.Black
          : colors.White,
  cursor: "pointer",
  display: "inline-block",
  fontFamily: "inherit",
  fontSize: "1rem",
  padding:
    variant === "link" || variant === "link-danger" ? 0 : "0.2rem 0.6rem",
  minWidth: variant === "link" || variant === "link-danger" ? 0 : "6rem",
  width: size === "large" ? "100%" : "auto",
  textDecoration:
    variant === "link" || variant === "link-danger" ? "underline" : "none",

  ":focus": {
    outline: `2px solid ${colors.DenimBlue}`,
  },

  "&:active": {
    backgroundColor:
      variant === "primary"
        ? colors.DenimBlue
        : variant === "danger"
          ? colors.Salmon
          : variant === "warning"
            ? colors.LightTan
            : variant === "link" || variant === "link-danger"
              ? "transparent"
              : colors.LightGreenishBlue,
    color:
      variant === "warning"
        ? colors.Black
        : variant === "link"
          ? colors.DenimBlue
          : variant === "link-danger"
            ? colors.Salmon
            : colors.White,

    outline: 0,
  },

  "&:disabled": {
    backgroundColor:
      variant === "link" || variant === "link-danger"
        ? "none"
        : colors.FrenchGrey,
    color:
      variant === "link" || variant === "link-danger"
        ? colors.FrenchGrey
        : colors.White,
  },
}));
export default Button;
