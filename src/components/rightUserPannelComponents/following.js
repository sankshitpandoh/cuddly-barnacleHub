import React from 'react';
import '../../stylesheets/rightUserPanel/followers.css';
import Loader from '../loader';
import SingleUserListItem from '../single-user-list-item';


let resultItems; 
class Following extends React.Component{
    state={
        page: 1,
        data: "",
        loading: false
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        let string = this.props.data.following_url
        string = string.replace('{/other_user}', '');
        fetch(string)
        .then((res) => res.json() )
        .then((data) => {
            this.setState({
                data: data
            }, () => {
                this.setState({
                    loading: false
                })
            })
        })
    }
    showUserDetails = (x, y) => {
        fetch(x.url)
        .then((res) => res.json() )
        .then((data) => {
            this.setState({
                userDetails: data
            }, () => {
                this.setState({
                    showUserDetails : true,
                    userDetailsIndex: y
                }, () => {console.log("state updated")})
            })
        })
    }
    
    hideDetails = () => {
        this.setState({
            showUserDetails: false,
            userDetailsIndex: ""
        })
    }

    render(){
        this.state.data.length !== 0 ?
        resultItems = this.state.data.map((x,index) => {
            return <div className="single-follow-container" key={index}> 
                    { this.state.userDetailsIndex === index  &&
                       this.state.showUserDetails &&
                        <div className="user-details">
                            <div className="details-container">
                                <img src={this.state.userDetails.avatar_url} alt= "avatar" />
                                <div>
                                    <h3> {this.state.userDetails.name} <span> @{this.state.userDetails.login} </span> </h3>
                                    <p> {this.state.userDetails.bio} </p>
                                </div>
                            </div>
                            <div className="details-bottom-container">
                                {this.state.userDetails.location !== null &&
                                    <p> {this.state.userDetails.location} </p>
                                }
                                {this.state.userDetails.company !== null &&
                                    <p> {this.state.userDetails.company} </p>
                                }
                            </div>
                    </div>
                    }
                        <SingleUserListItem showUser={this.props.openUser} details={x} onMouseEnter={() => this.showUserDetails(x, index)} onMouseLeave= {this.hideDetails} />
                   </div>
            }
        )
        :
        resultItems = <p className="empty"> {this.props.data.login}  doesn't follow anyone  </p>
        return(
            <>
                {this.state.loading ?
                    <Loader></Loader>
                    :
                    <div>{resultItems}</div>

                }
            </>
        )
    }
}

export default Following;