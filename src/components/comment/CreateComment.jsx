import React from "react";
import "./createcomment.css";

const CreateComment = ({ user }) => {
	return (
		<>
			{user ? (
				<div className="comment-form">
					<div className="user-profile">
						<img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
					</div>
					<div className="form-input">
						<p>
							{user.first_name}
							{user.last_name}
						</p>
						<input type="text" placeholder="Add a feedback..." />
						<input type="number" className="currency" placeholder="" />
						<button type="submit" className="btn btn-outline-dark" disabled>
							Send
						</button>
					</div>
				</div>
			) : (
				<div className="note">
					<h2>Please log in to give your feedback.</h2>
				</div>
			)}
		</>
	);
};

export default CreateComment;
