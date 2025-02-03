import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import './LogOutButton.css'
function LogoutButton() {
    const { logout } = useContext(AuthContext);

    return (
        <button className="submitButton" onClick={logout}>
            Uitloggen
        </button>
    );
}

export default LogoutButton;
