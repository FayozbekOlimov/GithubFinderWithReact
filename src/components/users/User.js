import React from 'react'
import { Link } from 'react-router-dom';

class User extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getRepos(this.props.match.params.login);
    }

    render() {
        const { avatar_url, name, html_url, followers, following, company, location, bio, public_repos } = this.props.user;
        return !this.props.loading && (
            <div className="container">
                <Link to="/" className="btn btn-secondary btn-md my-3"><i className="fas fa-arrow-left"></i> Go Back</Link>
                <div className="card p-3 my-2">
                    <div className="row">
                        <div className="col-12 col-md-6 my-2 text-center">
                            <img src={avatar_url} alt="user photography" style={{ width: '200px', borderRadius: '10px' }} />
                            <h3 className="my-2">{name}</h3>
                            <h6 className="m-0">{location}</h6>
                        </div>
                        <div className="col-12 col-md-6 my-2 text-center text-md-start">
                            <ul className="navbar-nav">
                                <li>
                                    {
                                        bio && <p className="mb-2"><span className="h5">Bio: </span>{bio}</p>
                                    }
                                </li>
                                <li>
                                    {

                                        company && <p className="mb-2"><span className="h5">Company: </span>{company}</p>
                                    }
                                </li>
                            </ul>
                            <div>
                                <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-dark my-2"><i className="fab fa-github"></i> Github Profile</a>
                            </div>
                            <div className="d-flex flex-wrap justify-content-evenly justify-content-md-start">
                                <button className="btn btn-primary my-2 me-3">
                                    Followers: {followers}
                                </button>
                                <button className="btn btn-warning my-2 me-3">
                                    Following: {following}
                                </button>
                                <button className="btn btn-success my-2">
                                    Repos: {public_repos}
                                </button>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-evenly">
                                {
                                    this.props.repos && this.props.repos.map((repo, index) => {
                                        return index <= 3 && (
                                            <div className="card repo m-2 border border-danger" key={repo.id} style={{width: '15rem'}}>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item pt-0">
                                                        <a href={repo.svn_url} target="_blank" rel="noreferrer" className="fs-5 d-block mb-2 repo-link" style={{ textDecoration: "none"}}>{repo.name}</a>
                                                        <div className="d-flex justify-content-between">
                                                            <p className="h6 mb-0"><i className="text-success fas fa-star"></i> {repo.stargazers_count}</p>
                                                            <p className="h6 mb-0"><i className="text-success fas fa-code"></i> {repo.language}</p>
                                                            <p className="h6 mb-0"><i className="text-success fas fa-cloud-download-alt"></i> {repo.size}KB</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User
