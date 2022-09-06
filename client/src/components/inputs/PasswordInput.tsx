import React from "react";
import BaseInput from "./BaseInput";

type PasswordInputProps = {
    value?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    label: string
}

const PasswordInput = ({value, name, onChange, placeholder, label}: PasswordInputProps) => {
    return (
        <BaseInput type="password" value={value} name={name} onChange={onChange} placeholder={placeholder} label={label}/>
    )
}

export default PasswordInput;