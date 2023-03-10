import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './weatherAPI';
import logo from '../images/booksIcon.png';
import { connect } from 'react-redux';
import { Component } from 'react';
import { logout } from '../components/login/store/actionCreators'



class NavBar extends Component {





    render() {
        console.log(this.props.loginData);
        return (
            <div id="body" >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <nav className="navbar bg-light">
                        <div className="container-fluid">
                            <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />

                            <Link className="navbar-brand" to="/home"> Home</Link>

                        </div>
                    </nav>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to="/books">Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-warning" to="/carts">Shopping Carts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary" to="/locations">Locations</Link>
                            </li>
                            {(this.props.loginData.isAuth && this.props.loginData.user.admin)
                                ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-danger" to="/admin">Admin Option</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-danger" to="/editBooks">Edit Book List</Link>
                                    </li>

                                </>
                                :
                                <></>
                            }

                        </ul>

                    </div>
                    <div className="d-flex" role="Login" style={{ paddingRight: "10px" }}>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item" style={{ paddingRight: "10px" }}  >
                                <Weather />
                            </li>
                            {
                                this.props.loginData.isAuth
                                    ?
                                    this.props.loginData.user.admin
                                        ?
                                        <> <li className="nav-item" style={{ paddingRight: "10px" }} >
                                            <Link className="btn btn-success" to="/register">addUser</Link>
                                        </li>
                                            <li className="nav-item" >
                                                <a className="btn btn-danger" to="/Logout" onClick={this.props.logout}>Logout</a>
                                            </li></>
                                        :
                                        <>
                                            <li className="nav-item" >
                                                <a className="btn btn-danger" to="/Logout" onClick={this.props.logout}>Logout</a>
                                            </li></>
                                    :
                                    <>
                                        <li className="nav-item" style={{ paddingRight: "10px" }} >
                                            <Link className="btn btn-light" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item" >
                                            <Link className="btn btn-success" to="/register">Register</Link>
                                        </li>
                                    </>

                            }




                        </ul>

                    </div>
                </nav>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login
    }
}

export default connect(mapStateToProps, { logout })(NavBar);


