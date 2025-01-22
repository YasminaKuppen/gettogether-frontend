import Tiles from "../../components/tiles/Tiles.jsx";
import React, { useState, useEffect } from "react";
import './AllActivities.css'
import Button from "../../components/button/Button.jsx";
import { NavLink } from "react-router-dom";
import axios from "axios";

function AllActivities() {
    const [activities, setActivities] = useState([]);


    useEffect(() => {
        async function fetchActivities() {
            try {
                const response = await axios.get('/api/activity'); // Verzoek via de proxy
                setActivities(response.data);
            } catch (error) {
                console.error('Fout bij het ophalen van activiteiten:', error);
            }
        }

        fetchActivities();
    }, []);

    return (
        <>
            <h3 className="activities-page">Alle activiteiten</h3>
            <p>Naam weekend</p>
            <p>Beschrijving weekend</p>
            <div className="container">
                <section className="activities">

                    {activities.map((activity, index) => (
                        <Tiles
                            key={index}
                            image={activity.imageUrl}  // Gebruik de afbeelding die vanuit de API komt
                            imageAlt={activity.title}  // Gebruik de naam van de activiteit als alt tekst
                            activity={activity.title}  // De titel van de activiteit
                        />
                    ))}

                    <section>
                        <NavLink to="/activiteit-toevoegen">
                            <Button id="add-activity">Activiteit toevoegen</Button>
                        </NavLink>

                    </section>
                </section>
                <section className="list-of-users">Lijst van gebruikers wordt hier weergegeven

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

                        Hier worden de 2 meest populaire activiteiten weergegeven
                    </section>
            </div>
        </>
);
}

export default AllActivities;
