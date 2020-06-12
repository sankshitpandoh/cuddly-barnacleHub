import React from 'react';
import '../stylesheets/rightUserPannel.css';
import TopNav from './rightUserPannelComponents/topNav';
import Repositories from './rightUserPannelComponents/repositories';
import Followers from './rightUserPannelComponents/followers';
import Following from './rightUserPannelComponents/following';

class RightUserPanel extends React.Component{
    state ={
        topNav : [
                  {Overview : ""},
                  {Repositories :this.props.data.public_repos},
                  {Followers : this.props.data.followers},
                  {Following : this.props.data.following}
                ],
        activeOption : 0
    }

    changeActiveOption = (x) => {
        this.setState({
            activeOption : x
        })
    }

    render(){
        return(
            <div className = "right-user-pannel-container">
                <TopNav data = {this.state.topNav} activeOption = {this.state.activeOption} changeActiveOption = {this.changeActiveOption} />
                {this.state.activeOption === 1 &&
                    <Repositories data={this.props.data} />    
                }
                {this.state.activeOption === 2 &&
                    <Followers data={this.props.data} openUser={this.props.openUser} />    
                }
                {this.state.activeOption === 3 &&
                    <Following data={this.props.data} openUser={this.props.openUser} />    
                }
            </div>
        )
    }
}

export default RightUserPanel;