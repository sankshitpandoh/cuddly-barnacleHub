import React from 'react';
import '../stylesheets/single-repo-list-item.css';

class SingleRepositoryListItem extends React.Component{
    render(){
        return(
                <div
                    className = "single-repo-list-item">
                        <h3 onClick={() => this.props.showUser(this.props.det)}>
                            {this.props.details.full_name}
                        </h3>
                        <p>
                            {this.props.details.description}
                        </p>
                        <div className="other-details">
                            {this.props.details.stargazers_count !== 0 &&
                                <span>
                                    <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                                    {this.props.details.stargazers_count}
                                </span>
                             }
                             {this.props.details.language !== null &&
                                <span>{this.props.details.language}</span>
                             }
                             {/* {this.props.details.license !== undefined &&
                                <span>{this.props.details.license.name}</span>
                             }
                             {console.log(this.props.details.license)} */}
                            <span>Updated on {this.props.details.updated_at}</span>
                        </div>
                </div>
        )
    }
}

export default SingleRepositoryListItem;