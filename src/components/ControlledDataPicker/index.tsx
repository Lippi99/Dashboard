import { Control, Controller, FieldError } from "react-hook-form";
import { DataPicker } from "../DataPicker";
import { Container, Error } from "./styles";

type ControllerProps = {
  control: Control<any>;
  name: string;
  error?: FieldError;
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
};

export const ControlledDataPicker = ({
  control,
  name,
  error,
  ...rest
}: ControllerProps) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <DataPicker value={value} {...rest} onChange={onChange} />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </Container>
  );
};
