import React from "react";
import { UseFormRegister } from "react-hook-form";
import { Checkbox, FormControlLabel, FormGroup, FormHelperText } from "@mui/material";
import { CheckoxGroupStyle } from "./CheckoxGroupStyle";

type CheckboxOption = {
    value: string;
    label: string;
};

type CheckboxGroupInputProps = {
    id: string;
    options: CheckboxOption[];
    error: any;
    registerOptions?: any;
    label?: string;
    register: UseFormRegister<any>;
};

const CheckboxGroupInput: React.FC<CheckboxGroupInputProps> = ({
    id,
    options,
    error,
    registerOptions,
    label,
    register
}) => {

    return (
        <div style={CheckoxGroupStyle.questionConteiner}>
            {label && <label>{label}</label>}
            <FormGroup>
                {options.map((option, index) => (
                    <FormControlLabel
                        key={`option${index}`}
                        control={
                            <Checkbox
                                {...register(`${id}.${option.value}`, registerOptions)} 
                            />
                        }
                        label={option.label}
                    />
                ))}
            </FormGroup>
            {error && <FormHelperText error>{error.errors[id]?.message}</FormHelperText>}
        </div>
    );
};

export default CheckboxGroupInput;
