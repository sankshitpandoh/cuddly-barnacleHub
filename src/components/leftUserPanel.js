import React from 'react';
import '../stylesheets/leftUserPanel.css';

function LeftUserPanel(props){
return(
    <div className="leftUserPanel">
        <figure>
            <img src={props.data.avatar_url} alt ="display-avatar" />
        </figure>
        <h1>{props.data.name}</h1>
        <h2>{props.data.login}</h2>
        <div className="statusContainer">
            <p>
                {props.data.bio}
            </p>
        </div>
        <span className="organisation">{props.data.company}</span>
        <span className="location">{props.data.location}</span>
        {/* <span className="email"><a href={"mailto:" + props.data.email}>{props.data.email}</a></span> */}
        <span className="blog"><a href={props.data.blog}>{props.data.blog}</a></span>
   </div>
)
}

export default LeftUserPanel;
