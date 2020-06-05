import React from 'react';
import '../stylesheets/Welcome.css';

function Welcome(){
    return(
        <div className = "welcome-container">
            <h3> Welcome to </h3>
            <h1>Barnacle Hub</h1>
            <p>A GitHub Browsing platform made using React</p>
            <footer>
                <span>Made with love by : <a href="">Sankshit Pandoh</a></span>
            </footer>
        </div>
    )
}

export default Welcome;