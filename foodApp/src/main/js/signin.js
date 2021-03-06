/**
 * Created by Fate on 2/28/2017.
 */
import React from 'react';
import { Link } from 'react-router'

var SignIn = React.createClass({
    getInitialState(){
        return{
            userName: '',
            password: '',
            authenticated: ''
        }
    },

    handleUserChange (e){
        e.preventDefault();
        this.setState({userName: e.target.value});
    },

    handlePasswordChange (e)
    {
        e.preventDefault();
        this.setState({password: e.target.value});
    },

    handleSubmit(e){
        e.preventDefault();
        let userName = this.state.userName;
        let password = this.state.password;
        fetch('http://localhost:8080/signin/signinUser?'
            + 'userName=' + userName + '&password=' + password, {
                method: 'GET',
                headers: {
                    "Content-Type": "json"
                }
            }
        ).then(res => {
            if (res.ok) {
                alert('we good');
                this.setState({authenticated: true})
            }
            else {
                alert('pw or username error...');
                this.setState({authenticated: false})
            }
        })
    },

    render (){
        return (
            <div className="signin">
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your username</label>
                    <div>
                        <input type="text"
                           placeholder="Username"
                           onChange={this.handleUserChange}/>
                    </div>
                    <label>Enter your password</label>
                    <div>
                    <input type="password"
                           placeholder="Password"
                           onChange={this.handlePasswordChange}/>
                    </div>
                    <input type="submit"
                           value="Sign In"/>
                </form>
                <label>Don't have an account?
                    <Link to="/createaccount" style={{display: 'block', height: '80%'}}>Create</Link>
                </label>
            </div>
        )
    }
});

export class UserSignIn extends React.Component{
    render(){
        return(<SignIn/>);
    }
}