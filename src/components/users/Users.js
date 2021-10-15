import React from 'react'
import UserItem from './UserItem'

const Users = ({ users, loading }) => {
    return loading ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-danger m-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning m-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-success m-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    ) : (
        <div className="grid container text-center my-3">
            {users.map(user => <UserItem key={user.id} user={user} />)}
        </div>
    );
}

export default Users;
