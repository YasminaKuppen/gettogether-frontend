import {useState} from 'react'

import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import AllActivities from "./pages/allActivities/AllActivities.jsx";
import Profile from "./pages/profile/Profile.jsx";
import AddActivity from "./pages/addActivity/AddActivity.jsx";
import Registration from "./pages/registration/Registration.jsx";
import Vote from "./pages/vote/Vote.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {


    return (
        <>        <Navigation/>
            <Routes>
                <Route path="/homepage" element={<Homepage/>}/>
                <Route path="/activiteit-toevoegen" element={<AddActivity/>}/>
                <Route path="/alle-activiteiten" element={<AllActivities/>}/>
                <Route path="/profiel" element={<Profile/>}/>
                <Route path="/registratie" element={<Registration/>}/>
                <Route path="/stemmen" element={<Vote/>}/>
                <Route path="/contact" element={<Contact/>}/>
                        </Routes>

<Footer/>

                            </>
                            )
                        }

                               export default App
