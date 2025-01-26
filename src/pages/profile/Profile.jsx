import React, {useEffect, useState} from 'react';
import './Profile.css';
import Tiles from "../../components/tiles/Tiles.jsx";
import Button from "../../components/button/Button.jsx";
import {NavLink} from "react-router-dom";
import axios from "axios";
import ListOfUsers from "../../components/listOfUsers/ListOfUsers.jsx";

function Profile() {
    const [activities, setActivities] = useState([]);
const [users, setUsers] = useState([]);


    useEffect(() => {
        async function fetchActivities() {
            try {
                const response = await axios.get('/api/activity');
                setActivities(response.data);
            } catch (error) {
                console.error('Fout bij het ophalen van activiteiten:', error);
            }
        }

        fetchActivities();
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
            <h3 className="profile-page"> Profielpagina</h3>
            <div className="about-container">

                <p>Je bent lid van naam groep</p>
                <p>details weekend</p>
                <p>Klik op de activiteit die jou het meeste aanspreekt.</p>
                <p>Op die pagina kun je vervolgens stemmen.</p>
                <p> hier nog een link naar welke weekenden je deelneemt</p>
                <NavLink to="/weekend">
                    Naar mijn weekend
                </NavLink>
            </div>
            <section className="add-activity-button">
                <Button id="add-activity">Activiteit toevoegen</Button>

            </section>

            <section className="activities">

                {activities.map((activity, index) => (
                    <Tiles
                        key={index}
                        imageAlt={activity.title}
                        activity={activity.title}
                    />
                ))}

            </section>
            <section className="users">
                <ListOfUsers users={users}/> {/* Geef de volledige users array door */}
            </section>


        </>
    )
        ;
}

export default Profile;
