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

    render(){
        this.state.data.length !== 0 ?
        resultItems = this.state.data.map((x,index) => {
            return <SingleUserListItem key={index} showUser={this.props.openUser} details={x} />
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