import React from 'react';
import '../../stylesheets/rightUserPanel/topNav.css'


const dataItems = ["Overview" , "Repositories", "Followers", "Following"];

class TopNav extends React.Component{
    render(){
        const resultItems = this.props.data.map((x,index) => {
            return this.props.activeOption === index ?
                    <div
                    className = "single-top-nav-item active-option"
                    key={index}>
                    <p>{dataItems[index]}</p>
                    {index !== 0 && <span>{x[dataItems[index]]}</span>}
                    </div>
                    :
                    <div
                    className = "single-top-nav-item"
                    key={index} onClick = { () => this.props.changeActiveOption(index) }>
                    <p>{dataItems[index]}</p>
                    {index !== 0 && <span>{x[dataItems[index]]}</span>}
                    </div>
                }   
            );
        return(
            <div className="top-nav-container">
                {resultItems}
            </div>
        )
    }
}

export default TopNav;