// import React, { useState } from "react";
// import './AddActivity.css'
// import Button from "../../components/button/Button.jsx";
//
//
//     function AddActivity() {
//         const [name, setName] = useState('');
//         const [description, setDescription] = useState('');
//         const [location, setLocation] = useState('');
//         const [costs, setCosts] = useState(''); // Als je het als string wilt bewaren
//         const [selectedImage, setSelectedImage] = useState(null);
//
//         const handleNameChange = (event) => {
//             setName(event.target.value);
//         };
//         const handleDescriptionChange = (event) => {
//             setDescription(event.target.value);
//         };
//         const handleLocationChange = (event) => {
//             setLocation(event.target.value);
//         };
//         const handleCostsChange = (event) => {
//             setCosts(event.target.value);
//         };
//         const handleSubmit = (event) => {
//             event.preventDefault();
//             console.log(name, description, location, costs, selectedImage);
//         };
//         const handleImageChange = (event) => {
//             const file = event.target.files[0];
//             if (file) {
//                 const imageUrl = URL.createObjectURL(file);
//                 setSelectedImage(imageUrl);
//             }
//         };
//
//         return (
//             <>
//                 <div className="addActivityForm">
//                     <h3>Nieuwe activiteit</h3>
//                     <p className="addActivityParagraph">Naam activiteit</p>
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                         <textarea
//                             id="name"
//                             name="name"
//                             value={name}
//                             onChange={handleNameChange}
//                             rows="2"
//                             cols="20"
//                         ></textarea>
//                         </div>
//                         <div>
//                             <p className="addActivityParagraph">Beschrijving van de activiteit</p>
//                             <textarea
//                                 id="description"
//                                 name="description"
//                                 placeholder="Beschrijf de activiteit in maximaal 100 woorden"
//                                 value={description}
//                                 onChange={handleDescriptionChange}
//                                 rows="5"
//                                 cols="20"
//                             ></textarea>
//                         </div>
//                         <div>
//                             <p>Voeg een foto toe van de activiteit</p>
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleImageChange}
//                             />
//                         </div>
//
//
//                         <div>
//                             <p className="addActivityParagraph">Locatie</p>
//                             <textarea
//                                 id="location"
//                                 name="location"
//                                 value={location}
//                                 onChange={handleLocationChange}
//                                 rows="2"
//                                 cols="20"
//                             ></textarea>
//                         </div>
//                         <div>
//                             <p className="addActivityParagraph">Kosten</p>
//                             <textarea
//                                 id="costs"
//                                 name="costs"
//                                 value={costs}
//                                 onChange={handleCostsChange}
//                                 rows="5"
//                                 cols="20"
//                             ></textarea>
//                         </div>
//                         <section>
//                             <Button type="submit">Activiteit toevoegen</Button>
//                         </section>
//                     </form>
//                 </div>
//             </>
//
//
// )
// }
//
// export default AddActivity;

import React, {useState} from "react";
import InputField from "../../components/inputfield/Inputfield.jsx";
import Button from "../../components/button/Button.jsx";
import './AddActivity.css';

function AddActivity() {
    const [nameActivity, setNameActivity] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState('');
    const [costs, setCosts] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

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
        <div className="add-activity-container">
            <div className="form-section">
                <h3>Activiteit toevoegen</h3>


                <div className="two-fields">
                    <div className="input-group">
                        <InputField name="nameActivity" label="Naam activiteit" inputType="text" value={nameActivity}
                                    changeHandler={setNameActivity}/>
                    </div>
                    <div className="input-group">
                        <InputField name="description" label="Beschrijving" inputType="text"
                                    value={description}
                                    changeHandler={setDescription}/>
                    </div>
                </div>

                <div>
                    <p>Voeg een foto toe van de activiteit</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{margin: "10px 0"}}
                    />
                    {selectedImage && (
                        <div>

                        </div>
                    )}
                    <button
                        onClick={handleUpload}

                    >
                        Upload
                    </button>
                    {uploadStatus && <p>{uploadStatus}</p>}

                </div>
                <div className="two-fields">
                    <div className="input-group">
                        <InputField name="location" label="Locatie van de activiteit" inputType="location"
                                    value={location}
                                    changeHandler={setLocation}/>
                    </div>
                    <div className="input-group">
                        <InputField name="costs" label="Kosten" inputType="text" value={costs}
                                    changeHandler={setCosts}/>
                    </div>
                </div>


                <section>
                    <Button type="submit">Activiteit toevoegen</Button>
                </section>
            </div>
        </div>
    );
}

export default AddActivity;
