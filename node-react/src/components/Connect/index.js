import React from 'react';
import PlaidLink from '../../libs/react-plaid-link/dist';

import ENV from '../../config'

import './style.css';

class Connect extends React.Component {
	handleOnSuccess(token, metadata) {
		console.log('link: logged');
		console.log(token, metadata);
	}
	handleOnExit(error, metadata) {
		console.log('link: user exited');
		console.log(error, metadata);
	}
	handleOnLoad() {
		console.log('link: loaded');
	}

	render() {
		return (
			<PlaidLink
				clientName="Your app name"
				env={ENV.PLAID_ENV}
				product={ENV.PLAID_PRODUCTS}
				publicKey={ENV.PLAID_PUBLIC_KEY}
				onExit={this.handleOnExit}
				onSuccess={this.handleOnSuccess}
			>
				<button className="button button--is-primary">Connect with Plaid</button>
			</PlaidLink>
		);
	}
}
export default Connect;
