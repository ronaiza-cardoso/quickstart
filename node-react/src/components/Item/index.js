import React from 'react';
import { formatAsCurrency } from '../../Util/currency';

import './style.css';

const Item = ({ account }) => {
	return (
		<li key={account.account_id}>
			<a className="acountItem active" href="/acompanhar/investimentos">
				<div className="account-container">
					<h2>
						{account.name}
					</h2>
					<div className="balance">
						<span>
							{formatAsCurrency(account.balances.available, account.balances.iso_currency_code)}
						</span>
					</div>
				</div>
			</a>
		</li>
	);
};

export default Item;
