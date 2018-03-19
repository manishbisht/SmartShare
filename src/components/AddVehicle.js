/**
 * Created by manish on 20/3/18.
 */
import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

class AddVehicle extends Component {
    componentWillMount() {
        console.log(this.props.currentUser);
    }

    render() {
        return (
            <center>
                <Avatar
                    src={this.props.currentUser.photoURL}
                    size={200}
                />
                <Subheader>Name: {this.props.currentUser.displayName}</Subheader>
                <Subheader>Email: {this.props.currentUser.email} {this.props.currentUser.emailVerified ? '(Verified)' : ''}</Subheader>
            </center>
        );
    }
}

export default AddVehicle;