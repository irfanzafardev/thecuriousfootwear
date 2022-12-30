import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comments from "../comment/Comments";
import "./singlepost.css";

const SinglePost = () => {
	const path = useLocation().pathname.split("/")[2];
	const [post, setPost] = useState({});

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
					<p>{post.title}</p>
				</div>
				<Comments postId={post.id} />
			</div>
		</section>
	);
};

export default SinglePost;
