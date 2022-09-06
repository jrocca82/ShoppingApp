import React from "react";
import "./styles/Button.css";

type ButtonProps = {
    className: "BaseButton PrimaryButton" | "BaseButton SecondaryButton";
    children: React.ReactNode;
}

const Button = ({className, children}: ButtonProps) => {
    return (
        <button className={className}>
            {children}
        </button>
    )
}

export default Button