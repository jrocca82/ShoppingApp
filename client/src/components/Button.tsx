import React from "react";
import "./styles/Button.css";

type ButtonProps = {
    className: "BaseButton PrimaryButton" | "BaseButton SecondaryButton";
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: (e: any) => void;
}

const Button = ({className, children, disabled, onClick}: ButtonProps) => {
    return (
        <button className={className} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button