import './InfoActivity.css'
import Button from "../../components/button/Button.jsx";
import React, {useState} from "react";

function InfoActivity() {
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
                setUploadStatus("Er is iets misgegaan.");
            }
        } catch (error) {
            console.error("Fout bij het uploaden:", error);
            setUploadStatus("Upload mislukt.");
        }
    };

    return (
        <>
        <h3 className="nameActivity">Naam activiteit</h3>
            <div className="activityContainer">
                <div className="informationActivity">
                    <section className="description">Beschrijving van de activiteit</section>
                    <div className="descriptionFilled">Hier wordt de activiteit beschreven
                   <p>whoop whoop</p> </div>
                    <section className="location">Locatie</section>
                    <div className="locationFilled">Hier wordt de activiteit beschreven
                        <p>blabla</p>
                    </div>
                    <section className="costs">Kosten</section>
                    <div className="costsFilled">Hier worden de kosten genoemd
                        <p>$$$</p>
                    </div>
                    <section>
                        <Button id="vote">Stem op deze activiteit</Button>
                    </section>
                </div>
                <div className="activityPhoto">
                    <h3>Voeg een foto van de activiteit toe</h3>
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
                                alt="Preview activiteitenfoto"
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



                </div>

            </div>
        </>
    )
}

export default InfoActivity;