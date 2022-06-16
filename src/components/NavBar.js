import React from 'react';
import realstocklogo from '../LOGO.png';
import { Link, NavLink } from 'react-router-dom';
import '../Style.css';
import CartWidget from './CartWidget';

function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-primary menu">
				<div className="container d-flex justify-content-between">
					<NavLink to={'/'} className="navbar-brand" href="#">
						<img src={realstocklogo} alt="" width="200px" />
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse nav-list " id="navbarNav">
						<ul className="navbar-nav ">
							<Link to={`/`}>
								<li className="nav-item">
									<h3 className="nav-link active" aria-current="page">
										Home
									</h3>
								</li>
							</Link>
							<Link to={`/categoria/desodorante_corporal`}>
								<li className="nav-item">
									<h3 className="nav-link">Desodorantes</h3>
								</li>
							</Link>
							<Link to={`/categoria/afeitadoras`}>
								<li className="nav-item">
									<h3 className="nav-link">Afeitadoras</h3>
								</li>
							</Link>
							<Link to={`/Shop`}>
								<li className="nav-item">
									<h3 className="nav-link">Shop</h3>
								</li>
							</Link>
						</ul>
						<div>
							<Link to={`/cart`}>
								<CartWidget />
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
