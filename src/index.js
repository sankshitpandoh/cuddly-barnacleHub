import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/reset.css';
import './stylesheets/font-face.css'
import './stylesheets/index.css';
import Header from './components/header';
import Welcome from './components/Welcome';
import LeftPanel from './components/leftPanel';
import DisplayPannel from './components/displayPannel';
import UserProfile from './components/userProfile';
import Loader from './components/loader';

const API = "https://api.github.com/";
const searchQueries = ["search/users?q=" , "search/repositories?q="];

class App extends React.Component{
    state = {
        onHome : true,
        searchInput : "",
        value : "",
        searchParameter : searchQueries[0] ,
        data : "",
        activeOption : 0,
        openUser : false,
        currentUser : "",
        loading: false,
        currentPage : 1
    }

    backHome = () =>{
        this.setState({
            onHome : true
        })
    }

    handleChangeSearch = (e) => {
        this.setState({
            searchInput : e.target.value,
        });
    }

    handleCategory = (x) => {
        this.setState({ 
            activeOption : x,
            searchParameter : searchQueries[x],
        }, () => { this.fetchSearch() })
        // console.log(x)
    }

    search = () => {
        this.state.searchInput.trim() !== "" &&
        this.setState({
            value : this.state.searchInput,
            searchParameter : searchQueries[0],
            openUser : false,
            currentUser : "",
            activeOption : 0,
            onHome: false,
            loading: true
        }, () => {this.fetchSearch()})
    }

    fetchSearch = () => {
        this.setState({
            searchParameter : this.state.searchParameter + this.state.searchInput,
            loading: true
        }, () => {
            let url = API + this.state.searchParameter;
            console.log(url)
            fetch(url)
            .then((res) => res.json() )
            .then((data) => {
                this.setState({
                    data : data,
                },() => {
                    this.setState({
                        loading: false
                    })
                })
            })
        })
    }

    /* fix get more data */
    getMoreData = (x) => {
        console.log(x)
        this.setState({
            searchParameter : this.state.searchParameter + this.state.searchInput + "&page=" + x
        }, () => {
            let url = API + this.state.searchParameter;
            fetch(url)
            .then((res) => res.json() )
            .then((data) => {
                this.setState({
                    data : [this.state.data.concat(data)] /* fix here */
                })
            })
        })
    }

    showUser = (x) => {
        this.setState({
            loading: true
        })
        fetch(x.url)
        .then((res) => res.json() )
        .then((data) => {
            this.setState({
                openUser : true,
                currentUser: data
            }, () => {
                this.setState({
                    loading: false
                })
            })
        })

    }
    render(){
        return(
            <>
            <Header state={this.state} search = {this.search} handleChangeSearch = {this.handleChangeSearch} backHome={this.backHome} />
                {this.state.onHome ?
                <Welcome />
                :
                !this.state.openUser ?
                <div className = "content-container">
                {!this.state.loading ?
                    <>
                    <LeftPanel active = {this.state.activeOption} handleCategory = {this.handleCategory}/>
                    {!this.state.loading ?
                        <DisplayPannel data = {this.state.data} activeOption={this.state.activeOption} showUser = {this.showUser} getMoreData= {this.getMoreData} />
                        :
                        <Loader />
                    }
                    </>
                    :
                    <Loader />
                    }
                </div>
                :
                <UserProfile data={this.state.currentUser} loading = {this.state.loading} openUser={this.showUser} />
                }

            </>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
)