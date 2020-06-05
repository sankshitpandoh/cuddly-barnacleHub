import React from 'react';
import '../stylesheets/loader.css'

class Loader extends React.Component{
    render(){
        return(
            <div className="loader-container">
                      <div class="spinner"></div>
            </div>
        )
    }
}

export default Loader;