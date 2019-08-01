import React from 'react';
import PlaidLink from '../../libs/react-plaid-link/dist';
import axios from 'axios';

import Header from '../../components/Header';
import ENV from '../../config'

import './style.css'

class Login extends React.Component {
    handleOnSuccess = (token, metadata) => {
		console.log('link: logged');
		console.log(token, metadata);
		axios.post('http://localhost:8001/get_access_token', {
            public_token: token
        }).then(resp => {
			this.props.history.push('/home');
        })
	}

	handleOnExit = (error, metadata) => {
		console.log('link: user exited');
		console.log(error, metadata);
		this.props.history.push('/');
    }
    
	render() {
		return (
			<main className="main">
				<div className="grid">
					<div className="grid__column grid__column--is-twelve-columns">
						<Header message={'An example application that outlines an end-to-end integration with Plaid'} />
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
					</div>
				</div>
			</main>
		);
	}
}
export default Login;
