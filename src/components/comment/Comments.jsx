import React from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";

import "./comments.css";

const Comments = ({ user, postId }) => {
	return (
		<>
			<CreateComment user={user} />
			<Comment />
		</>
	);
};

export default Comments;
