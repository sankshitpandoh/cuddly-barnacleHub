import React from 'react';
import '../stylesheets/rightUserPannel.css';
import TopNav from './rightUserPannelComponents/topNav';

class RightUserPanel extends React.Component{
    state ={
        topNav : [
                  {Overview : ""},
                  {Repositories :this.props.data.public_repos},
                  {Followers : this.props.data.followers},
                  {Following : this.props.data.following}
                ]
    }
    render(){
        return(
            <div className = "right-user-pannel-container">
                <TopNav data = {this.state.topNav} />
            </div>
        )
    }
}

export default RightUserPanel;