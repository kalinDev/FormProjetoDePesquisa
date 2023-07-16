import { RadioGroup, FormHelperText, FormControlLabel, Radio } from '@mui/material';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { RadioInputStyle } from './RadioInputStyle';

interface Radio {
    label: string;
    value: string | 'number';
}

interface RadioInputProps {
    id: string;
    label: string;
    questionNumber: string;
    error: any;
    register: UseFormRegister<any>;
    registerOptions?: RegisterOptions;
    radios: Radio[]
}

export function RadioInput({
    id,
    label,
    questionNumber,
    radios,
    error,
    register,
    registerOptions,
}: RadioInputProps) {
    return (
        <div style={RadioInputStyle.questionConteiner}>
            <p>
                <strong>{questionNumber}. </strong>
                {label}
            </p>
            <RadioGroup name={id} aria-label={id} id={id}
                style={RadioInputStyle.input}
            >

                {radios.map((radio) => {
                    return (
                        <FormControlLabel
                            key={id+radio.label}
                            value={radio.value}
                            control={<Radio/>}
                            label={radio.label}
                            {...register(id, registerOptions)}
                        />
                    )
                })}
            </RadioGroup>
            {error && (
                <FormHelperText error>{error.message?.toString()}</FormHelperText>
            )}
        </div>
    );
}
