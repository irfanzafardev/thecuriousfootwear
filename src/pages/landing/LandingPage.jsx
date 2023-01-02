import React from "react";
import FeaturedComment from "../../components/comment/FeaturedComment";
import DailyFeedback from "../../components/dailyfeedback/DailyFeedback";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import ExplorePost from "../../components/posts/ExplorePost";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<DailyFeedback />
			<ExplorePost />
			<FeaturedComment />
			<Footer />
		</div>
	);
};

export default LandingPage;
