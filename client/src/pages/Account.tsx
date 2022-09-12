import React, { SyntheticEvent, useState } from "react";
import { login } from "../api/auth";
import { Button, Form } from "../components";
import { TextInput } from "../components/inputs";

const Account = () => {
    const [email, setEmail] = useState<string | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const [done, setDone] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        if (email) {
            const { success, error } = await login(email);
            if (success) {
                setDone(true);
            } else {
                setError(error);
            }
        }
        setLoading(false);
    };

    return (
        <div>
            <h1>Login or Register</h1>
            {done ? (
                <p>
                    We sent a magic link to your email.✨ Click on it to login!
                </p>
            ) : (
                <React.Fragment>
                    <p>
                        If you do not have an account, a new one will be setup
                        for you automatically. ✨
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <TextInput
                            name="email"
                            label="Email"
                            placeholder="e.g. anna.ryan@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                            disabled={loading}
                            className={"BaseButton PrimaryButton"}
                        >
                            Login
                        </Button>
                        {error && <p style={{ color: "crimson" }}>{error}</p>}
                    </Form>
                </React.Fragment>
            )}
        </div>
    );
};

export default Account;
