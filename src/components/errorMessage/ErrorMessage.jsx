import {useEffect} from "react";


function ErrorMessage ({ message }) {
    useEffect(() => {
        return function CleanUp(){

        }
    }, []);

    return (
        <span className="error-message">
            <p> {message} </p>
        </span>
    );
}

export default ErrorMessage;