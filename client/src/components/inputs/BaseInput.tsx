import React from "react";
import "./styles/BaseInput.css";

type BaseInputProps = {
    type: React.HTMLInputTypeAttribute | undefined;
    value?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    checked?: boolean;
    label: string;
};

const BaseInput = ({
    type,
    value,
    name,
    onChange,
    placeholder,
    checked,
    label,
}: BaseInputProps) => {
    return (
        <div
            className={`BaseInput ${
                type === "checkbox" ? "BaseInputReverse" : ""
            }`}
        >
            <label htmlFor={name} data-testid="baseInputLabel">
                {label}
            </label>
            <input
                data-testid="baseInput"
                id={name}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                autoComplete="off"
                placeholder={placeholder}
                checked={checked}
                className="BaseInput"
            />
        </div>
    );
};

export default BaseInput;
