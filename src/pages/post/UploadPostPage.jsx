import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import UploadForm from "../../components/post/UploadForm";

const UploadPostPage = () => {
	return (
		<div>
			<Navbar />
			<UploadForm />
			<Footer />
		</div>
	);
};

export default UploadPostPage;
