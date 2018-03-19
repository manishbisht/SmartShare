import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            currentUser: null,
            isLoggedIn: false,
            error: '',
            currentBoard: null,
        };
    }

    render() {
        return (
            <div>
                <AppBar
                title="Smart Share"
                iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            </div>
        );
    }
}

export default App;
