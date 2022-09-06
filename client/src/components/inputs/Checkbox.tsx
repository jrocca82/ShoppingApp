import React from "react";
import BaseInput from "./BaseInput";

type CheckboxProps = {
    checked: boolean;
    onChange?: () => void;
    label: string;
}

const Checkbox = ({checked, onChange, label}: CheckboxProps) => {
    return (
        <BaseInput type="checkbox" checked={checked} onChange={onChange} label={label}/>
    )
}

export default Checkbox;