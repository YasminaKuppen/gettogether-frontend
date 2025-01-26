import React from "react";
import './Tiles.css'
import Button from "../button/Button.jsx";
import {NavLink} from "react-router-dom";

function Tiles({activity, handleButtonClick}) {
    return (
        <div className="tiles-container">
            <article>
                <h4>{activity}</h4>
                <Button className="moreInfoButton">
                    <NavLink to="/informatie">
                        Lees meer..
                    </NavLink>
                </Button>

            </article>
        </div>
    )
}

export default Tiles;

