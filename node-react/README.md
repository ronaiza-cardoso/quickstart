# Plaid React

## Up and running FRONT

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

## Up and running SERVER

Get your configs keys and add into the `.env` inside the server file.

```
  PLAID_CLIENT_ID=PLAID_CLIENT_ID
  PLAID_SECRET=PLAID_SECRET
  PLAID_PUBLIC_KEY=PLAID_PUBLIC_KEY
  PLAID_ENV=sandbox
  PLAID_COUNTRY_CODES='US,CA,GB,FR,ES'
```

After this run `npm run dev`.

The sandbox user is `user_good` and `pass_good`
