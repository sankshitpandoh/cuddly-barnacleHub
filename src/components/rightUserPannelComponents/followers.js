import React from 'react';
import '../../stylesheets/rightUserPanel/followers.css';
import Loader from '../loader';

let resultItems;
class Followers extends React.Component{
    state={
        page: 1,
        data: "",
        loading: false,
        showUserDetails : false,
        userDetails : "",
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        fetch(this.props.data.followers_url)
        .then((res) => res.json() )
        .then((data) => {
            this.setState({
                data: data
            }, () => {
                this.loadContent()
                this.setState({
                    loading: false
                })
            })
        })
    }

    showUserDetails = (x) => {
        fetch(x.url)
        .then((res) => res.json() )
        .then((data) => {
            this.setState({
                userDetails: data
            }, () => {
                this.setState({
                    showUserDetails : true
                })
            })
        })
    }

    loadContent = () => {
        this.state.data.length !== 0 ?
            resultItems = this.state.data.map((x,index) => {
                return <div
                    className = "single-follower-item"
                    key={index}>
                        <img src={x.avatar_url} alt="avatar"/>
                        {this.state.showUserDetails &&
                            <div className="user-details">
                            <div className="details-container">
                                <img src={this.state.userDetails.avatar_url} alt= "avatar" />
                                {this.state.userDetails.name}
                            </div>
                            <div className="details-bottom-container"></div>
                        </div>
                        }
                        <h3 onClick={() => this.props.openUser(x)} onMouseEnter={() => this.showUserDetails(x)} >
                            {x.login}
                        </h3>
                    </div>
                }
            )
            :
            resultItems = <p className="empty"> {this.props.data.login}  has zero followers  </p>
    }
    render(){
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

export default Followers;