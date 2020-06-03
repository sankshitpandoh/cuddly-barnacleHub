import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/reset.css';
import './stylesheets/font-face.css'
import './stylesheets/index.css';
import Header from './components/header';
import LeftPanel from './components/leftPanel';
import DisplayPannel from './components/displayPannel';

const API = "https://api.github.com/";
const searchQueries = ["search/users?q=" , "search/repositories?q="]

class App extends React.Component{
    state = {
        searchInput : "",
        value : "",
        searchParameter : searchQueries[0] ,
        data : "",
        activeOption : 0,
    }

    handleChangeSearch = (e) => {
        this.setState({
            searchInput : e.target.value,
        });
    }

    handleCategory = (x) => {
        this.setState({ 
            activeOption : x,
            searchParameter : searchQueries[x]
        }, () => { this.fetchSearch() })
        // console.log(x)
    }

    search = () => {
        this.setState({
            value : this.state.searchInput,
            searchParameter : searchQueries[0],
            activeOption : 0
        }, () => { this.fetchSearch()})
    }

    fetchSearch = () => {
        this.setState({
            searchParameter : this.state.searchParameter + this.state.searchInput
        }, () => {
            let url = API + this.state.searchParameter;
            console.log(url)
            fetch(url)
            .then((res) => res.json() )
            .then((data) => {
                console.log(data)
                this.setState({
                    data : data,
                })
            })
        })
    }

    render(){
        return(
            <>
            <Header state={this.state} search = {this.search} handleChangeSearch = {this.handleChangeSearch} />
            <div className = "content-container">
            <LeftPanel active = {this.state.activeOption} handleCategory = {this.handleCategory}/>
            {this.state.data !== "" &&
                <DisplayPannel data = {this.state.data} />
            }
            </div>
            </>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
)