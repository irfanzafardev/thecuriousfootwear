import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { logout, reset } from "../../services/auth/authSlice";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
	const [isSearchActive, setSearchActive] = useState(false);
	const toggleSearchClass = () => {
		setSearchActive(!isSearchActive);
	};

	// const [search, setSearch] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
		dispatch(reset());
		window.location.reload();
		navigate("/");
	};
	return (
		<>
			<nav className="row align-items-center fixed-top">
				<div className="container-fluid">
					<Link to="/" className="link">
						<div className="nav-brand">
							{/* <p>THE CURIOUS FOOTWEAR</p> */}
							<p>FOOTWARE</p>
						</div>
					</Link>
					<div className="search d-none d-lg-block">
						<div className="search-box">
							<input type="text" placeholder="Search" />
							<div className="item">
								<div className="search-icon" onClick={toggleSearchClass}>
									<BiSearch size="1rem" color="#666666" />
								</div>
							</div>
						</div>
					</div>
					<div className="nav-items d-lg-flex">
						{user ? (
							<>
								<div className="item">
									<Link to={`/profile`} className="link">
										PROFILE
									</Link>
								</div>
								<div className="item-btn">
									<Link to="/post/create" className="link">
										<button type="button" className="btn">
											CREATE POST
										</button>
									</Link>
								</div>
								<div className="item-btn">
									<button type="button" className="btn" onClick={handleLogout}>
										LOG OUT
									</button>
								</div>
							</>
						) : (
							<div className="item-btn">
								<Link to="/login" className="link">
									<button type="button" className="btn">
										Log in
									</button>
								</Link>
							</div>
						)}
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
							<div className="nav-brand">FOOTWARE</div>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="modal-line">
								<div className="modal-item">Profile</div>
							</div>
							<div className="modal-btn">
								<div className="item-btn">
									<Link to="/post/create" className="link">
										<button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
											Create post
										</button>
									</Link>
								</div>
							</div>
							<div className="modal-btn">
								<div className="item-btn">
									<button type="button" className="btn">
										Log out
									</button>
								</div>
							</div>
							<div className="modal-btn">
								<Link to="/login" className="link">
									<button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
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
