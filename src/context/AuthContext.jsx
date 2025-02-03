
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Correcte import
import axios from "axios";
import isTokenValid from "../helpers/isTokenValid.js";
import PropTypes from "prop-types";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending", // Status om te laten zien dat de app aan het laden is
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token && isTokenValid(token)) {
            console.log("Token gevonden, gebruiker wordt geauthenticeerd...");
            void login(token, false); // Voorkom navigatie bij herauthenticatie
        } else {
            console.log("Geen geldig token gevonden, gebruiker is uitgelogd.");
            setAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }, []);

    async function login(token, redirect = true) {
        const decodedToken = jwtDecode(token);
        localStorage.setItem("token", token);

        try {
            const response = await axios.get(`/api/users/${decodedToken.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            setAuth({
                isAuth: true,
                user: {
                    username: response.data.username,
                    id: response.data.id,
                },
                status: "done",
            });

            console.log("Gebruiker is succesvol ingelogd:", response.data);
            console.log("DIT IS HET Decoded Token Sub:");
            if (redirect) {
                navigate("/profiel");
            }
        } catch (error) {
            console.error("Fout tijdens het ophalen van gebruikersgegevens:", error);
            setAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
            localStorage.removeItem("token");
            alert("Authenticatie mislukt. Probeer opnieuw.");
        }
    }

    function logout() {

        localStorage.removeItem("token");
        console.log("Gebruiker is uitgelogd");
        setAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        navigate("/");
    }

    const contextData = {
        ...auth,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === "pending" ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContextProvider;

//
// deze werkt!
// import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {jwtDecode} from "jwt-decode"; // Let op: dit is geen named export
// import axios from "axios";
// import isTokenValid from "../helpers/isTokenValid.js";
// import PropTypes from "prop-types";
//
// export const AuthContext = createContext({});
//
// function AuthContextProvider({ children }) {
//     const [auth, setAuth] = useState({
//         isAuth: false,
//         user: null,
//         status: "pending",
//     });
//     const navigate = useNavigate();
//
//     // Controleer bij het mounten of de gebruiker ingelogd is
//     useEffect(() => {
//         const token = localStorage.getItem("token");
//
//         if (token && isTokenValid(token)) {
//             console.log("Token is valid. Gebruiker opnieuw authenticeren...");
//             void login(token, false);
//         } else {
//             console.log("Geen geldig token gevonden. Uitloggen...");
//             setAuth({
//                 isAuth: false,
//                 user: null,
//                 status: "done",
//             });
//             localStorage.removeItem("token"); // Verwijder verlopen tokens
//         }
//     }, []);
//
//     // Login-functie
//     async function login(token, redirect = true) {
//         const decodedToken = jwtDecode(token);
//         localStorage.setItem("token", token); // Sla token op in localStorage
//
//         try {
//             const response = await axios.get(`api/users/${decodedToken.sub}`, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//
//             setAuth({
//                 isAuth: true,
//                 user: {
//                     username: response.data.username,
//                     id: response.data.id,
//                 },
//                 status: "done",
//             });
//
//             console.log("Gebruiker is succesvol ingelogd:", response.data);
//
//             if (redirect) {
//                 navigate("/profiel"); // Alleen navigeren als de gebruiker direct inlogt
//             }
//         } catch (error) {
//             console.error("Fout tijdens het ophalen van gebruikersgegevens:", error);
//
//             // Reset de auth-status en verwijder token bij een fout
//             setAuth({
//                 isAuth: false,
//                 user: null,
//                 status: "done",
//             });
//             localStorage.removeItem("token");
//             alert("Authenticatie mislukt. Probeer opnieuw.");
//         }
//     }

    // Logout-functie
//     function logout() {
//         console.log("Gebruiker is uitgelogd");
//
//         localStorage.removeItem("token");
//         setAuth({
//             isAuth: false,
//             user: null,
//             status: "done",
//         });
//
//         navigate("/"); // Navigeer naar de startpagina
//     }
//
//     // Context-object met state en functies
//     const contextData = {
//         ...auth,
//         login,
//         logout,
//     };
//
//     return (
//         <AuthContext.Provider value={contextData}>
//             {auth.status === "pending" ? <p>Loading..</p> : children}
//         </AuthContext.Provider>
//     );
// }
//
// AuthContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };
//
// export default AuthContextProvider;
