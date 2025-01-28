import InputField from "../../components/inputfield/Inputfield.jsx";
import {useContext, useState} from "react";
import Button from "../../components/button/Button.jsx";
import './Login.css'
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//demo
// function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const { login } = useContext(AuthContext);
//
//
//     async function handleSubmit(e){
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/login' ,
//                 {
//                     username: "fender",
//                     password: "fender",
//                 })
// console.log(response)
//             login(response.data.accesToken);
//         } catch (e) {
//             console.error('deze foutmelding blijft');
//         }
//
// }


//origineel
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        // const data = {
        //     username,
        //     password
        //
        // };
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error(`Fout bij versturen: ${response.status}`);
            }

            const result = await response.json();
            console.log('Response van server:', result);

            // Controleer of er een token is in de response
            if (result.token) {
                // Als er een token is, sla het op in localStorage en navigeer naar profiel
                localStorage.setItem('token', result.token);
                console.log('Gebruiker is ingelogd. Welkom', username);
                navigate('/profiel'); // Navigeer naar de profielpagina
            } else {
                // Als er geen token is, geef een foutmelding
                console.error('Geen token ontvangen!');
                toggleError(true);
            }


            alert('Data succesvol verzonden!');
        } catch (error) {
            console.error('Fout:', error.message);
            alert('Gegevens onjuist');
            toggleError(true);
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


