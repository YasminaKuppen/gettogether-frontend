
import {jwtDecode} from "jwt-decode";

export default function isTokenValid(token) {
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Tijd in seconden
        return decodedToken.exp > currentTime; // Controleer of het token nog geldig is
    } catch (error) {
        console.error("Token is ongeldig:", error);
        return false;
    }
}
