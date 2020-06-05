import React from 'react';
import '../stylesheets/displayPannel.css';

class DisplayPannel extends React.Component{
    /* Read how to add pagination as items length != total_count */
    
    render(){
        const resultItems = this.props.data.items.map((x,index) => {
        return <div
                className = "single-result-item"
                key={index}>
                    <figure>
                        <img src={x.avatar_url} alt ="display-avatar" />
                    </figure>
                    <h3 onClick={() => this.props.showUser(x)}>
                        {x.login}
                    </h3>
                </div>
            }   
        );
        return(
            <div className="displayPannel">
                <div className="container">
                    {resultItems}
                </div>
            </div>
        )
    }
}

export default DisplayPannel;