import { Select } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { ReactNode } from "react";
import { Container } from "./styles";

export interface SelectInputProps {
  width?: string;
  height?: string;
  border?: string;
  color?: string;
  borderRadius?: string;
  backgroundColor?: string;
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
  color,
  borderRadius,
  placeholder,
  padding,
  children,
  size,
  onChange,
  value,
  backgroundColor,
  defaultValue,
}: SelectInputProps) => {
  return (
    <Container
      color={color!}
      backgroundColor={backgroundColor!}
      border={border!}
    >
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        size={size}
        value={value}
        placeholder={placeholder}
        style={{ width, height, borderRadius, padding }}
      >
        {children}
      </Select>
    </Container>
  );
};
