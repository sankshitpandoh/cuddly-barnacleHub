import React from 'react';
import '../../stylesheets/rightUserPanel/repositories.css';
import Loader from '../loader';

let resultItems 
class Repositories extends React.Component{
    state={
        page: 1,
        data: "",
        loading: false
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        fetch(this.props.data.repos_url)
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
                    className = "single-repo-item"
                    key={index}>
                        <h3>
                            {x.name}
                        </h3>
                        <p>
                            {x.description}
                        </p>
                        <div className="other-details">
                            <span>Updated on {x.updated_at}</span>
                        </div>
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

export default Repositories;