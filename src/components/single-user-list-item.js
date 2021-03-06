import React from 'react';
import '../stylesheets/single-user-list-item.css';

class SingleUserListItem extends React.Component{
    render(){
        return(
            <div
                className = "single-result-item">
                    <figure>
                        <img src={this.props.details.avatar_url} alt ="display-avatar" />
                    </figure>
                    <h3 onClick={() => this.props.showUser(this.props.details)} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
                        {this.props.details.login}
                    </h3>
            </div>
        )
    }
}
export default SingleUserListItem;