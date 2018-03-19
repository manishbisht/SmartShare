/**
 * Created by manish on 20/3/18.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Smart Share"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.props.handleToggle}>
                </AppBar>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.props.open}>
                    <MenuItem onClick={() => this.props.openTab('add-vehicle')}>Add New Vehicle</MenuItem>
                    <MenuItem onClick={() => this.props.openTab('all-vehicle')}>My Vehicles</MenuItem>
                    <MenuItem onClick={() => this.props.openTab('profile')}>My Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}><i class="fa fa-history" aria-hidden="true"></i> &nbsp; Your Rides</MenuItem>
                    <MenuItem onClick={this.handleClose}><i class="fa fa-lightbulb-o" aria-hidden="true"></i> &nbsp; Pay Electricity Bill</MenuItem>
                    <MenuItem onClick={this.handleClose}><i class="fa fa-tint" aria-hidden="true"></i> &nbsp; Pay Water Bill</MenuItem>
                    <MenuItem onClick={this.handleClose}><i class="fa fa-gift" aria-hidden="true"></i> &nbsp; Refer &amp; Earn</MenuItem>
                    <MenuItem onClick={this.handleClose}><i class="fa fa-id-card" aria-hidden="true"></i> &nbsp; Emergency Contacts</MenuItem>
                    <MenuItem onClick={this.handleClose}><i class="fa fa-life-ring" aria-hidden="true"></i> &nbsp; Support</MenuItem>
                </Drawer>
            </div>

        );
    }
}

export default Header;