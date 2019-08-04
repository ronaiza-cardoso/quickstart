import React, { Component } from 'react';
import axios from 'axios';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { formatAsCurrency } from '../../Util/currency';

import Item from '../../components/Item';

import './style.css';

const colors = ['#1976D2', '#2196F3', '#BBDEFB', '#03A9F4', '#212121', '#757575', '#BDBDBD'];

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getBalance = item => (item.balances.available ? item.balances.available : 0);
const percentage = (partialValue, totalValue) => Math.round((100 * partialValue / totalValue) * 100) / 100; 

export default class Dashboard extends Component {
	state = {
		accounts: [],
		selectedAccount: {}
	};
	componentDidMount() {
		if (!sessionStorage.getItem('TOKEN')) {
			this.props.history.push('/')
		}
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
		this.setState({ selectedAccount: acccount, selectedAccountId: acccount.account_id });
	};

	render() {
		const total = this.state.accounts.map(getBalance).reduce((cur, acc) => cur + acc, 0);
		const transformToGraph = this.state.accounts.reduce((acc, cur) => {
			acc[cur.account_id] = {
				title: cur.official_name || cur.name,
				value: percentage(cur.balances.available, total),
				color: colors[randomIntFromInterval(0, colors.length)]
			};
			return acc;
		}, {});

		const dataToGraph = Object.keys(transformToGraph).map(key => transformToGraph[key]).sort((a, b) => a.value - b.value)
		
		return (
			<main className="Dashboard__main-container">
				<div className="container">
					<section className="left-section">
						<div className="total">
							<span>Total from Accounts </span>
							<h1>
								{formatAsCurrency(total)}
							</h1>
						</div>
						<ul>
							{this.state.accounts.map(account =>
								<Item
									key={account.account_id}
									account={account}
									getSelectedAccount={this.getSelectedAccount}
									selectedAccountId={this.state.selectedAccountId}
								/>
							)}
						</ul>
					</section>
					<section className="right-section">
						<div className="Account-container">
							<ReactMinimalPieChart
								data={dataToGraph}
								lineWidth={20}
								paddingAngle={18}
								rounded
								label
								labelStyle={{
									fontSize: '5px',
									fontFamily: 'sans-serif'
								}}
								labelPosition={60}
							/>
						</div>
					</section>
				</div>
			</main>
		);
	}
}
