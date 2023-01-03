import React from "react";
import { AiOutlineLike } from "react-icons/ai";

import "./comment.css";

const Comment = () => {
	return (
		<div className="comment">
			<div className="user-profile">
				<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
			</div>
			<div className="comment-detail">
				<div>
					<div className="username">Username</div>
					<div className="date">
						A moment ago | <span>1 like</span>
					</div>
					<div className="comment-body">The comment body</div>
					<div className="suggested-price">IDR1.400.000</div>
				</div>
				<div>
					<button className="like">
						<AiOutlineLike size="1.4em" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Comment;
