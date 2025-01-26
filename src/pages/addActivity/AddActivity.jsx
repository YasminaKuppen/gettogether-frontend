import React, {useState} from "react";
import InputField from "../../components/inputfield/Inputfield.jsx";
import Button from "../../components/button/Button.jsx";
import './AddActivity.css';

function AddActivity() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState('');
    const [costs, setCosts] = useState('');
    // const [termsAndConditions, toggleTermsAndConditions] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
          title,
            description,
            location,
            costs
        };

        try {
            const response = await fetch('/api/activity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Fout bij versturen: ${response.status}`);
            }

            const result = await response.json();
            console.log('Response van server:', result);

            alert('Data succesvol verzonden!');
        } catch (error) {
            console.error('Fout:', error);
            alert('Er ontbreken gegevens');
        }
    };


    return (
        <div className="add-activity-container">
            <form onSubmit={handleSubmit} className="form-section">

                    <h3>Activiteit toevoegen</h3>


                    <div className="two-fields">
                        <div className="input-group">
                            <InputField name="title" label="Naam activiteit" inputType="text"
                                        value={title}
                                        changeHandler={setTitle}/>
                        </div>
                        <div className="input-group">
                            <InputField name="description" label="Beschrijving" inputType="text"
                                        value={description}
                                        changeHandler={setDescription}/>
                        </div>
                    </div>
                    <div className="two-fields">
                        <div className="input-group">
                            <InputField name="location" label="Locatie" inputType="location"
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
            </form>
        </div>
);
}

export default AddActivity;
