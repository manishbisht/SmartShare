import React, {Component} from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import * as firebase from "firebase";
import * as FirebaseUI from 'firebaseui'
var config = {
    apiKey: "AIzaSyDkfRXm3IqwYtirAqear7IX9v0mJ8HkjNM",
    authDomain: "skit-rajasthan-hackathon.firebaseapp.com",
    databaseURL: "https://skit-rajasthan-hackathon.firebaseio.com",
    projectId: "skit-rajasthan-hackathon",
    storageBucket: "skit-rajasthan-hackathon.appspot.com",
    messagingSenderId: "834983110145"
};
firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isLoggedIn: false,
            error: null,
        };

        this.registerLogin = this.registerLogin.bind(this);
    }

    checkLogin() {
        let self = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                self.setState({
                    currentUser: user,
                    isLoggedIn: true
                });
            }
            else {
                self.setState({
                    isLoggedIn: false
                });
            }
        });
    }

    registerLogin() {
        let self = this;
        let uiConfig = {
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            'callbacks': {
                signInSuccess: function(currentUser, credential, redirectUrl) {
                    self.setState({
                        user: currentUser,
                        isLoggedIn: true
                    });
                }
            },
        };
        let ui = new FirebaseUI.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }

    componentWillMount() {
        this.checkLogin();
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <Dashboard currentUser={this.state.currentUser} />
            );
        } else {
            return (
                <Login registerLogin={this.registerLogin} />
            );
        }
    }
}

export default App;
