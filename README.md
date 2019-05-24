### `npm start`
Runs the app in the development mode with mocker.

### `npm run start:no-mock`
Runs the app without mocker and the request are transfered by the proxy.

### set proxy
set the proxy by package.json file.

### add mocker

```
npm install mocker-api --save-dev
```

modify the devServer's before function.
```
 apiMocker(app, path.resolve("./mocker/index.js"));
```