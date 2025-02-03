import {useContext, useEffect, useState} from 'react';
import './Profile.css';
import Tiles from "../../components/tiles/Tiles.jsx";
import Button from "../../components/buttons/Button.jsx";
import {NavLink} from "react-router-dom";
import axios from "axios";
import ListOfUsers from "../../components/listOfUsers/ListOfUsers.jsx";
import LogoutButton from "../../components/buttons/LogOutButton.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import NameOfWeekend from "../../components/nameOfWeekend/NameOfWeekend.jsx";

function Profile() {
    const [activities, setActivities] = useState([]);
const [users, setUsers] = useState([]);
const [nameOfWeekend, setNameOfWeekend] = useState([]);
    const { isAuth } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);
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
        async function fetchUsers() {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
                console.log(response.data, isAuth);
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
                <p>Je bent lid van:   <NameOfWeekend weekends={nameOfWeekend}/></p>
                <p>details weekend?</p>
                <p>Klik op de activiteit die jou het meeste aanspreekt.
                    Op die pagina kun je vervolgens stemmen.</p>
                <p>
                <NavLink to="/weekend">
                  Klik hier
                </NavLink> om naar de groepspagina te gaan</p>
            </div>
            <section className="add-activity-button">
                <Button id="add-activity"> <NavLink to="/activiteit-toevoegen">
                    Activiteit toevoegen
                </NavLink></Button>

            </section>
<section className="activities-and-users-container">
            <div className="activities">

                {activities.map((activity, index) => (
                    <Tiles
                        key={index}
                        activity={activity}
                    />
                ))}

            </div>

    <section className="users">
        <h3>Dit zijn de leden in jouw weekend:</h3>
        <div>
            <ListOfUsers users={users}/>
        </div>

    </section>

</section>
            <section className="logout-button">
            <LogoutButton/>
            </section>
        </>
    )
        ;
}

export default Profile;
