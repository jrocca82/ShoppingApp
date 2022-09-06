import React, { FormEventHandler } from "react";

type FormProps = {
    onSubmit: FormEventHandler<HTMLFormElement>;
    children: React.ReactNode
}

const Form = ({onSubmit, children}: FormProps) => {
    return (
        <form onSubmit={onSubmit} className="Form">
            {children}
        </form>
    )
}

export default Form;