import React from 'react';
import './Navigation.css'
import {NavLink, Route} from "react-router-dom";
import logo from "../../assets/logo.png";


function Navigation() {

    return (
        <nav>
            <div className="nav-container">
                {/*<img src={logo} alt="Logo getTogether" className="unique-logo"/>*/}
                <ul className="nav-list">
                    <li><NavLink to="/homepage">Homepage</NavLink></li>
                    <li className="dropdown">
                        <span className="dropdown-title">Menu</span>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/registratie">Registreren</NavLink></li>
                            <li><NavLink to="/inloggen">Inloggen</NavLink></li>
                            <li><NavLink to="/profiel">Profiel</NavLink></li>
                            <li><NavLink to="/activiteit-toevoegen">Activiteit toevoegen</NavLink></li>
                            <li><NavLink to="/alle-activiteiten">Pagina van organisator</NavLink></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>

    );
}

export default Navigation;