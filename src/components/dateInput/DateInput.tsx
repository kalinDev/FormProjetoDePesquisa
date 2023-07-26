import { DateInputStyle } from "./DateInputStyle";
import { FieldError, FieldErrorsImpl, Merge, RegisterOptions, UseFormRegister } from 'react-hook-form';


interface DateInputProps {
  id: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  placeholder?: string;
}

export function DateInput({ id, error, register, registerOptions, placeholder }: DateInputProps) {
  return (
    <div style={DateInputStyle.questionConteiner}>
      <input
        style={DateInputStyle.input}
        type="date"
        id={id}
        {...register(id, registerOptions)}
        placeholder={placeholder}
      />
      {error && <p style={DateInputStyle.errorMessage}>{error?.message?.toString()}</p>}
    </div>
  );
}