import React from "react";
import Footer from "../../components/footer/Footer";
import SignupNavbar from "../../components/navbar/SignupNavbar";
import SignupForm from "../../components/signup/SignupForm";

const SignupPage = () => {
	return (
		<div>
			<SignupNavbar />
			<SignupForm />
			<Footer />
		</div>
	);
};

export default SignupPage;
