import React from 'react';
import '../stylesheets/displayPannel.css';


function DisplayPannel(props){
    console.log(props.data.total_count)
        return(
            <div className="displayPannel">
                <div className="container">
                    <h3> UserName :</h3>
                </div>
            </div>
        )
    
}

export default DisplayPannel;