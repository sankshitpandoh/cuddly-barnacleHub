import React from 'react';
import '../stylesheets/displayPannel.css';


function DisplayPannel(props){
    /* Read how to add pagination as items length != total_count */
    console.log(props.data.items.length)
    let totalCount = props.data.total_count
    console.log(totalCount)
        return(
            <div className="displayPannel">
                <div className="container">
                    <h3> UserName :</h3>
                </div>
            </div>
        )
    
}

export default DisplayPannel;