import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    static defaultProps = {
        title: "Github Finder",
        icon: "fab fa-github"
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <span className="navbar-brand mb-0 fw-bolder">
                            <i className={this.props.icon}></i> {this.props.title}
                        </span>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;
