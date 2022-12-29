import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../services/auth/authSlice";
import Spinner from "../loading/Spinner";
import "./login.css";

const LoginForm = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const { username, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { currentUser, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			alert(message);
		}

		if (isSuccess || currentUser) {
			window.location.reload();
			navigate("/");
		}

		dispatch(reset());
	}, [currentUser, isError, isSuccess, message, navigate, dispatch]);

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			username,
			password,
		};
		dispatch(login(userData));
	};
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<section className="login-form">
			<h2>Log in</h2>
			<form onSubmit={handleSubmit}>
				<div className="input-group">
					<input type="text" id="username" name="username" placeholder="Enter your username" value={username} onChange={handleChange}></input>
					<label>Username</label>
				</div>
				<div className="input-group">
					<input type="password" id="password" name="password" placeholder="Create your password" value={password} onChange={handleChange}></input>
					<label>Password</label>
				</div>
				<div className="item-btn float-end">
					<button type="submit" className="btn btn-outline-dark">
						Log in
					</button>
				</div>
			</form>
		</section>
	);
};

export default LoginForm;
