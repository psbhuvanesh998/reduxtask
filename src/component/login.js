import React, { Component } from 'react';


export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email:'',
                password: '',
            }
        }
        

    }
    render() {

        return (
            <div>
                <h2>Login</h2>
                <form name="form">
                    <input type='email' placeholder='Email' value='email' />
                    <input type='password' placeholder='Password' value='password' />
                    <input type='submit' name='submit' value='Login' />
                </form>
            </div>
        )
    }
}


export default Login;
