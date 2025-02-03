import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import OrganizerPage from "./pages/organizerPage/OrganizerPage.jsx";
import Profile from "./pages/profile/Profile.jsx";
import AddActivity from "./pages/addActivity/AddActivity.jsx";
import Registration from "./pages/registration/Registration.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import InfoActivity from "./pages/infoActivity/InfoActivity.jsx";
import Weekend from "./pages/weekend/Weekend.jsx";
import Header from "./components/header/Header.jsx";
import Login from "./pages/login/Login.jsx";
import AuthContextProvider, {AuthContext} from "./context/AuthContext.jsx";
import {useContext} from "react";
// import Test from "./pages/TestSignIn.jsx";

// import TestSignIn from "./pages/TestSignIn.jsx";

function App() {
const { isAuth } = useContext(AuthContext);

    return (
        <AuthContextProvider>
        <>
            <div className="full-page">
                <div className="app-layout">
                    <Navigation/>
                    <Header/></div>
                <main>
                    <Routes>

                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/homepage" element={<Homepage/>}/>
                        <Route path="/activiteit-toevoegen" element={<AddActivity/>}/>
                        <Route path="/alle-activiteiten" element={<OrganizerPage/>}/>
                        <Route path="/profiel" element={<Profile/>}/>
                        {/*<Route path="/profiel" element={isAuth ? <Profile/> : <navigate to="/"/>}/>*/}
                        <Route path="/registratie" element={<Registration/>}/>
                        {/*<Route path="/informatie" element={<InfoActivity/>}/>*/}
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/weekend" element={<Weekend/>}/>
                        <Route path="/activity/:id" element={<InfoActivity/>} />
                        {/*<Route path="/testen" element={<TestSignIn/>}/>*/}
                        <Route path="/inloggen" element={<Login/>}/>

                    </Routes>

                </main>
             <Footer/>
            </div>
    </>
        </AuthContextProvider>
    );
}

export default App
