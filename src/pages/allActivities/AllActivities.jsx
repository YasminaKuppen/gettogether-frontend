import Tiles from "../../components/Tiles.jsx";
import React from "react";
import './AllActivities.css'

function AllActivities() {
    return (
        <>
            <h3 className="activities-page"> Alle activiteiten </h3>
            <section className="activities-page">
                <Tiles image="https://www.natural-high.nl/wp-content/uploads/2019/04/Original-IMG_867136-1-1920x1280.jpg"
                       imageAlt="voorbeeld"  activity="Voorbeeld 1"/>
                <Tiles image="https://www.natural-high.nl/wp-content/uploads/2019/04/Original-IMG_867136-1-1920x1280.jpg"
                       imageAlt="voorbeeld" activity="Voorbeeld 2"/>
                <Tiles image="https://www.natural-high.nl/wp-content/uploads/2019/04/Original-IMG_867136-1-1920x1280.jpg"
                       imageAlt="voorbeeld" activity="Voorbeeld 3"/>
                <Tiles image="https://www.natural-high.nl/wp-content/uploads/2019/04/Original-IMG_867136-1-1920x1280.jpg"
                       imageAlt="voorbeeld" activity="Voorbeeld 4"/>
                <Tiles image="https://www.natural-high.nl/wp-content/uploads/2019/04/Original-IMG_867136-1-1920x1280.jpg"
                       imageAlt="voorbeeld" activity="Voorbeeld 5"/>
                <Tiles image="https://www.natural-high.nl/wp-content/uploads/2019/04/Original-IMG_867136-1-1920x1280.jpg"
                       imageAlt="voorbeeld" activity="Voorbeeld 6"/>

            </section>
        </>
    )
}

export default AllActivities;