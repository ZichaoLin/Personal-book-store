import { Form } from "react-router-dom"

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../../css/style.css";
import LoginForm from "./LoginForm";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actionCreators as loginActionCreators } from './store'


class Login extends Component {
  render() {
    return (
      <LoginForm {...this.props} />
    );
  }
}
const mapStateToProps = state => {
  return {
    loginData: state.login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginFn: bindActionCreators(loginActionCreators, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);