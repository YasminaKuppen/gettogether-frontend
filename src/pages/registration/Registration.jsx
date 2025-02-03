import React, { useState } from "react";
import InputField from "../../components/inputfield/Inputfield.jsx";
import Button from "../../components/buttons/Button.jsx";
import './Registration.css';
import {useNavigate} from "react-router-dom";

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const [termsAndConditions, toggleTermsAndConditions] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            username,
            email,
            password,
        };

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Fout bij versturen: ${response.status}`);
            }

            const result = await response.json();
            console.log('Response van server:', result);

            alert('Registratie succesvol! Je wordt doorgestuurd naar de inlogpagina.');

            navigate('/inloggen');

        } catch (error) {
            console.error('Fout:', error);
            alert(error);
        }
    };

    return (
        <div className="registration-container">
            <form onSubmit={handleSubmit} className="form-section">
                <h3>Registratieformulier</h3>

                <div className="two-fields">
                    <div className="input-group">
                        <InputField name="username" label="Gebruikersnaam" inputType="text" value={username}
                                    changeHandler={setUsername}/>
                    </div>
                </div>

                <div className="two-fields">
                    <div className="input-group">
                        <InputField name="email" label="E-mailadres" inputType="text" value={email}
                                    changeHandler={setEmail}/>
                    </div>
                    <div className="input-group">
                        <InputField name="password" label="Wachtwoord" inputType="password" value={password}
                                    changeHandler={setPassword}/>
                    </div>
                </div>

                {/*<section>*/}
                {/*    <label htmlFor="form-terms-and-conditions">*/}
                {/*        <input type="checkbox" id="form-terms-and-conditions" name="terms-and-conditions"*/}
                {/*               checked={termsAndConditions}*/}
                {/*               onChange={() => toggleTermsAndConditions(!termsAndConditions)}/>*/}
                {/*        Ik ga akkoord met de voorwaarden*/}
                {/*    </label>*/}
                {/*</section>*/}

                <section>
                    <Button type="submit">Registreren</Button>
                </section>
            </form>
        </div>
    );
}

export default Registration;
