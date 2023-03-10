import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
class RegisterForm extends Component {



    state = {
        userInfo: {
            name: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        errMsg: [],

    }
    hanle = async e => {

        e.preventDefault();
        this.setState({ errMsg: [] });
        const { data } = await this.props.registerFn.registerAc(this.state.userInfo);

        if (data.status === 1) {

            return this.setState({
                errMsg: data.msg
            })


        }


        this.props.navigate('/home')



    }
    hanleChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }

        })
    }

    render() {
        const { name, email, password, passwordConfirm } = this.state.userInfo;
        const { errMsg } = this.state;

        return (

            <div id="register">
                <form class="box" onSubmit={this.hanle} >
                    <h1>Register</h1>
                    <input type="text" name="name" placeholder="Username" defaultValue={name} onChange={this.hanleChange} />
                    <small className='text-danger'>{errMsg[0] === 'name' && errMsg[1]}</small>
                    <input type="email" name="email" placeholder="email" defaultValue={email} onChange={this.hanleChange} />
                    <small className='text-danger'>{errMsg[0] === 'email' && errMsg[1]}</small>
                    <input type="password" name="password" placeholder="password" defaultValue={password} onChange={this.hanleChange} />
                    <small className='text-danger'>{errMsg[0] === 'password' && errMsg[1]}</small>
                    <input type="password" name="passwordConfirm" placeholder="passwordConfirm" defaultValue={passwordConfirm} onChange={this.hanleChange} />
                    <small className='text-danger'>{errMsg[0] === 'passwordConfirm' && errMsg[1]}</small>
                    <input type="submit" name="" value="Register" />
                </form>
            </div>
        )
    }
}
function WithNavigate(props) {
    let navigate = useNavigate();
    return <RegisterForm {...props} navigate={navigate} />
}
export default WithNavigate