import Tiles from "../../components/tiles/Tiles.jsx";
import React from "react";
import './AllActivities.css'
import Button from "../../components/button/Button.jsx";
import {NavLink} from "react-router-dom";

function AllActivities() {

    const handleButtonClick = () => {
        navigate('/informatie'); // Verwijs naar de detailpagina
    }; return (
        <>
            <h3 className="activities-page"> Alle activiteiten </h3>
            <p>Naam weekend</p>
            <p>Beschrijving weekend</p>
            <div className="container">

                <section className="activities">
                    <Tiles image="https://upload.wikimedia.org/wikipedia/commons/1/13/Dressage_%28158364553%29.jpeg"
                           imageAlt="voorbeeld" activity="Voorbeeld 1"/>
                    <Tiles image="https://upload.wikimedia.org/wikipedia/commons/1/13/Dressage_%28158364553%29.jpeg"
                           imageAlt="voorbeeld" activity="Voorbeeld 2"/>
                    <Tiles image="https://upload.wikimedia.org/wikipedia/commons/1/13/Dressage_%28158364553%29.jpeg"
                           imageAlt="voorbeeld" activity="Voorbeeld 3"/>
                    <Tiles image="https://upload.wikimedia.org/wikipedia/commons/1/13/Dressage_%28158364553%29.jpeg"
                           imageAlt="voorbeeld" activity="Voorbeeld 4"/>
                    <Tiles image="https://upload.wikimedia.org/wikipedia/commons/1/13/Dressage_%28158364553%29.jpeg"
                           imageAlt="voorbeeld" activity="Voorbeeld 5"/>
                    <Tiles image="https://upload.wikimedia.org/wikipedia/commons/1/13/Dressage_%28158364553%29.jpeg"
                           imageAlt="voorbeeld" activity="Voorbeeld 6"/>
                    <Tiles image="https://upload.wikimedia.org/wikipedia/commons/1/13/Dressage_%28158364553%29.jpeg"
                           imageAlt="voorbeeld" activity="Voorbeeld 7"/>
                    <Tiles image="https://upload.wikimedia.org/wikipedia/commons/1/13/Dressage_%28158364553%29.jpeg"
                           imageAlt="voorbeeld" activity="Voorbeeld 8"/>
                    <Tiles image="https://upload.wikimedia.org/wikipedia/commons/1/13/Dressage_%28158364553%29.jpeg"
                           imageAlt="voorbeeld" activity="Voorbeeld 9"/>


                    <section>
                        <Button id="addActivity">Activiteit toevoegen</Button>
                    </section>
                </section>
                {/*<div className="containerRightSide">*/}
                <section className="listOfUsers">Lijst van gebruikers wordt hier weergegeven

                        <li>Piet</li>
                        <li>Truus</li>
                        <li>Peter</li>
                        <li>Jan</li>
                        <li>Berta</li>
                        <li>Piet</li>
                        <li>Truus</li>
                        <li>Peter</li>
                        <li>Jan</li>
                        <li>Berta</li>
                        <section>
                            <Button id="addUser">Gebruiker toevoegen</Button>
                        </section>
Hier worden de 2? meest favoriete activiteiten weergegeven
                    {/*<section className="activitySortedByPopularity">*/}
                    {/*    ddd*/}
                    {/*</section> */}
                </section>
                {/*</div>*/}
            </div>
        </>
    )
}

export default AllActivities;