import React, { Component } from 'react';
import axios from 'axios';
import { formatAsCurrency } from '../../Util/currency';

import Item from '../../components/Item';

import './style.css';

export default class Dashboard extends Component {
	state = {
		accounts: [],
		selectedAccount: {}
	};
	componentDidMount() {
		axios
			.get('http://localhost:8001/accounts', {
				access_token: sessionStorage.TOKEN
			})
			.then(resp => {
				if (!resp.data.error) {
					this.setState({ accounts: resp.data.accounts.accounts });
				} else {
					this.props.history.push('/');
				}
			});
	}

	getSelectedAccount = acccount => {
		this.setState({ selectedAccount: acccount, selectedAccountId: acccount.account_id })
	}

	render() {
		const getBalance = item => (item.balances.available ? item.balances.available : 0);
		const total = this.state.accounts.map(getBalance).reduce((cur, acc) => cur + acc, 0);
		return (
			<main className="Dashboard__main-container">
				<div className="container">
					<section className="left-section">
						<div className="total">
							<span>Total from Accounts </span>
							<h1>{formatAsCurrency(total)}</h1>
						</div>
						<ul>
							{this.state.accounts.map(account => (
								<Item
									key={account.account_id}
									account={account} 
									getSelectedAccount={this.getSelectedAccount}
									selectedAccountId={this.state.selectedAccountId}
								/>
							))}
						</ul>
					</section>
					<section className="right-section">

					</section>
				</div>
			</main>
		);
	}
}
