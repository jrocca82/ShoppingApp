import React from "react";
import BaseInput from "./BaseInput";

type TextInputProps = {
    value?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    label: string;
}

const TextInput = ({value, name, onChange, placeholder, label} :TextInputProps) => {
    return (
        <BaseInput type="text" value={value} name={name} onChange={onChange} placeholder={placeholder} label={label}/>
    )
}

export default TextInput;