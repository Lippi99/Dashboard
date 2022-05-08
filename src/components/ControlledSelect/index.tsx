import { Control, Controller, FieldError } from "react-hook-form";
import { SelectInput, SelectInputProps } from "../Select";
import { Error } from "./styles";

type ControllerProps = SelectInputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export const ControlledSelect = ({
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
          <SelectInput value={value} {...rest} onChange={onChange} />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </>
  );
};
