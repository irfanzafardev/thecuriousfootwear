import React from "react";
import UserInfo from "./UserInfo";
import { AiOutlineHeart } from "react-icons/ai";

import "./comment.css";
import { likeComment } from "../../services/comment/commentSlice";
import { useDispatch } from "react-redux";

const Comment = ({ comment }) => {
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	// Like a comment
	const dispatch = useDispatch();
	const handleLike = async () => {
		dispatch(likeComment(comment.id));
		console.log(comment.id);
	};
	return (
		<div className="comment">
			<div className="user-profile">
				<img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
			</div>
			<div className="comment-detail">
				<div>
					<UserInfo commentId={comment.id} />
					<div className="date">
						{formatDate(`${comment.createdAt}`)} | <span>{comment.likeCount} like</span>
					</div>
					<div className="comment-body">{comment.body}</div>
					<div className="suggested-price">IDR{comment.price}</div>
				</div>
				<div>
					<button className="like" onClick={handleLike}>
						<AiOutlineHeart size="1.4em" />
						{/* {posts.like?.includes(user?.userId.toString()) ? <AiFillLike size="1.4em" /> : <AiOutlineLike size="1.4em" />} {posts.like?.length} */}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Comment;
