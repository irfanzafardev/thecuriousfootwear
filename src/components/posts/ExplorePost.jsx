import axios from "axios";
import React, { useEffect, useState } from "react";
import "./explorepost.css";

const ExplorePost = () => {
	const [posts, setPosts] = useState([]);

	const rootAPI = "https://thecuriousfootwear-server.vercel.app/api";
	const fetchPosts = async () => {
		const { data } = await axios.get(rootAPI + "/posts");
		setPosts(data);
	};
	useEffect(() => {
		fetchPosts();
	}, []);
	return (
		<section className="explore-post">
			<div className="container-fluid">
				<div className="heading">
					<h1>ExplorePost</h1>
				</div>
				{posts.map((post) => (
					<div className="card mb-4" key={post.id}>
						<img src={post.image} className="card-img-top" alt="..."></img>
						<div className="card-body">
							<h5 className="card-title">{post.title}</h5>
							<p className="card-text">{post.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ExplorePost;
