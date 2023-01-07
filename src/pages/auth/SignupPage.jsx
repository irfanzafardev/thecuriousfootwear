import React from "react";
import SignUpNavbar from "../../components/navbar/SignUpNavbar";
import SignUpForm from "../../components/auth/signup/SignUpForm";
import Footer from "../../components/footer/Footer";

const SignUpPage = () => {
	return (
		<div>
			<SignUpNavbar />
			<SignUpForm />
			<Footer />
		</div>
	);
};

export default SignUpPage;
