import React from "react";
import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
	const { user } = useSelector((state) => state.auth);
	return (
		<section className="header">
			<div className="container-fluid">
				<h1>Header</h1>
				{user ? <p>"{user.first_name}" has logged in</p> : <p>No one has logged in</p>}
			</div>
		</section>
	);
};

export default Header;
