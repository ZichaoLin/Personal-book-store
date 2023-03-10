import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from "react";
import axios from '../../utils/request';

import { FaEdit, FaTrash } from 'react-icons/fa';
// import GetUsers from './store/getUsers';
import Edit from './edit';




class AdminPage extends Component {
    state = {
        users: [],
        Form: []

    }
    Edit = (_id, name, email, password, admin) => {
        const url = `/api/edit/${_id}`;
        axios.put(url, {
            _id: _id,
            name: name,
            email: email,
            password: password,
            admin: admin

        }).then(() => {
            this.getUser();
            this.setState({ Form: <h1>Updata Success</h1> });
        }

        ).catch((err) => {
            this.setState({ Form: <h1>{err}</h1> });
            console.log("ERROR: ", err);
        });



    }

    handleEdit = async user => {

        this.setState({ Form: < Edit user={user} onEdit={this.Edit} /> });



    };



    handleDelete = async id => {


        // console.log(id);
        const url = `http://localhost:5000/api/Delete/${id}`;
        const { data } = await axios.delete(url);
        console.log(data);
        this.getUser();

    };

    getUser = () => {
        const url = "http://localhost:5000/api/usersinfo";
        axios
            .get(url)
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            });
    }

    componentDidMount() {
        this.getUser();


    }

    render() {
        const users = (this.state.users);
        const Form = this.state.Form;
        return (

            < div >
                <h1>UserDatabase</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>_id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Admin</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>

                            <tr key={index}>
                                <th >{user._id}</th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>{user.password}</th>
                                <th>{user.admin ? "Admin" : "User"}</th>
                                <td> <FaEdit onClick={() => this.handleEdit(user)} /> </td>
                                <td> <FaTrash onClick={() => this.handleDelete(user._id)} /> </td>
                            </tr>

                        )}


                    </tbody>
                </table>
                {Form}
            </div >
        )

    }


}

function Admin(props) {
    let navigate = useNavigate();



    return <AdminPage {...props} navigate={navigate} />;
}
export default Admin;