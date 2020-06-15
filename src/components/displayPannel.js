import React from 'react';
import '../stylesheets/displayPannel.css';
import SingleRepositoryListItem from './single-repo-list-item'

let resultItems

class DisplayPannel extends React.Component{
    /* Read how to add pagination as items length != total_count or add request on scroll
    also handle if no results found*/
    state ={
        currentPage : 1
    }

    // handleScroll = (e) =>{
    //     console.log("i am here")
    //     let element = e.target;
    //     let flagHeight = element.scrollHeight * 80 / 100
    //     if(element.scrollTop >=  flagHeight){
    //         this.setState({
    //             currentPage: this.state.currentPage + 1
    //         }, () => {
    //             this.props.getMoreData(this.state.currentPage)
    //         })
    //     }
    // }

    render(){
        this.props.activeOption === 0 ?
        resultItems = this.props.data.items.map((x,index) => {
        return <div
                className = "single-result-item"
                key={index}>
                    <figure>
                        <img src={x.avatar_url} alt ="display-avatar" />
                    </figure>
                    <h3 onClick={() => this.props.showUser(x)}>
                        {x.login}
                    </h3>
                </div>
            }   
        )
        :
        resultItems = this.props.data.items.map((x,index) => {
            return <SingleRepositoryListItem index={index} showUser={this.props.showUser} details={x} />
                }   
            )
        return(
            <div className="displayPannel">
                <div className="container" >
                    {resultItems}
                </div>
            </div>
        )
    }
}

export default DisplayPannel;