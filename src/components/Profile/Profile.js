import React from "react";
import './Profile.css';

class Profile extends React.Component {

    render() {
        return (
            <div className="Profile">
                <h2>{this.props.profile.firstName} {this.props.profile.lastName}</h2>
                <p>{this.props.profile.status}</p>
            </div>

        )
    }
}

export default Profile;