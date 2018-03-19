/**
 * Created by manish on 19/3/18.
 */
import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Profile from './Profile';
class Dashboard extends Component {
    constructor(props) {
    super(props);

    this.state = {
        open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (

      <div>
          <AppBar
                title="Smart Share"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.handleToggle}/>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
          <Profile currentUser={this.props.currentUser}/>
      </div>
    );
  }
}

export default Dashboard;
