import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comments from "../comment/Comments";
import MiniSpinner from "../loading/MiniSpinner";
import "./singlepost.css";

const SinglePost = () => {
	const path = useLocation().pathname.split("/")[2];
	const [post, setPost] = useState(null);

	const rootAPI = "https://thecuriousfootwear-server.vercel.app/api/post/";

	useEffect(() => {
		const fetchPost = async () => {
			const { data } = await axios.get(rootAPI + path);
			setPost(data);
		};
		fetchPost();
	}, [path]);

	return (
		<section className="single-post">
			<div className="sidebar">
				{post ? (
					<>
						<div className="product-wrapper">
							<div className="product-category">
								<p>Category</p>
							</div>
							<div className="product-name">
								<h1>{post.title}</h1>
							</div>
							<div className="product-brand">
								<p>Brand</p>
							</div>
							<div className="product-price">
								<div className="row">
									<div className="col-6 initial-price">
										<p>usd{post.price}</p>
									</div>
									<div className="col-6">
										<div className="suggested-price">
											<p>usd{post.suggested_price}</p>
										</div>
										<span>Avg. Suggested Price</span>
									</div>
								</div>
							</div>
							<div className="buttons">
								<div className="btn btn-outline-dark">Give Feedback</div>
								<div className="btn btn-outline-dark">Add to Favorite</div>
							</div>
						</div>
					</>
				) : (
					<div className="spinner-container">
						<MiniSpinner />
					</div>
				)}
			</div>

			<div className="main">
				{post ? (
					<>
						<div className="heading">
							<img src={post.image} alt="product" />
						</div>
						<div className="container-fluid">
							<div className="body">
								<div className="product-name">
									<h1>{post.title}</h1>
								</div>
								<div className="product-desc">
									<h2>description</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
						</div>
					</>
				) : (
					<div className="spinner-container">
						<MiniSpinner />
					</div>
				)}
				<section className="comments">
					<div className="container-fluid">
						<div className="heading">
							<h1>Feedback</h1>
						</div>
						{post ? (
							<Comments postId={post.id} />
						) : (
							<div className="comment-spinner-container">
								<MiniSpinner />
							</div>
						)}
					</div>
				</section>
			</div>
		</section>
	);
};

export default SinglePost;
