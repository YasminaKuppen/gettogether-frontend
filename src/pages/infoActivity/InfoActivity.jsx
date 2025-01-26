import './InfoActivity.css'
import Button from "../../components/button/Button.jsx";
import React, {useState} from "react";

function InfoActivity() {



    return (
        <>
        <h3 className="name-activity">Naam activiteit</h3>
            <div className="activity-container">
                <div className="information-activity">
                    <section className="description">Beschrijving van de activiteit</section>
                    <div className="description-filled">Hier wordt de activiteit beschreven
                   <p>whoop whoop</p> </div>
                    <section className="location">Locatie</section>
                    <div className="location-filled">Hier wordt de activiteit beschreven
                        <p>blabla</p>
                    </div>
                    <section className="costs">Kosten</section>
                    <div className="costs-filled">Hier worden de kosten genoemd
                        <p>$$$</p>
                    </div>

                    <section>
                        <Button id="vote">Stem op deze activiteit</Button>
                    </section>
                </div>



                </div>


        </>
    )
}

export default InfoActivity;