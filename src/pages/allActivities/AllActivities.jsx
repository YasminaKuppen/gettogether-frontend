import Tiles from "../../components/tiles/Tiles.jsx";
import {useState, useEffect} from "react";
import './AllActivities.css'
import Button from "../../components/button/Button.jsx";
import {NavLink} from "react-router-dom";
import axios from "axios";
import ListOfUsers from "../../components/listOfUsers/ListOfUsers.jsx";

function AllActivities() {
    const [activities, setActivities] = useState([]);
    const [mostPopularActivities, setMostPopularActivities] = useState([]);
    const [users, setUsers] = useState([]);

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
                            activity={activity.title}
                        />
                    ))}

                </section>
                <div className="users-weekend">
                    <h3>De gebruikers binnen jouw weekend zijn:</h3>
                    <ListOfUsers users={users}/>
                    <Button id="addUser">Gebruiker toevoegen</Button>
                </div>

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
    );
}

export default AllActivities;
