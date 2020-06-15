import React from 'react';
import '../stylesheets/single-repo-list-item.css';

class SingleRepositoryListItem extends React.Component{
    render(){
        return(
                <div
                    className = "single-repo-list-item"
                    key={this.props.index}>
                        <h3 onClick={() => this.props.showUser(this.props.det)}>
                            {this.props.details.full_name}
                        </h3>
                        <p>
                            {this.props.details.description}
                        </p>
                        <div className="other-details">
                            {this.props.details.stargazers_count !== 0 &&
                                <span>{this.props.details.stargazers_count}</span>
                             }
                             {/* {this.props.details.license !== undefined &&
                                <span>{this.props.details.license.name}</span>
                             } */}
                             {console.log(this.props.details.license)}
                            <span>Updated on {this.props.details.updated_at}</span>
                        </div>
                </div>
        )
    }
}

export default SingleRepositoryListItem;