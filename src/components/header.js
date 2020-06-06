import React from 'react';
import '../stylesheets/header.css';

class Header extends React.Component{

    handleKeyDown = (e) => {
        e.key === 'Enter' &&
        this.props.search();
    }

    render(){
        return(
            <div className = "header-container">
                <div className="container">
                    <span>
                        <input type="text" onKeyDown={this.handleKeyDown} placeholder="Search here" value={this.props.searchInput} onChange={this.props.handleChangeSearch}/>
                        <div onClick={this.props.search} > Search </div>
                    </span>
                    <h3 onClick={this.props.backHome}>Barnacle Hub</h3>       
                </div>
            </div>
        )
    }
}

export default Header;