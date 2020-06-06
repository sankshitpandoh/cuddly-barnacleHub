import React from 'react';
import '../../stylesheets/rightUserPanel/topNav.css'


const dataItems = ["Overview" , "Repositories", "Followers", "Following"]
class TopNav extends React.Component{
    render(){
        const resultItems = this.props.data.map((x,index) => {
            return <div
                    className = "single-top-nav-item"
                    key={index}>
                    <p>{dataItems[index]}</p>
                    {index != 0 && <span>{x[dataItems[index]]}</span>}
                    </div>
                }   
            );
        console.log(this.props.data.length)
        return(
            <div className="top-nav-container">
                {resultItems}
            </div>
        )
    }
}

export default TopNav;