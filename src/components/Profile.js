/**
 * Created by manish on 19/3/18.
 */
import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Header from './Header';

class Profile extends Component {
    componentWillMount() {
        console.log(this.props.currentUser);
    }

    render() {
        return (
        <div>
            <Header handleToggle={this.props.handleToggle} open={this.props.open} openTab={this.props.openTab} />
            <center>
                <Avatar
                    src={this.props.currentUser.photoURL}
                    size={200}
                />
                <Subheader>Name: {this.props.currentUser.displayName}</Subheader>
                <Subheader>Email: {this.props.currentUser.email} {this.props.currentUser.emailVerified ? '(Verified)' : ''}</Subheader>
            </center>
        </div>
        );
    }
}

export default Profile;