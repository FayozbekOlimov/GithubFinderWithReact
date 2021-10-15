import './App.css';
import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/users/User';

class App extends React.Component {
	state = {
		users: [],
		user: {},
		loading: false,
		alert: null,
		repos: null
	};

	searchUsers = async (text) => {
		this.setState({ loading: true });
		const API = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
		const req = await fetch(API);
		const data = await req.json();
		this.setState({
			users: data.items,
			loading: false
		});
	}

	getUser = async (user) => {
		this.setState({ loading: true });
		const API = `https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
		const req = await fetch(API);
		const data = await req.json();
		console.log(data);
		this.setState({
			user: data,
			loading: false
		});
	}

	getRepos = async (user) => {
		this.setState({ loading: true });
		const API = `https://api.github.com/users/${user}/repos?sort=created?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
		const req = await fetch(API);
		const repos = await req.json();
		this.setState({
			repos,
			loading: false
		});
	}

	clearUsers = () => {
		this.setState({
			users: []
		});
	}

	showAlert = (msg, classType) => {
		this.setState({
			alert: { msg: msg, classType: classType }
		});
		setTimeout(() => {
			this.setState({
				alert: null
			});
		}, 3000);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar
						title="Github Finder"
						icon="fab fa-github"
					/>
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						userLength={this.state.users.length ? true : false}
						showAlert={this.showAlert}
					/>
					<Switch>
						<Route exact path="/">
							<Users
								users={this.state.users}
								loading={this.state.loading}
							/>
							<Alert
								alert={this.state.alert}
							/>
						</Route>
						<Route
							exact
							path="/user/:login"
							render={(props) => <User {...props} getUser={this.getUser} user={this.state.user} getRepos={this.getRepos} repos={this.state.repos} loading={this.state.loading} />}>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;