import React from 'react';

class UserProfile extends React.Component{
    render(){
        return(
            <>
            <h1>{this.props.data.login}</h1>
            </>
        )
    }
}

export default UserProfile