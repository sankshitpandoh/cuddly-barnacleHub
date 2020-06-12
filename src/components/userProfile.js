import React from 'react';
import '../stylesheets/userProfile.css';
import Loader from './loader';
import LeftUserPanel from './leftUserPanel';
import RightUserPanel from './rightUserPanel';

class UserProfile extends React.Component{
    render(){
        return(
            <>
            {!this.props.loading ? 
                <div className="container">
                    <LeftUserPanel data = {this.props.data} />
                    <RightUserPanel data = {this.props.data} openUser={this.props.openUser} />
                </div>
                :
                <Loader />
            }

            </>
        )
    }
}

export default UserProfile