import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<Link to="/">
				{/* <span className="navbar-brand mb-0 h1"></span> */}
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					{/* <button className="btn btn-primary">Check the Context in action</button> */}
				</Link>
			</div>
		</nav>
	);
};