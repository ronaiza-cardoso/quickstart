## Plaid React

# Up and running

Create one file with the name `config.js` fallowing the structure bellow and get your API keys [here](https://dashboard.plaid.com/account/keys).

```js
  export default {
    PLAID_CLIENT_ID: 'PLAID_CLIENT_ID',
    PLAID_SECRET: 'PLAID_SECRET',
    PLAID_PUBLIC_KEY: 'PLAID_PUBLIC_KEY',
    PLAID_ENV: 'sandbox',
    PLAID_PRODUCTS: ['auth', 'transactions']
  };
```

After this run `npm run dev`.

The sandbox user is:
```
username: user_good
password: pass_good
```
