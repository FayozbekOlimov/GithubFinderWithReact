import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class UserItem extends Component {
    render() {
        const {login, id, avatar_url} = this.props.user;

        return (
            <div className="card" key={id}>
                <div className="card-body">
                    <img src={avatar_url} alt="user avatar" style={{ width: '70px', borderRadius: '50%' }} />
                    <h4 className="mt-3 mb-3">{login}</h4>
                    <Link className="btn btn-dark w-100 btn-sm" to={`/user/${login}`}>More</Link>
                </div>
            </div>
        );
    }
}

export default UserItem
