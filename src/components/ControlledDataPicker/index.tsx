import { DatePicker } from "antd";
import { Control, Controller, FieldError } from "react-hook-form";
import { DataPicker } from "../DataPicker";
import { InputProps } from "../Input";

type ControllerProps = {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export const ControlledDataPicker = ({
  control,
  name,
  error,
  ...rest
}: ControllerProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DataPicker value={value} {...rest} onChange={onChange} />
        )}
      />
    </>
  );
};
