import React from "react";
import './Tiles.css'
import Button from "../button/Button.jsx";
import {NavLink} from "react-router-dom";

function Tiles({image, imageAlt, activity, handleButtonClick}) {
    return (
        <div className="tiles-container">
            <article>
                <img src={image} alt={imageAlt}/>
                <h4>{activity}</h4>
                <button className="moreInfoButton">
                    <NavLink to="/informatie">
                        Lees meer..
                    </NavLink>
                </button>

            </article>
        </div>
    )
}

export default Tiles;

<li><NavLink to="/afspraken" className={({isActive}) => isActive ? 'active-link' : 'default-link'}>Afspraak
    maken</NavLink></li>