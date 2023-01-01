import React from "react";
import FeaturedComment from "../../components/comment/FeaturedComment";
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
			<FeaturedComment />
			<Footer />
		</div>
	);
};

export default LandingPage;
