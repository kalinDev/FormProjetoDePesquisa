import { FormControl, TextField } from '@mui/material';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { InputStyle } from './InputStyle.tsx'

type InputType = 'text' | 'number';

interface InputProps {
  id: string;
  label: string;
  type: InputType;
  questionNumber?: string;
  error: any;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  placeholder?: string;
}

export function Input({
  id,
  label,
  type,
  questionNumber,
  error,
  register,
  registerOptions,
  placeholder,
}: InputProps) {

  return (
    <div style={InputStyle.questionConteiner}>
      <p>
        <strong>{questionNumber ? `${questionNumber}.`: "" }</strong>
        {label}
      </p>
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
          helperText={error?.message}
        />
      </FormControl>
    </div>
  );
}
