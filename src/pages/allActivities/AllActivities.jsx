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

    // const [users, setUsers] = useState([]);
    //
    //
    // useEffect(() => {
    //     async function fetchUsers() {
    //         try {
    //             const response = await axios.get('/api/users');
    //             setActivities(response.data);
    //         } catch (error) {
    //             console.error('Fout bij het ophalen van gebruikers', error);
    //         }
    //     }
    //
    //     fetchUsers();
    // }, []);
    return (
        <>
            <h3 className="activities-page">Alle activiteiten</h3>
            <p>Naam weekend</p>
            <p>Beschrijving weekend</p>
            <section className="activities">
                <NavLink to="/activiteit-toevoegen">
                    <Button id="add-activity">Activiteit toevoegen</Button>
                </NavLink>

            </section>
            <div className="container">

                <section className="activities">

                    {activities.map((activity, index) => (
                        <Tiles
                            key={index}
                            image={activity.imageUrl}
                            imageAlt={activity.title}
                            activity={activity.title}
                        />
                    ))}


                </section>
                {/*Nog werkend maken qua endpoints*/}
                {/*<section className="list-of-users">Lijst van gebruikers wordt hier weergegeven*/}

                {/*    {users.map((users, index) => (*/}
                {/*        <Tiles*/}
                {/*            key={index}*/}
                {/*           users={users.username}*/}
                {/*        />*/}
                {/*    ))}*/}
                    <section>
                        <Button id="addUser">Gebruiker toevoegen</Button>
                    </section>

                    Hier worden de 2 meest populaire activiteiten weergegeven
                {/*</section>*/}
            </div>
        </>
    );
}

export default AllActivities;
