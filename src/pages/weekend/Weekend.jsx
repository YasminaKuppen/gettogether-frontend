import Tiles from "../../components/tiles/Tiles.jsx";
import React, {useEffect, useState} from "react";
import './Weekend.css'
import Button from "../../components/buttons/Button.jsx";
import {NavLink} from "react-router-dom";
import axios from "axios";
import NameOfWeekend from "../../components/nameOfWeekend/NameOfWeekend.jsx";
import ListOfUsers from "../../components/listOfUsers/ListOfUsers.jsx";

function AllActivities() {
    const [activities, setActivities] = useState([]);
    const [nameOfWeekend, setNameOfWeekend] = useState([]);
    const [mostPopularActivities, setMostPopularActivities] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchNameOfWeekend() {
            try {
                const response = await axios.get('/api/weekends');
                setNameOfWeekend(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Fout bij het ophalen van weekenden:', error);
            }
        }

        fetchNameOfWeekend();

    }, []);

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
    useEffect(() => {
        async function fetchAndSortActivities() {
            try {
                const result = await axios.get('/api/activity'); // Haal activiteiten op
                console.log("Oorspronkelijke activiteiten:", result.data);

                const sortedAndLimitedActivities = result.data
                    .sort((a, b) => b.votes.length - a.votes.length)
                    .slice(0, 3);


                console.log("Gesorteerde en gelimiteerde activiteiten:", sortedAndLimitedActivities);

                setMostPopularActivities(sortedAndLimitedActivities);
            } catch (error) {
                console.error("Fout bij het ophalen van activiteiten:", error);
            }
        }

        fetchAndSortActivities();
    }, []);
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
                console.log(response.data); //
            } catch (error) {
                console.error('Fout bij het ophalen van gebruikers:', error);
            }
        }

        fetchUsers();
    }, []);
    return (
        <>
            <h3 className="weekend-page"> Welkom bij de groepspagina van:</h3><NameOfWeekend weekends={nameOfWeekend}/>

            <p>Beschrijving weekend</p>
            <p>GROEPSFOTO</p>
            <section className="add-activity-button">
                <Button id="add-activity"> <NavLink to="/activiteit-toevoegen">
                    Activiteit toevoegen
                </NavLink></Button>
            </section>
            <div className="container">


                <section className="activities">

                    {activities.map((activity, index) => (
                        <Tiles
                            key={index}
                            activity={activity}
                        />
                    ))}


                </section>


                {/*<div className="containerRightSide">*/}
                <section className="list-of-users"><h3>De gebruikers binnen jouw weekend zijn:</h3>
                    <li><ListOfUsers users={users}/></li>
                </section>
                <div className="popular-activities">
                    <h3>Populairste Activiteiten</h3>
                    <p>De volgende activiteiten hebben op dit moment de meeste stemmen:</p>

                    {mostPopularActivities.length > 0 ? (
                        mostPopularActivities.map((activity) => (
                            <li key={activity.id}>
                                {activity.title} heeft {activity.votes.length} stem(men).
                            </li>
                        ))
                    ) : (
                        <p>Er zijn geen populaire activiteiten beschikbaar.</p>
                    )}

                </div>
            </div>
        </>
    )
}

export default AllActivities;