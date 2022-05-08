import { DatePicker } from "antd";

interface DatePickerProps {
  width?: string;
  onChange: any;
  value: any;
  height?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
}

export const DataPicker = ({
  width,
  onChange,
  height,
  value,
  background,
  borderRadius,
  border,
}: DatePickerProps) => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  return (
    <DatePicker
      value={value}
      size="large"
      style={{ width, height, borderRadius, background, border }}
      onChange={onChange}
      format={dateFormatList}
    />
  );
};
