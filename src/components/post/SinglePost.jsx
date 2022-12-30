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
			<div className="container-fluid">
				<div className="heading">
					<h1>Single post</h1>
				</div>
				{post ? (
					<div className="post">
						<img src={post.image} alt="" />
						<p>{post.title}</p>
					</div>
				) : (
					<MiniSpinner />
				)}
				{post ? <Comments postId={post.id} /> : <MiniSpinner />}
			</div>
		</section>
	);
};

export default SinglePost;
