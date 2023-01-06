import React from "react";
import { AiOutlineLike } from "react-icons/ai";

import "./comment.css";
import UserInfo from "./UserInfo";

const Comment = ({ comments }) => {
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};
	return (
		<>
			{comments.length > 0 ? (
				<div>
					{comments.map((comment) => (
						<div className="comment" key={comment.id}>
							<div className="user-profile">
								<img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
							</div>
							<div className="comment-detail">
								<div>
									<UserInfo commentId={comment.id} />
									<div className="date">
										{/* {moment(`${comment.createdAt}`, "YYYYMMDD").fromNow()} | <span>{comment.likeCount} like</span> */}
										{formatDate(`${comment.createdAt}`)} | <span>{comment.likeCount} like</span>
										{/* {comment.createdAt} */}
									</div>
									<div className="comment-body">{comment.body}</div>
									<div className="suggested-price">IDR{comment.price}</div>
								</div>
								<div>
									<button className="like">
										<AiOutlineLike size="1.4em" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<p>No comment at the moment</p>
			)}
		</>
	);
};

export default Comment;
