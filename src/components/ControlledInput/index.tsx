import { Control, Controller, FieldError } from "react-hook-form";
import { InputField, InputProps } from "../Input";
import { Container, Error } from "./styles";

type ControllerProps = InputProps & {
  control: Control<any>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
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
    <Container>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <InputField
            autoComplete="on"
            onChange={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </Container>
  );
};
