import React from "react";
import CreateComment from "./CreateComment";
import Comment from "./Comment";

import "./comments.css";

const Comments = () => {
	return (
		<>
			<CreateComment />
			<Comment />
		</>
	);
};

export default Comments;
