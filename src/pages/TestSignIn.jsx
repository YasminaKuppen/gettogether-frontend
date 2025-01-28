// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { TestAuthContext } from '../context/TestAuthContext';
// import axios from 'axios';
//
// function TestSignIn() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const { login } = useContext(TestAuthContext);
//
//     function handleSubmit(e) {
//         e.preventDefault();
//         login();
//     }
//
//     return (
//         <>
//             <h1>Inloggen</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
//
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">
//                    Username
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </label>
//
//                 <label htmlFor="password-field">
//                     Wachtwoord:
//                     <input
//                         type="password"
//                         id="password-field"
//                         name="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </label>
//                 {error && <p className="error">Combinatie van emailadres en wachtwoord is onjuist</p>}
//
//                 <button
//                     type="submit"
//                     className="form-button"
//                 >
//                     Inloggen
//                 </button>
//             </form>
//
//             <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
//         </>
//     );
// }
//
// export default TestSignIn;