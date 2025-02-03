import React from "react";
import './Tiles.css'
import Button from "../buttons/Button.jsx";
import { NavLink } from "react-router-dom";

function Tiles({ activity }) {
    console.log(activity);
    return (
        <div className="tiles-container">
            <article>
                <h4>{activity.title}</h4>  {/* Toon de titel van de activiteit */}
                <Button className="moreInfoButton">
                    {/* Link naar activiteit op basis van de ID */}
                    <NavLink to={`/activity/${activity.id}`}>
                        Lees meer..
                    </NavLink>
                </Button>
            </article>
        </div>
    );
}

export default Tiles;


//
// origineel
// import React from "react";
// import './Tiles.css'
// import Button from "../buttons/Button.jsx";
// import {NavLink} from "react-router-dom";
//
// function Tiles({activity, handleButtonClick}) {
//     return (
//         <div className="tiles-container">
//             <article>
//                 <h4>{activity}</h4>
//                 <Button className="moreInfoButton">
//                     <NavLink to={`/informatie/${encodeURIComponent(activity.title)}`}>
//                         Lees meer..
//                     </NavLink>
//                 </Button>
//
//             </article>
//         </div>
//     )
// }
//
// export default Tiles;
//
