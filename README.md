# angular2-webpack

An Angular2 starter application with integrated Bootstrap Dashboard template together with a server side Node.js application running on a different port.

You will see that the jQuery and Bootstrap resources are loaded in vendor.js

Key Features:

* Angular2 client and Node.js server side applications.
* Client side application written in TypeScript.
* Now includes tslint, a static analysis linter for TypeSript.
* Provides examples of Karma/Jasmine tests and skeleton test files for client side components.
* Includes examples of Mocha/Chai tests for server side components.
* Includes working examples of routing, shared services, event emitters and filters.
* Working example of ngrx/store used to store the search term entered in the header.
* The client side application uses webpack-dev-server which builds and reloads the app in the browser when a change is detected, making development faster.
* The server side application uses nodemon which restarts the server when a change is detected, making development faster.
* NEW support for yarn, which pins down exact installed versions and can be faster than npm because it creates a cached copy of packages.

## Installing the client application with yarn

First install yarn
```
npm install -g yarn
```

Install the app
```
yarn install
```

Start the app using Webpack
```
yarn start
```

The development app should be served at http://localhost:8080

Run the linter
```
yarn run lint
```

Run the tests
```
yarn test:client
```

## Installing the client application with npm

Install the app
```
npm install
```

Start the app using Webpack
```
npm start
```

The development app should be served at http://localhost:8080

Run the linter
```
npm run lint
```

Run the tests
```
npm test
```

## Running the server application

```
npm run server
```

or

```
yarn run server
```

Run the tests
```
yarn test:server
```

The server should be served at http://localhost:8081

## Production build for the Angular2 client application

```
yarn run build

yarn run prod
```

The production app should be served at http://localhost:3000