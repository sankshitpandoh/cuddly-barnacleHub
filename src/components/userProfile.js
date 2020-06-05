import React from 'react';
import '../stylesheets/userProfile.css';
import LeftUserPanel from './leftUserPanel';

class UserProfile extends React.Component{
    render(){
        return(
            <>
                <div className="container">
                    <LeftUserPanel data = {this.props.data} />
                </div>
            </>
        )
    }
}

export default UserProfile