/**
 * Created by manish on 20/3/18.
 */
import React, {Component} from 'react';
import Header from './Header';

class MyVehicles extends Component {
    componentWillMount() {
        console.log(this.props.currentUser);
    }

    render() {
        return (
            <div>
                <Header handleToggle={this.props.handleToggle} open={this.props.open} openTab={this.props.openTab}/>
            </div>
        );
    }
}

export default MyVehicles;