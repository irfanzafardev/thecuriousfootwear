import React from "react";
import { Link } from "react-router-dom";

const SignupNavbar = () => {
	return (
		<nav className="row align-items-center fixed-top">
			<div className="container-fluid">
				<div className="nav-brand">
					<Link to="/" className="link">
						The Curious Footware
					</Link>
				</div>
				<div className="nav-items d-flex">
					<div className="item-btn">
						<Link to="/login" className="link">
							<button type="button" className="btn btn-outline-dark">
								Login
							</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default SignupNavbar;
