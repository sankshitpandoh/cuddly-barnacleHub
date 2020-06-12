import React from 'react';
import '../../stylesheets/rightUserPanel/followers.css';
import Loader from '../loader';

let resultItems;
class Followers extends React.Component{
    state={
        page: 1,
        data: "",
        loading: false
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

    loadContent = () => {
        resultItems = this.state.data.map((x,index) => {
            return <div
                    className = "single-follower-item"
                    key={index}>
                        <img src={x.avatar_url} alt="avatar"/>
                        <h3 onClick={() => this.props.openUser(x)}>
                            {x.login}
                        </h3>
                    </div>
                }   
            );
    }
    render(){
        return(
            <>
                {this.state.loading ?
                    <Loader></Loader>
                    :
                    <h1>{resultItems}</h1>

                }
            </>
        )
    }
}

export default Followers;