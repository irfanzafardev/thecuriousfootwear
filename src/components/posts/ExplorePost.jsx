import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MiniSpinner from "../loading/MiniSpinner";
import Null from "../loading/Null";
import CategorySlider from "../category/CategorySlider";
import "./explorepost.css";

const ExplorePost = () => {
	const [posts, setPosts] = useState(null);
	// const [name, setName] = useState("");

	const rootAPI = "https://thecuriousfootwear-server.vercel.app/api/post";
	const fetchPosts = async () => {
		const { data } = await axios.get(rootAPI + "/all");
		setPosts(data);
	};

	// const fetchPostsById = async () => {
	// 	const { data } = await axios.get(rootAPI + "/63b2eb39c2a98d0be03bd693");
	// 	setName(data.title);
	// };
	useEffect(() => {
		fetchPosts();
		// fetchPostsById();
	}, []);

	let result;
	if (posts?.length === 0) {
		result = <Null />;
	}
	return (
		<section className="explore-post">
			<div className="container-fluid">
				<div className="heading">
					<h1>What's new</h1>
				</div>
				<div className="category-slider">
					<CategorySlider />
				</div>
				{/* <div className="d-none">
					<input
						type="text"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div> */}
				<div className="row">
					{posts ? (
						posts.map((post) => (
							<div className="col-12 col-lg-3" key={post.id}>
								<Link to={`post/${post.id}`} style={{ textDecoration: "none" }}>
									<div className="card">
										<img src={post.image} className="card-img-top" alt="product" />
										<div className="card-body">
											<p className="post-category">Category</p>
											<h2 className="post-title">{post.title}</h2>
											<p className="post-desc">{post.description}</p>
											<div className="price row">
												<div className="col-8">
													<p>Avg. Suggested Price</p>
												</div>
												<div className="col-4">
													<span>${post.suggested_price}</span>
												</div>
											</div>
										</div>
									</div>
								</Link>
							</div>
						))
					) : (
						<MiniSpinner />
					)}
					{result}
				</div>
			</div>
		</section>
	);
};

export default ExplorePost;
