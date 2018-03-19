/**
 * Created by manish on 19/3/18.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import '../css/firebaseui.css';

class Login extends Component {
    componentWillMount() {
        this.props.registerLogin();
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Smart Share"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                <div id="firebaseui-auth-container"></div>
            </div>
        );
    }
}

export default Login;