import React from 'react';
import './Navigation.css'
import {NavLink, Route} from "react-router-dom";


function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>Menu</h4>
                <ul>


                    <li><NavLink to="/homepage"
                    >Homepage</NavLink>
                    </li>
                    <li><NavLink to="/activiteit-toevoegen"
                    >Activiteit toevoegen</NavLink>
                    </li>
                    <li><NavLink to="/alle-activiteiten"
                    >Alle activiteiten</NavLink>
                    </li>
                    <li><NavLink to="/profiel"
                    >Profiel</NavLink>
                    </li>
                    <li><NavLink to="/registratie"
                    >Registreren</NavLink>
                    </li>
                    <li><NavLink to="/stemmen"
                    >Stemmen</NavLink>
                    </li>


                </ul>
            </div>
        </nav>
    );
}

export default Navigation;