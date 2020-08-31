import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div>
                <h1>You're currently logged {this.state.isLoggedIn ? 'In' : 'Out'}</h1>
            </div>
        );
    }
}

export default Login;