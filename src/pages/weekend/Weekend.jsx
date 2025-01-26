import Tiles from "../../components/tiles/Tiles.jsx";
import React, {useEffect, useState} from "react";
import './Weekend.css'
import Button from "../../components/button/Button.jsx";
import {NavLink} from "react-router-dom";
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
          <h3 className="weekend-page"> Welkom bij je weekend</h3>
          <p>Naam weekend</p>
          <p>Beschrijving weekend</p>
          <section className="add-activity-button">
              <Button id="add-activity">Activiteit toevoegen</Button>
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


              {/*<div className="containerRightSide">*/}
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