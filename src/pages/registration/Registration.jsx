import React, { useState } from "react";
import InputField from "../../components/Inputfield.jsx";
import Button from "../../components/Button.jsx";
import './Registration.css';

function Registration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAndConditions, toggleTermsAndConditions] = useState(false);

    return (
        <div className="registration-container">
            <div className="form-section">
                <p>Registratie</p>

                {/* Formulier sectie met velden naast elkaar */}
                <div className="two-fields">
                    <div className="input-group">
                        <InputField name="firstname" label="Voornaam" inputType="text" value={firstName}
                                    changeHandler={setFirstName}/>
                    </div>
                    <div className="input-group">
                        <InputField name="lastname" label="Achternaam" inputType="text" value={lastName}
                                    changeHandler={setLastName}/>
                    </div>
                </div>


                <div className="two-fields">
                    <div className="input-group">
                        <InputField name="birthdate" label="Geboortedatum" inputType="date" value={age}
                                    changeHandler={setAge}/>
                    </div>
                    <div className="input-group">
                        <InputField name="gender" label="Geslacht" inputType="text" value={gender}
                                    changeHandler={setGender}/>
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
                <section>
                    <label htmlFor="form-terms-and-conditions">
                        <input type="checkbox" id="form-terms-and-conditions" name="terms-and-conditions"
                               checked={termsAndConditions}
                                   onChange={() => toggleTermsAndConditions(!termsAndConditions)}/>
                            Ik ga akkoord met de voorwaarden
                        </label>
                    </section>

                    <section>
                        <Button type="submit">Versturen</Button>
                    </section>
                </div>
            </div>
            );
            }

            export default Registration;
