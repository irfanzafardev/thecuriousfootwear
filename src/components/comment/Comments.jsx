import React from "react";
import CreateComment from "./CreateComment";
import SingleComment from "./SingleComment";

const Comments = () => {
	return (
		<div>
			<CreateComment />
			<div>Comments</div>
			<SingleComment />
		</div>
	);
};

export default Comments;
