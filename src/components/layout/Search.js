import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.type]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.trim() === '') {
            this.props.showAlert('Please enter something ...', 'danger');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({
                text: ''
            });
        }
    }

    render() {
        return (
            <div className="container">
                <form className="mt-4 mb-2" onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control mb-2" value={this.state.text} autoComplete="off" placeholder="Search Github Users" id="search" onChange={this.handleChange} />
                    <button className="btn btn-primary w-100 my-1">SEARCH</button>
                </form>
                {
                    this.props.userLength && (
                        <button onClick={this.props.clearUsers} className="btn btn-outline-danger w-100">CLEAR</button>
                    )
                }
            </div>
        );
    }
}

export default Search
