import React, { useState } from 'react';
import './Profile.css';
import Tiles from "../../components/tiles/Tiles.jsx";
import Button from "../../components/button/Button.jsx";

function Profile() {
    // State voor 'about' tekst en uploadstatus
    const [about, setAbout] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    // Handelt de wijziging van de 'about' tekst
    const handleChange = (event) => {
        setAbout(event.target.value);
    };

    // Handelt de wijziging van de afbeelding
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    // Handelt de upload van de afbeelding
    const handleUpload = async () => {
        if (!selectedImage) {
            alert("Selecteer een afbeelding voordat je uploadt.");
            return;
        }

        const formData = new FormData();
        const file = document.querySelector('input[type="file"]').files[0];
        formData.append('image', file);

        try {
            setUploadStatus("Uploading...");
            // Verstuur een POST-verzoek naar de server
            const response = await fetch('https://jouw-server.com/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadStatus("Upload succesvol!");
                alert("Profielfoto is geüpload!");
            } else {
                setUploadStatus("Er is iets mis gegaan.");
            }
        } catch (error) {
            console.error("Fout bij het uploaden:", error);
            setUploadStatus("Upload mislukt.");
        }
    };

    return (
        <>
            <h3 className="profilePage"> Profielpagina</h3>
            <div className="aboutContainer">
                <div className="aboutYouAndPhoto">
                    <h3>Voeg een profielfoto toe</h3>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{margin: "10px 0"}}
                    />
                    {selectedImage && (
                        <div>
                            <img
                                src={selectedImage}
                                alt="Preview profielfoto"
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    margin: "10px 0",
                                }}
                            />
                        </div>
                    )}
                    <button
                        onClick={handleUpload}

                    >
                        Upload
                    </button>
                    {uploadStatus && <p>{uploadStatus}</p>}

                    {/* Over jou gedeelte */}
                    <div className="about-section">
                        <h3>Over jou</h3>
                        <form>
                    <textarea
                        id="about"
                        name="about"
                        placeholder="Schrijf hier wat over jezelf"
                        value={about}
                        onChange={handleChange}
                        rows="5"
                        cols="30"
                    ></textarea>
                            <section>
                                <button type="submit">Versturen</button>
                            </section>
                        </form>
                    </div>
                    <p>Je bent lid van naam groep</p>
                    <p>details weekend</p>
                    <p>Klik op de activiteit die jou het meeste aanspreekt.</p>
                    <p>Op die pagina kun je vervolgens stemmen.</p>
                </div>


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

            </div>
        </>
    );
}

export default Profile;
