import React, { useState } from "react";
import { Button, Form } from "../components";
import { Checkbox, PasswordInput, TextInput } from "../components/inputs";

const FormPage = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [sendEmail, setSendEmail] = useState<boolean>(false);

    const handleFirstNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLastName(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleCheckEmail = () => {
        setSendEmail(!sendEmail);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className="App">
            <Form onSubmit={handleSubmit}>
                <TextInput
                    value={firstName}
                    label="First name"
                    name="First name"
                    placeholder="First name"
                    onChange={handleFirstNameChange}
                />
                <TextInput
                    value={lastName}
                    placeholder="Last name"
                    label="Last name"
                    name="Last name"
                    onChange={handleLastNameChange}
                />
                <PasswordInput
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    label="Password"
                />
                <Checkbox
                    checked={sendEmail}
                    onChange={handleCheckEmail}
                    label="Sign up to our email list"
                />
                <Button className="BaseButton PrimaryButton">
                    Submit
                </Button> 
            </Form>
        </div>
    );
}

export default FormPage;
