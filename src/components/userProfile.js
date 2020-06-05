import React from 'react';
import '../stylesheets/userProfile.css';
import LeftUserPanel from './leftUserPanel';
import Loader from './loader';

class UserProfile extends React.Component{
    render(){
        return(
            <>
            {!this.props.loading ? 
                <div className="container">
                    <LeftUserPanel data = {this.props.data} />
                </div>
                :
                <Loader />
            }

            </>
        )
    }
}

export default UserProfile