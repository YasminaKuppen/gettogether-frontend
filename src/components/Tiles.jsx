import React from "react";
import './Tiles.css'
import Button from "./Button.jsx";

function Tiles({image, imageAlt, activity, onButtonClick}) {
    return (
        <div className="tiles-container">
            <article>
                <img src={image} alt={imageAlt}/>
                <h4>{activity}</h4>
                <Button onClick={onButtonClick}>Lees meer</Button>
            </article>
        </div>
            )
            }

            export default Tiles;

