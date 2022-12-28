import React from "react";

const SignupForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	// const rootAPI = "https://thecuriousfootwear-server.vercel.app/";

	return (
		<section className="signup-form">
			<h2>Sign up</h2>
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
						Sign Up
					</button>
				</div>
			</form>
		</section>
	);
};

export default SignupForm;
