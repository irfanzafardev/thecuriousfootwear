import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../services/auth/authSlice";
import Spinner from "../loading/Spinner";

import "./signup.css";

const SignupForm = () => {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		username: "",
		phone_number: "",
		about: "",
		password: "",
		confirmPassword: "",
	});

	const { first_name, last_name, email, username, phone_number, about, password, confirmPassword } = formData;

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

	const hanldeSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("salah password");
		} else {
			const userData = {
				first_name,
				last_name,
				email,
				username,
				phone_number,
				about,
				password,
			};

			dispatch(register(userData));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<section className="signup-form">
			<h2>Sign up</h2>
			<form onSubmit={hanldeSubmit}>
				<div className="input-group">
					<input type="text" id="firstName" name="first_name" placeholder="Enter your first name" value={first_name} onChange={handleChange}></input>
					<label>First name</label>
				</div>
				<div className="input-group">
					<input type="text" id="lastName" name="last_name" placeholder="Enter your last name" value={last_name} onChange={handleChange}></input>
					<label>Last name</label>
				</div>
				<div className="input-group">
					<input type="text" id="email" name="email" placeholder="Enter your email" value={email} onChange={handleChange}></input>
					<label>Email</label>
				</div>
				<div className="input-group">
					<input type="text" id="username" name="username" placeholder="Enter your email" value={username} onChange={handleChange}></input>
					<label>Username</label>
				</div>
				<div className="input-group">
					<input type="text" id="phone_number" name="phone_number" placeholder="Enter your phone number" value={phone_number} onChange={handleChange}></input>
					<label>Phone</label>
				</div>
				<div className="input-group">
					<input type="text" id="about" name="about" placeholder="Enter your bio" value={about} onChange={handleChange}></input>
					<label>About</label>
				</div>
				<div className="input-group">
					<input type="password" id="password" name="password" placeholder="Create your password" value={password} onChange={handleChange}></input>
					<label>Password</label>
				</div>
				<div className="input-group">
					<input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={handleChange}></input>
					<label>Confirm Password</label>
				</div>
				<div className="item-btn float-end">
					<button type="submit" className="btn btn-outline-dark">
						Sign Up
					</button>
				</div>
			</form>
		</section>
	);
};

export default SignupForm;
