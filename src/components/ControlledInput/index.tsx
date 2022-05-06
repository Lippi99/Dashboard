import { Control, Controller, FieldError } from "react-hook-form";
import { InputField, InputProps } from "../Input";

type ControllerProps = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export const ControlledInput = ({
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
          <InputField onChange={onChange} value={value} {...rest} />
        )}
      />
    </>
  );
};
