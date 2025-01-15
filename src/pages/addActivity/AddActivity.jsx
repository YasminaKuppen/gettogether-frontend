import React, { useState } from "react";
import './AddActivity.css'
import Button from "../../components/button/Button.jsx";


    function AddActivity() {
        const [name, setName] = useState('');
        const [description, setDescription] = useState('');
        const [location, setLocation] = useState('');
        const [costs, setCosts] = useState(''); // Als je het als string wilt bewaren
        const [selectedImage, setSelectedImage] = useState(null);

        const handleNameChange = (event) => {
            setName(event.target.value);
        };
        const handleDescriptionChange = (event) => {
            setDescription(event.target.value);
        };
        const handleLocationChange = (event) => {
            setLocation(event.target.value);
        };
        const handleCostsChange = (event) => {
            setCosts(event.target.value);
        };
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(name, description, location, costs, selectedImage);
        };
        const handleImageChange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setSelectedImage(imageUrl);
            }
        };

        return (
            <>
                <div className="addActivityForm">
                    <h3>Nieuwe activiteit</h3>
                    <p className="addActivityParagraph">Naam activiteit</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <textarea
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                            rows="2"
                            cols="20"
                        ></textarea>
                        </div>
                        <div>
                            <p className="addActivityParagraph">Beschrijving van de activiteit</p>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Beschrijf de activiteit in maximaal 100 woorden"
                                value={description}
                                onChange={handleDescriptionChange}
                                rows="5"
                                cols="20"
                            ></textarea>
                        </div>
                        <div>
                            <p>Voeg een foto toe van de activiteit</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        

                        <div>
                            <p className="addActivityParagraph">Locatie</p>
                            <textarea
                                id="location"
                                name="location"
                                value={location}
                                onChange={handleLocationChange}
                                rows="2"
                                cols="20"
                            ></textarea>
                        </div>
                        <div>
                            <p className="addActivityParagraph">Kosten</p>
                            <textarea
                                id="costs"
                                name="costs"
                                value={costs}
                                onChange={handleCostsChange}
                                rows="5"
                                cols="20"
                            ></textarea>
                        </div>
                        <section>
                            <Button type="submit">Activiteit toevoegen</Button>
                        </section>
                    </form>
                </div>
            </>


)
}

export default AddActivity;