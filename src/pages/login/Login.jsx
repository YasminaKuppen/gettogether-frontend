import InputField from "../../components/inputfield/Inputfield.jsx";
import {useState} from "react";
import Button from "../../components/button/Button.jsx";
import './Login.css'
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            username,
            password

        };
        try {
            const response = await fetch('/api/login', {
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

            alert('Data succesvol verzonden!');
        } catch (error) {
            console.error('Fout:', error.message);
            alert('Gegevens onjuist');
        }
    };

    return (
        <>

            <div className="login-container">
                <form onSubmit={handleSubmit} className="form-section">

                    <h3>Inloggen</h3>


                    <div className="two-fields">
                        <div className="input-group">
                            <InputField name="username" label="Gebruikersnaam" inputType="text"
                                        value={username}
                                        changeHandler={setUsername}/>
                        </div>
                        <div className="input-group">
                            <InputField name="password" label="Wachtwoord" inputType="password"
                                        value={password}
                                        changeHandler={setPassword}/>
                        </div>
                    </div>

                    <section>
                        <Button type="submit">Inloggen</Button>
                    </section>
                </form>
            </div>


        </>
    )
}

export default Login;


