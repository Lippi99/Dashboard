import { Select } from "antd";
import { ReactNode } from "react";

interface OptionSelectProps {
  children: ReactNode;
  value?: string | number;
}

export const OptionSelect = ({ children, value }: OptionSelectProps) => {
  return <Select.Option value={value}>{children}</Select.Option>;
};
