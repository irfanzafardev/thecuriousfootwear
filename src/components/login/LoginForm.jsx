import React, { useState } from "react";
import "./login.css";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	// const rootAPI = "https://thecuriousfootwear-server.vercel.app/";

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
		} catch (error) {}
	};
	return (
		<section className="login-form">
			<h2>Log in</h2>
			<form>
				<div className="input-group">
					<input type="text" onChange={(e) => setUsername(e.target.value)} required></input>
					<label>Username</label>
				</div>
				<div className="input-group">
					<input type="password" onChange={(e) => setPassword(e.target.value)} required></input>
					<label>Password</label>
				</div>
				<div className="item-btn float-end">
					<button type="button" className="btn btn-outline-dark" onClick={handleLogin}>
						Log in
					</button>
				</div>
			</form>
		</section>
	);
};

export default LoginForm;
