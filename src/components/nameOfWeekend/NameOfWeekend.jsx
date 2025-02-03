import React from "react";
import './NameOfWeekend.css'

function NameOfWeekend({ weekends }) {

    return (
        <div className="weekend-container">
            {weekends.map((weekend) => (
               <div key={weekend.id}>
                   <p>{weekend.name}</p>
               </div>
            ))}
               </div>
    );
}

export default NameOfWeekend;