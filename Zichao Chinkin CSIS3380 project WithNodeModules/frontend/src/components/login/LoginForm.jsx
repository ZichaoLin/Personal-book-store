import React, { Component } from 'react'
import axios from "../../utils/request";
import { useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';

class LoginForm extends Component {

    state = {
        userInfo: {
            email: "",
            password: ""

        },
        msg: ""
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { data } = await this.props.loginFn.loginAc(this.state.userInfo);
        if (data.status === 0) {
            //put user infor in Redux
            this.props.loginFn.syncInfoAc(decode(data.token));
            this.props.navigate('/home')
            localStorage.setItem('@#@TOKEN', data.token);

        }
        else {
            return this.setState({
                msg: "Password or email incorrect!"
            })
        }
    };
    change = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value

            }
        })
    }
    render() {
        const { email, password } = this.state.userInfo;
        return (
            <div id="login" >
                <form className="box" action="/Home" method="GET" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <input type="email" name="email" placeholder="Email" defaultValue={email} onChange={this.change} />
                    <input type="password" name="password" placeholder="password" defaultValue={password} onChange={this.change} />
                    <small className='text-danger'>{this.state.msg}</small>
                    <input type="submit" name="" value="Login" />
                </form>
            </div>
        )
    }
}
function Login(props) {
    let navigate = useNavigate();
    return <LoginForm {...props} navigate={navigate} />
}
export default Login;
