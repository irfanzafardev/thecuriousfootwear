import React, { useEffect, useState } from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";

import "./comments.css";
import axios from "axios";

const Comments = ({ user, postId }) => {
	const [comments, setComments] = useState([]);

	const rootAPI = "https://thecuriousfootwear-server.vercel.app/api/";
	useEffect(() => {
		const fetchComments = async () => {
			const commentRes = await axios.get(rootAPI + `comment/getCommentsByPostId/${postId}`);
			setComments(commentRes.data);
		};
		fetchComments();
	}, [postId]);
	return (
		<>
			<CreateComment user={user} />
			<Comment postId={postId} comments={comments} />
		</>
	);
};

export default Comments;
