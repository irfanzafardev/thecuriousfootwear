import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import ExplorePost from "../../components/posts/ExplorePost";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<ExplorePost />
			<Footer />
		</div>
	);
};

export default LandingPage;
