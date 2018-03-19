/**
 * Created by manish on 20/3/18.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Header from './Header';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

class AddVehicle extends Component {
    componentWillMount() {
        console.log(this.props.currentUser);
    }

    render() {
        return (
            <div>
                <Header handleToggle={this.props.handleToggle} open={this.props.open} openTab={this.props.openTab}/>
                <center>
                <TextField
                    hintText="Honda City"
                    floatingLabelText="Car Name"
                /><br/>

                <TextField
                    hintText="RJ33 CA 0094"
                    floatingLabelText="Car Number"
                /><br/>

                <RaisedButton label="Add Vehicle" primary={true} style={style}/>
                </center>
            </div>
        );
    }
}

export default AddVehicle;