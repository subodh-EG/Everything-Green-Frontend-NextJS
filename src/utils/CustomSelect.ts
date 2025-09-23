import { GroupBase, StylesConfig } from "react-select";

type OptionType = {
  label: string;
  value: string;
};

export const customStyles: StylesConfig<
  OptionType,
  false,
  GroupBase<OptionType>
> = {
  control: (provided, state) => ({
    ...provided,
    padding: "6px 12px",
    borderColor: "#1b9876",
    boxShadow: state.isFocused ? "0 0 0 2px rgba(27, 152, 118, 0.5)" : "none",
    "&:hover": {
      borderColor: "#1b9876",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#1b9876" // Selected option background
      : state.isFocused
      ? "#e6f7f3" // Hovered (focused) option background
      : "white",
    color: state.isSelected
      ? "white" // Text color for selected
      : "#000", // Regular text
    cursor: "pointer",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#000", // Selected value color
  }),
};
