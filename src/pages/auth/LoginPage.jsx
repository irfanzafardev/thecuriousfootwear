import React from "react";
import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/login/LoginForm";
import LoginNavbar from "../../components/navbar/LoginNavbar";

const LoginPage = () => {
	return (
		<div>
			<LoginNavbar />
			<LoginForm />
			<Footer />
		</div>
	);
};

export default LoginPage;
