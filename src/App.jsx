import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import AllActivities from "./pages/allActivities/AllActivities.jsx";
import Profile from "./pages/profile/Profile.jsx";
import AddActivity from "./pages/addActivity/AddActivity.jsx";
import Registration from "./pages/registration/Registration.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import InfoActivity from "./pages/infoActivity/InfoActivity.jsx";
import Weekend from "./pages/weekend/Weekend.jsx";
import Header from "./components/header/Header.jsx";
import Login from "./pages/login/Login.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
// import Test from "./pages/TestSignIn.jsx";

// import TestSignIn from "./pages/TestSignIn.jsx";

function App() {


    return (
        <>
            <div className="full-page">
                <div className="app-layout">
                    <Navigation/>
                    <Header/></div>
                <main>          <AuthContextProvider>
                    <Routes>

                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/homepage" element={<Homepage/>}/>
                        <Route path="/activiteit-toevoegen" element={<AddActivity/>}/>
                        <Route path="/alle-activiteiten" element={<AllActivities/>}/>

                        <Route path="/profiel" element={<Profile/>}/>
                        <Route path="/registratie" element={<Registration/>}/>
                        <Route path="/informatie" element={<InfoActivity/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/weekend" element={<Weekend/>}/>
                        {/*<Route path="/testen" element={<TestSignIn/>}/>*/}
                        <Route path="/inloggen" element={<Login/>}/>

                    </Routes>
                </AuthContextProvider>
                </main>
             <Footer/>
            </div>
    </>
    )
}

export default App
