import React from "react";
import UserInfo from "./UserInfo";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import "./comment.css";
import { getCommentById, likeComment, unlikeComment } from "../../services/comment/singleCommentSlice";
import { useDispatch, useSelector } from "react-redux";

const Comment = ({ comment }) => {
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	// console.log(comment);
	// const { currentComment } = useSelector((state) => state.singlecomment);

	const handleMouseEnter = async () => {
		dispatch(getCommentById(comment.id));
		// console.log(comment.id);
	};

	// Like a comment
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const handleLike = async () => {
		dispatch(likeComment(comment.id));
		console.log(comment);
	};

	const handleUnlike = async () => {
		dispatch(unlikeComment(comment.id));
		console.log(comment);
	};
	return (
		<div className="comment" onMouseEnter={handleMouseEnter}>
			<div className="user-profile">
				<img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
			</div>
			<div className="comment-detail">
				<div>
					<UserInfo commentId={comment.id} />
					<div className="date">
						{formatDate(`${comment.createdAt}`)} | <span>{comment?.like.length} like</span>
					</div>
					<div className="comment-body">{comment.body}</div>
					<div className="suggested-price">IDR{comment.price}</div>
				</div>
				<div>
					{comment?.like.includes(user?.userId.toString()) ? (
						<button className="like" onClick={handleUnlike}>
							<AiFillHeart size="1.4em" />
							{comment?.like.length}
						</button>
					) : (
						<button className="like" onClick={handleLike}>
							<AiOutlineHeart size="1.4em" />
							{comment?.like.length}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Comment;
