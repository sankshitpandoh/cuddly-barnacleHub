import React from 'react';
import '../stylesheets/header.css';

class Header extends React.Component{
    render(){
        return(
            <div className = "header-container">
                <div className="container">
                    <span>
                        <input type="text" placeholder="Search here" value={this.props.searchInput} onChange={this.props.handleChangeSearch}/>
                        <div onClick={this.props.search}> Search </div>
                    </span>
                    <h3 onClick={this.props.backHome}>Barnacle Hub</h3>       
                </div>
            </div>
        )
    }
}

export default Header;