import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import Comments from "../comment/Comments";
import MiniSpinner from "../loading/MiniSpinner";
import "./singlepost.css";

import { AiOutlineLike, AiOutlineDislike, AiFillDislike, AiFillLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPost } from "../../services/post/postSlice";

const SinglePost = () => {
	const path = useLocation().pathname.split("/")[2];
	const [post, setPost] = useState("");
	const [owner, setOwner] = useState("");

	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { posts } = useSelector((state) => state.post);

	const rootAPI = "https://thecuriousfootwear-server.vercel.app/api/";

	useEffect(() => {
		const fetchOwner = async () => {
			try {
				const postRes = await axios.get(rootAPI + "post/" + path);
				const userRes = await axios.get(rootAPI + `user/profil/${postRes.data.userId}`);
				setPost(postRes.data);
				setOwner(userRes.data);
				dispatch(getCurrentPost(postRes.data._id));
			} catch (error) {
				console.log(error);
			}
		};
		fetchOwner();
	}, [path, dispatch]);

	// Like and dislike post
	// const { user } = useSelector((state) => state.auth);
	// const { post } = useSelector((state) => state.auth);
	const handleLike = async () => {
		// await axios.put(`/users/like/${currentVideo._id}`);
		// dispatch(like(currentUser._id));
	};

	const handleDislike = async () => {
		// await axios.put(`/users/dislike/${currentVideo._id}`);
		// dispatch(dislike(currentUser._id));
	};
	return (
		<section className="single-post">
			<div className="sidebar d-none d-lg-block">
				{post ? (
					<>
						<div className="product-wrapper">
							<div className="product-category">
								<p>{post.category}</p>
							</div>
							<div className="product-name">
								<h1>{post.title}</h1>
							</div>
							<div className="product-brand">
								<p>{post.brand}</p>
							</div>
							<div className="product-price">
								<div className="row">
									<div className="col-6 col-divider">
										<div className="initial-price">
											<p>IDR{post.price}</p>
										</div>
										<span className="initial-price">Initial Price</span>
									</div>
									<div className="col-6">
										<div className="suggested-price">
											<p>IDR{post.suggested_price}</p>
										</div>
										<span className="suggested-price">Most Suggested Price</span>
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
								<div className="post-detail">
									<div className="user">
										<div className="user-profile">{owner[0].image ? <img src="" alt="" /> : <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />}</div>
										<div className="user-info">
											<div>
												<div className="username">
													{owner[0].first_name} {owner[0].last_name}
												</div>
												<div className="created-at">A moment ago</div>
											</div>
										</div>
										<div className="follow">
											<div className="follow-user">Follow</div>
										</div>
									</div>
									<div className="post-option">
										<div className="like-post">
											<button className="like" onClick={handleLike}>
												{posts.like?.includes(user._id) ? <AiFillLike size="1.4em" /> : <AiOutlineLike size="1.4em" />} {posts.like?.length}
											</button>
											<button onClick={handleDislike}>
												{posts.dislike?.includes(user._id) ? <AiFillDislike size="1.4em" /> : <AiOutlineDislike size="1.4em" />} {posts.dislike?.length}
											</button>
										</div>
										<div className="share-post">Share</div>
									</div>
								</div>
								<div className="product-desc">
									<h2>Description</h2>
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
							<Comments postId={post.id} user={user} />
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
