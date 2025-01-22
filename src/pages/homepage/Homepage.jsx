import './Homepage.css'

import drawingofpeople from '../../assets/drawingofpeople.jpg'
import drawingpeoplehavingfun from '../../assets/drawingpeoplehavingfun.jpg'
function Homepage() {
    return (
        <>
            <div className="homepage">
            <img src={drawingpeoplehavingfun} alt="People having fun"/>

            <h1>getTogether</h1>
            <p>Welkom bij getTogether.</p>
            <p>Dankzij getTogether wordt het organiseren van een leuke activiteit tijdens een weekendje weg gemakkelijk. </p>
              <p>Registreer jezelf via deze link en nodig de mensen met wie je weggaat uit.</p>
                <p>Zij kunnen zichzelf ook registreren en een profiel aanmaken.</p>
                <p>Vervolgens kan iedereen een activiteit uploaden en kan het stemmen beginnen.</p>
                <p>De beheerder ziet ten alle tijden welke activiteit de meeste stemmen heeft.</p>
                <p>Deze activiteit kunnen jullie dan gaan doen tijdens het weekendje weg.</p>






            </div>
        </>

    )
}

export default Homepage;