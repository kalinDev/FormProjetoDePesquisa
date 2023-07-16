import { Controller, Control, RegisterOptions, FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';
import { RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';
import { RadioButtonGroupStyle } from './RadioButtonGroupStyle';

interface Option {
    value: string;
    label: string;
}

interface RadioButtonGroupProps {
    control: Control;
    name: string;
    options: Option[];
    registerOptions?: RegisterOptions;
    error:FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export function RadioButtonGroup({ control, name, options, registerOptions, error }: RadioButtonGroupProps) {
    return (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue=""
                rules={registerOptions}
                render={({ field }) => (
                    <RadioGroup
                        {...field}
                        style={RadioButtonGroupStyle.container}
                    >
                        {options.map((option) => (
                            <FormControlLabel
                                style={RadioButtonGroupStyle.input}
                                key={option.value}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                            />
                        ))}
                    </RadioGroup>
                )}
            />
            {error && (
                <FormHelperText error>{error.message?.toString()}</FormHelperText>
            )}
        </>
    );
}
