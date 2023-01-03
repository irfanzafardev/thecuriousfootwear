import React from "react";
import UploadForm from "../../components/post/UploadForm";

const UploadPostPage = ({ setOpen }) => {
	return (
		<div>
			<UploadForm setOpen={setOpen} />
		</div>
	);
};

export default UploadPostPage;
