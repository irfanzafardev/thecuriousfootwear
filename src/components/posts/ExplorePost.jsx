import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./explorepost.css";

const ExplorePost = () => {
	const [posts, setPosts] = useState([]);
	const [name, setName] = useState("");

	const rootAPI = "https://thecuriousfootwear-server.vercel.app/api/post";
	const fetchPosts = async () => {
		const { data } = await axios.get(rootAPI + "/all");
		setPosts(data);
	};

	const fetchPostsById = async () => {
		const { data } = await axios.get(rootAPI + "/63ae118b4e0635a84f07cb82");
		setName(data.title);
	};
	useEffect(() => {
		fetchPosts();
		fetchPostsById();
	}, []);
	return (
		<section className="explore-post">
			<div className="container-fluid">
				<div className="heading">
					<h1>ExplorePost</h1>
				</div>
				<div className="d-none">
					<input
						type="text"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div className="row">
					{posts.map((post) => (
						<div className="col-12 col-lg-4" key={post.id}>
							<Link to={`post/${post.id}`} style={{ textDecoration: "none" }}>
								<div className="card">
									<img src={post.image} className="card-img-top" alt="product" />
									<div className="card-body">
										<h5 className="card-title">{post.title}</h5>
										<p className="card-text">{post.description}</p>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExplorePost;
