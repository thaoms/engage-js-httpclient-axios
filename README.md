This library is a work in progress.

# engage-js-httpclient-axios

Engage JS Http Client Axios is just a simple http client you can  use with our Engage JS API

This code is written in ES6+ and uses a lot of newer features, transpiling and compiling are up to you.


## Installation

```bash
npm install @thaoms/engage-js-httpclient-axios --only=prod
```

We recommend installing with the `--only=prod` flag if you don't want any of the development dependencies.

## Usage with our API

```javascript
import EngageApi from "@thaoms/engage-js-api";
import HttpClientAxios from "@thaoms/engage-js-httpclient-axios";

/* Step 1 */
const authorizationUrl = EngageApi.getAuthorizationUrl({
    clientId: 'client_id',
    scope: 'accounts_read accounts_write',
});

/* handle request and response */
/* ... */

/* Step 2 */
const tokenUrl = EngageApi.getAuthorizationTokenUrl({
    clientId: 'client_id',
    clientSecret: 'client_secret',
    code: 'code_you_got_from_step1',
});

/* handle request response */
/* ... */

const engageApi = new EngageApi(
    new HttpClientAxios({
        headers: {},
    }),
    'access_token_you_got_from_step2'
);

/** see the developers docs for available endpoints, 
params and more  **/

engageApi.getUsersForAccount('account_id', 20)
    .then((result) => {
        console.log(result);
    }).catch((e) => {
        console.log(e);
    });
```

## Docs
Full documentation:
https://developers.engagor.com/documentation

Docs for this package can also be compiled by yourself with `$ npm run docs `

## Contributing
Feel free to open an issue.

## License
[BSD-2-Clause](LICENSE)
