import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MiniSpinner from "../loading/MiniSpinner";
import Null from "../loading/Null";
import CategorySlider from "../category/CategorySlider";
import "./explorepost.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, reset } from "../../services/post/postSlice";

const ExplorePost = () => {
	const dispatch = useDispatch();
	const { posts, isLoading, isError, message } = useSelector((state) => state.post);

	// const fetchPostsById = async () => {
	// 	const { data } = await axios.get(rootAPI + "/63b2eb39c2a98d0be03bd693");
	// 	setName(data.title);
	// };
	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		dispatch(getAllPost());
		return () => {
			dispatch(reset());
		};

		// fetchPostsById();
	}, [isError, message, dispatch]);
	if (isLoading) {
		return (
			<section className="explore-post">
				<div className="container-fluid">
					<div className="heading">
						<h1>What's new</h1>
					</div>
					<div className="mt-5">
						<MiniSpinner />;
					</div>
				</div>
			</section>
		);
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
					{posts.length > 0 ? (
						posts.map((post) => (
							<div className="col-12 col-lg-3" key={post.id}>
								<Link to={`post/${post.id}`} style={{ textDecoration: "none" }}>
									<div className="card">
										<img src={post.image} className="card-img-top" alt="product" />
										<div className="card-body">
											{/* <p className="post-category">Category</p> */}
											<h2 className="post-title">{post.title}</h2>
											{/* <p className="post-desc">{post.description}</p> */}
											<div className="price row">
												<div className="col-8">
													<p>Most Suggested Price</p>
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
						<Null />
					)}
				</div>
			</div>
		</section>
	);
};

export default ExplorePost;
