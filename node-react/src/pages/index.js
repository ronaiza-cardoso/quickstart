import React from 'react';

import Header from '../components/Header';
import Connect from '../components/Connect';

class Main extends React.Component {
	render() {
		return (
			<main className="main">
				<div className="grid">
					<div className="grid__column grid__column--is-twelve-columns">
						<Header message={'An example application that outlines an end-to-end integration with Plaid'} />
						<Connect />
					</div>
				</div>
			</main>
		);
	}
}
export default Main;
