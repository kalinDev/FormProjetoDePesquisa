import { FormControl, TextField } from '@mui/material';
import { FieldError,  FieldErrorsImpl, Merge, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { InputStyle } from './InputStyle.tsx'

type InputType = 'text' | 'number';

interface InputProps {
  id: string;
  type: InputType;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  placeholder?: string;
}

export function Input({
  id,
  type,
  error,
  register,
  registerOptions,
  placeholder,
}: InputProps) {

  return (
    <div style={InputStyle.questionConteiner}>
      <FormControl error={Boolean(error)} fullWidth>
        <TextField
          error={Boolean(error)}
          placeholder={placeholder}
          label={error ?
            placeholder ? `Informe - ${placeholder}` : "Erro"
            : placeholder}
          id={id}
          type={type}
          sx={InputStyle.input}
          {...register(id, registerOptions)}
          InputProps={ type == "number" ? { inputProps: { min: 0 } }: {}}
          helperText={error?.message?.toString()}
        />
      </FormControl>
    </div>
  );
}
