import React from "react";
import "./createcomment.css";

const CreateComment = () => {
	return (
		<div className="comment-form">
			<div className="user-profile">
				<img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
			</div>
			<div className="form-input">
				<p>Name</p>
				<input type="text" placeholder="Add a feedback..." />
			</div>
		</div>
	);
};

export default CreateComment;
