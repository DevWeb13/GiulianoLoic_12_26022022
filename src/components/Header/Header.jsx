import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<nav>
				<img src="./assets/logo.svg" alt="logo" />
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="/">Profil</NavLink>
				<NavLink to="/">Réglage</NavLink>
				<NavLink to="/">Communauté</NavLink>
			</nav>
		</header>
	);
}

export default Header;
