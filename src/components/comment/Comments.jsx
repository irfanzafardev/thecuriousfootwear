import React from "react";
import CreateComment from "./CreateComment";
import SingleComment from "./SingleComment";

import "./comments.css";

const Comments = () => {
	return (
		<>
			<CreateComment />
			<SingleComment />
		</>
	);
};

export default Comments;
