/**
 * Created by manish on 19/3/18.
 */
import React, {Component} from 'react';
import Header from './Header';
import Profile from './Profile';
import AddVehicle from './AddVehicle';
import MyVehicles from './MyVehicles';
class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            currentTab: null
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.openTab = this.openTab.bind(this);
    }

    handleToggle = () => this.setState({open: !this.state.open});

    openTab(tabName) {
        this.setState({
            open: false,
            currentTab: tabName,
        });
    }

    render() {
        if (this.state.currentTab === 'profile') {
            return <Profile currentUser={this.props.currentUser} handleToggle={this.handleToggle} open={this.state.open} openTab={this.openTab}/>;
        } else if (this.state.currentTab === 'add-vehicle') {
            return <AddVehicle currentUser={this.props.currentUser} handleToggle={this.handleToggle} open={this.state.open} openTab={this.openTab}/>
        } else if (this.state.currentTab === 'all-vehicle') {
            return <MyVehicles currentUser={this.props.currentUser} handleToggle={this.handleToggle} open={this.state.open} openTab={this.openTab}/>
        } else {
            return (
                <div>
                    <Header handleToggle={this.handleToggle} open={this.state.open} openTab={this.openTab}/>
                </div>
            );
        }
    }
}

export default Dashboard;
