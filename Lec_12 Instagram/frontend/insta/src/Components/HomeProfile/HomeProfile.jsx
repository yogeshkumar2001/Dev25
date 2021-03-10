
import axios from 'axios';
import React, { Component } from 'react';
import "./HomeProfile.css";

class HomeProfile extends Component {
    state = {
        suggestions: []
    }

    componentDidMount() {
        // suggestions ?
        let uid = this.props.user["_id"];
        axios.get(`/api/request/suggestions/${uid}`).then(obj => {
            let suggestions = obj.data.suggestions;
            console.log(suggestions);
            this.setState({
                suggestions: suggestions
            })
        })

    }

    render() {
        let { name, bio, profilePic } = this.props.user;
        return (<div className="home-profile">
            <div className="user-info">
                <div className="user-image">
                    <img src={profilePic} alt="" />
                </div>
                <div className="name">
                    <p>{name}</p>
                    <p class="bio"><strong>{bio}</strong></p>
                </div>
            </div>
            {this.state.suggestions.length ? <div className="user-suggestions">
                <h2 class="bio">Suggestions for you</h2>
                {this.state.suggestions.map(suggestionUser => {
                    return <div key={suggestionUser["_id"]} className="suggestion-user">
                        <div className="suggestion-profile-photo">
                            <img src={suggestionUser.profilePic} alt="" />
                        </div>
                        <div className="suggestion-details">
                            <div className="user-deatils">
                                <div className="name">{suggestionUser.name}</div>
                                <div className="bio">{suggestionUser.bio}</div>
                                </div>
                            <div className="follow-btn">
                                <div className="follow">Follow</div>
                            </div>
                        </div>
                    </div>
                })}
            </div> : <h1>NO Suggestions !</h1>}

        </div>);
    }
}

export default HomeProfile;