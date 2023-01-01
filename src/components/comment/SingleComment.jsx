import React from "react";
import "./comment.css";

const SingleComment = () => {
	return (
		<div className="comment">
			<div className="user-profile">
				<img src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
			</div>
			<div className="comment-detail">
				<div className="username">Username</div>
				<div className="date">A moment ago</div>
				<div className="comment-body">The comment body</div>
			</div>
		</div>
	);
};

export default SingleComment;
