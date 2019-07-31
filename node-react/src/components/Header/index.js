import React from 'react';

import './style.css';

const Header = ({ message }) => {
	return (
		<div className="everpresent-content">
			<h1 className="everpresent-content__heading">Plaid Quickstart</h1>
			<p id="intro" className="everpresent-content__subheading">
				{message}
			</p>
		</div>
	);
};

export default Header;
