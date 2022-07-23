import { Select } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { ReactNode } from "react";

export interface SelectInputProps {
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  children: ReactNode;
  padding?: string;
  placeholder?: string;
  size?: SizeType;
  value?: any;
  onChange?: any;
  defaultValue?: any;
}

export const SelectInput = ({
  width,
  height,
  border,
  borderRadius,
  placeholder,
  padding,
  children,
  size,
  onChange,
  value,
  background,
  defaultValue,
}: SelectInputProps) => {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      size={size}
      value={value}
      placeholder={placeholder}
      style={{ width, height, border, borderRadius, padding, background }}
    >
      {children}
    </Select>
  );
};
