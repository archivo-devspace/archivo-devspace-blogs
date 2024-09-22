/* eslint-disable */

const commonColor = {
  success: "#00C88C",
  warnning: "#8000C8",
  danger: "#C8001A",
  gray: "#90949c"
};

const light = {
  primary: "#3162ff",
  secondary: "#2f343a",
  tertiary: "#ffffff",
  primaryText: "#3162ff",
  secondaryText: "#2f343a",
  tertiaryText: "#ffffff",
  ...commonColor,
};

const dark = {
  primary: "#3162ff",
  secondary: "#2f343a",
  tertiary: "#000000",
  primaryText: "#3162ff",
  secondaryText: "#2f343a",
  tertiaryText: "#ffffff",
  ...commonColor,
};

export default { light, dark };
