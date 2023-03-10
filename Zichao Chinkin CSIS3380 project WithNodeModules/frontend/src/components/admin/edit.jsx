import { useEffect } from 'react';
import { useState } from 'react'


const Edit = ({ user, onEdit = f => f }) => {
    console.log(user);

    const [_id, setId] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Admin, setAdmin] = useState("");

    useEffect(() => {
        setId(user._id);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setAdmin(user.admin)
    }, [user]);

    const submit = (event) => {
        event.preventDefault();

        onEdit(_id, Name, Email, Password, Admin);


    }
    return (
        <div>
            <h1>Update the User Info</h1>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name='_id'
                        placeholder="Enter a New ID"
                        value={user._id}
                        key={user._id}
                        readOnly

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="rating"
                        name='name'
                        placeholder="Enter Name"
                        defaultValue={user.name}
                        key={user.name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name='email'
                        placeholder="Enter Email"
                        defaultValue={user.email}
                        key={user.email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numberInStock">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        id="numberInStock"
                        name='password'
                        placeholder="Enter new Password"
                        defaultValue={user.password}
                        key={user.password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="checkbox" defaultChecked={user.admin} key={user.admin} onChange={(event) => setAdmin(event.target.checked)} id="Admin" name="Admin" />
                    <label htmlFor="Admin">Admin</label>
                </div>
                <button type="submit" className='btn btn-success'>Save</button>
            </form>
        </div>
    );
};

export default Edit;
