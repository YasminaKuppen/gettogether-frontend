import './InfoActivity.css';
import Button from "../../components/buttons/Button.jsx";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function InfoActivity() {
    const { id } = useParams(); // Haal activiteit ID op uit de URL
    const [activity, setActivity] = useState(null);
    const [isVoted, setIsVoted] = useState(false); // Houd bij of de gebruiker al gestemd heeft
    const userId = localStorage.getItem("id"); // Haal gebruikers ID op uit localStorage

    useEffect(() => {
        console.log("Activiteit ID:", id, "Gebruiker ID:", userId);
        if (!userId) {
            alert("Je moet ingelogd zijn om te stemmen!");
            return;
        }
    }, [id, userId]);


    useEffect(() => {
        async function fetchActivity() {
            try {
                const response = await fetch(`/api/activity/${id}`);
                if (!response.ok) throw new Error("Activiteit niet gevonden");
                const data = await response.json();
                setActivity(data);
            } catch (error) {
                console.error("Fout bij ophalen van activiteit:", error);
            }
        }
        fetchActivity();
    }, [id]);


    const handleVote = async (event) => {
        event.preventDefault();


        console.log("Stemmen op activiteit:", id, "Door gebruiker:", userId);

        if (!userId) {
            alert("Je moet ingelogd zijn om te stemmen!");
            return;
        }

        try {
            console.log("Verstuur stem verzoek: ", {
                activity: { id: id },
                user: { id: userId },
                votes: 1
            });

            const response = await fetch(`/api/votes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    activity: { id: id },
                    user: { id: userId },
                    votes: 1 // Veronderstel dat we altijd 1 stem per keer registreren
                })
            });

            if (!response.ok) {
                throw new Error("Fout bij stemmen");
            }

            const result = await response.json();
            console.log("Stemresultaat:", result);

            setIsVoted(true);  // Zet de staat naar 'gestemd'
            alert('Je hebt gestemd op deze activiteit!');
        } catch (error) {
            console.error("Fout bij stemmen:", error);
            alert('Er is iets misgegaan bij het stemmen.');
        }
    };


    if (!activity) return <p>Activiteit wordt geladen...</p>;

    return (
        <>
            <h3 className="name-activity">{activity.title}</h3>

            <div className="activity-container">
                <div className="information-activity">
                    <section className="description">Beschrijving van de activiteit</section>
                    <div className="description-filled">{activity.description}</div>

                    <section className="location">Locatie</section>
                    <div className="location-filled">{activity.location}</div>

                    <section className="costs">Kosten</section>
                    <div className="costs-filled">€{activity.costs}</div>

                    <section>
                        <button className="info-activity-button" onClick={(e) => handleVote(e)} disabled={isVoted}>
                            {isVoted ? 'Je hebt al gestemd' : 'Stem op deze activiteit'}
                        </button>

                    </section>
                </div>
            </div>
        </>
    );
}

export default InfoActivity;


// import './InfoActivity.css';
// import Button from "../../components/buttons/Button.jsx";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
//
// function InfoActivity() {
//     const { id } = useParams(); // Haal activiteit ID op uit de URL
//     const [activity, setActivity] = useState(null);
//     const [isVoted, setIsVoted] = useState(false); // Houd bij of de gebruiker al gestemd heeft
//     const userId = localStorage.getItem("id"); // Haal gebruikers ID op uit localStorage
//
//     // Controleer of de ID van de activiteit en de gebruiker goed zijn
//     useEffect(() => {
//         console.log("Activiteit ID:", id, "Gebruiker ID:", userId);
//         if (!userId) {
//             alert("Je moet ingelogd zijn om te stemmen!");
//             return;
//         }
//     }, [id, userId]);
//
//     // Haal de activiteit op uit de API
//     useEffect(() => {
//         async function fetchActivity() {
//             try {
//                 const response = await fetch(`/api/activity/${id}`);
//                 if (!response.ok) throw new Error("Activiteit niet gevonden");
//                 const data = await response.json();
//                 setActivity(data);
//             } catch (error) {
//                 console.error("Fout bij ophalen van activiteit:", error);
//             }
//         }
//         fetchActivity();
//     }, [id]);
//
//     // Stemactie handler
//     const handleVote = async (event) => {
//         event.preventDefault();
//
//         // Log om te zien of de functie wordt aangeroepen
//         console.log("Stemmen op activiteit:", id, "Door gebruiker:", userId);
//
//         if (!userId) {
//             alert("Je moet ingelogd zijn om te stemmen!");
//             return;
//         }
//
//         try {
//             const response = await fetch(`/api/votes`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     activity: { id: id },
//                     user: { id: userId },
//                     votes: 1 // Veronderstel dat we altijd 1 stem per keer registreren
//                 })
//             });
//
//             if (!response.ok) {
//                 throw new Error("Fout bij stemmen");
//             }
//
//             const result = await response.json();
//             console.log("Stemresultaat:", result);
//
//             setIsVoted(true);  // Zet de staat naar 'gestemd'
//             alert('Je hebt gestemd op deze activiteit!');
//         } catch (error) {
//             console.error("Fout bij stemmen:", error);
//             alert('Er is iets misgegaan bij het stemmen.');
//         }
//     };
//
//     // Als de activiteit nog niet geladen is
//     if (!activity) return <p>Activiteit wordt geladen...</p>;
//
//     return (
//         <>
//             <h3 className="name-activity">{activity.title}</h3>
//
//             <div className="activity-container">
//                 <div className="information-activity">
//                     <section className="description">Beschrijving van de activiteit</section>
//                     <div className="description-filled">{activity.description}</div>
//
//                     <section className="location">Locatie</section>
//                     <div className="location-filled">{activity.location}</div>
//
//                     <section className="costs">Kosten</section>
//                     <div className="costs-filled">€{activity.costs}</div>
//
//                     <section>
//                         {/* Toevoegen van een log om de knop status te checken */}
//                         <Button
//                             id="vote"
//                             onClick={(e) => {
//                                 console.log("Button geklikt");
//                                 handleVote(e);
//                             }}
//                             disabled={isVoted} // Als al gestemd is, wordt de knop uitgeschakeld
//                         >
//                             {isVoted ? 'Je hebt al gestemd' : 'Stem op deze activiteit'}
//                         </Button>
//                     </section>
//                 </div>
//             </div>
//         </>
//     );
// }
//
// export default InfoActivity;
//
//
//




//origineel
// function InfoActivity() {
//
//
//
//     return (
//         <>
//         <h3 className="name-activity">Naam activiteit</h3>
//             <div className="activity-container">
//                 <div className="information-activity">
//                     <section className="description">Beschrijving van de activiteit</section>
//                     <div className="description-filled">Hier wordt de activiteit beschreven
//                    <p>whoop whoop</p> </div>
//                     <section className="location">Locatie</section>
//                     <div className="location-filled">Hier wordt de activiteit beschreven
//                         <p>blabla</p>
//                     </div>
//                     <section className="costs">Kosten</section>
//                     <div className="costs-filled">Hier worden de kosten genoemd
//                         <p>$$$</p>
//                     </div>
//
//                     <section>
//                         <Button id="vote">Stem op deze activiteit</Button>
//                     </section>
//                 </div>
//
//
//
//                 </div>
//
//
//         </>
//     )
// }
//
// export default InfoActivity;