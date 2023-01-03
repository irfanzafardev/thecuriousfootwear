import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import "./uploadform.css";

const UploadForm = ({ setOpen }) => {
	return (
		<section className="upload">
			<div className="wrapper">
				<div className="close" onClick={() => setOpen(false)}>
					<AiOutlineClose />
				</div>
				<div className="heading">
					<h1>What footwear do you want to share?</h1>
				</div>
				<form>
					<div className="input-group">
						<input type="text" id="username" name="username"></input>
						<label>Product name</label>
					</div>
					<div className="input-group">
						<input type="text" id="username" name="username"></input>
						<label>Product brand</label>
					</div>
					<div class="input-group">
						<input type="file" class="upload-image" />
						<label>Product image</label>
					</div>
					<div className="input-group">
						<textarea type="text" id="username" name="username"></textarea>
						<label>Product description</label>
					</div>
					<div className="input-group">
						<input type="text" id="username" name="username"></input>
						<label>Product purchase date</label>
					</div>
					<div className="row price-row">
						<div className="col-6">
							<div className="input-group">
								<input type="text" id="firstName" name="first_name"></input>
								<label>Original price</label>
							</div>
						</div>
						<div className="col-6">
							<div className="input-group">
								<input type="text" id="lastName" name="last_name"></input>
								<label>Initial price</label>
							</div>
						</div>
					</div>
					<div className="input-group">
						<input type="text" id="username" name="username"></input>
						<label>Product condition</label>
					</div>
					<div className="input-group">
						<select class="form-select" aria-label="Default select example">
							<option selected>Category</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>

					<button className="btn btn-primary">Publish</button>
				</form>
			</div>
		</section>
	);
};

export default UploadForm;
