import { DatePicker } from "antd";
import moment from "moment";

interface DatePickerProps {
  onChange: any;
  value: any;
}

export const DataPicker = ({ onChange, value }: DatePickerProps) => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  return (
    <DatePicker value={value} onChange={onChange} format={dateFormatList} />
  );
};
