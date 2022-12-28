import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import "./navbar.css";

const Navbar = () => {
	const [isActive, setActive] = useState(false);
	const toggleClass = () => {
		setActive(!isActive);
	};

	const [isSearchActive, setSearchActive] = useState(false);
	const toggleSearchClass = () => {
		setSearchActive(!isSearchActive);
	};

	// const [search, setSearch] = useState("");

	// const rootAPI = "https://thecuriousfootwear-server.vercel.app/";
	return (
		<>
			<nav className="row align-items-center fixed-top">
				<div className="container-fluid">
					<Link to="/" className="link">
						<div className="nav-brand">The Curious Footware</div>
					</Link>
					<div className="nav-items d-lg-flex">
						<div className="item">
							<input className={isSearchActive ? "search-box d-block" : "search-box d-none"} placeholder="Search" />
						</div>
						<div className="item">
							<div className="search-icon" onClick={toggleSearchClass}>
								<BiSearch size="2rem" />
							</div>
						</div>
						<div className="item">
							<Link to="/" className="link">
								Home
							</Link>
						</div>
						<div className="item">
							<span onClick={toggleClass}>Categories</span>
							<ul className={isActive ? "nav-dropdown d-block" : "nav-dropdown d-none"}>
								<li>
									<Link to={`/category?cat=`} className="link">
										<div className="dropdown-item"></div>
									</Link>
								</li>
							</ul>
						</div>

						<div className="item">
							<Link to={`/profile`} className="link">
								Profile
							</Link>
						</div>
						<div className="item-btn ms-3">
							<Link to="/post/create" className="link">
								<button type="button" className="btn btn-outline-dark">
									Create post
								</button>
							</Link>
						</div>
						<div className="item-btn ms-3">
							<button type="button" className="btn btn-outline-dark">
								Log out
							</button>
						</div>

						<div className="item-btn">
							<Link to="/login" className="link">
								<button type="button" className="btn btn-outline-dark">
									Log in
								</button>
							</Link>
						</div>
					</div>
					<div className="mobile-toggler d-lg-none ms-5">
						<div data-bs-toggle="modal" data-bs-target="#naveModal">
							<GoThreeBars size="2rem" color="#000" />
						</div>
					</div>
				</div>
			</nav>

			<div className="modal" id="naveModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<div className="nav-brand bg-">ONEPRESS</div>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="modal-line">
								<div className="modal-item">Home</div>
							</div>
							<div className="modal-line">
								<div className="modal-item">Category</div>
							</div>
							<div className="modal-line">
								<div className="modal-item">Profile</div>
							</div>

							<div className="modal-btn">
								<div className="item-btn">
									<Link to="/post/create" className="link">
										<button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal" aria-label="Close">
											Create story
										</button>
									</Link>
								</div>
							</div>
							<div className="modal-btn mt-2">
								<div className="item-btn">
									<button type="button" className="btn btn-outline-dark">
										Log out
									</button>
								</div>
							</div>
							<div className="modal-btn">
								<Link to="/login" className="link">
									<button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal" aria-label="Close">
										Sign in
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
