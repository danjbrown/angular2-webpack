# angular2-webpack

An Angular2 starter application with integrated Bootstrap Dashboard template together with a server side Node.js application running on a different port.

You will see that the jQuery and Bootstrap resources are loaded in vendor.js

Key Features:

* Angular2 client and Node.js server side applications.
* Client side application written in TypeScript.
* Linting: uses tslint, a static analysis linter for TypeSript, and jshint for the server side JavaScript.
* Testing: includes examples of Karma/Jasmine tests for client side components and Mocha/Chai tests for the server side components.
* Includes working examples of routing, shared services, event emitters and filters.
* Working example of ngrx/store used to store the search term entered in the header.
* The client side application uses webpack-dev-server which builds and reloads the app in the browser when a change is detected, making development faster.
* The server side application uses nodemon which restarts the server when a change is detected, making development faster.
* Uses yarn, which pins down exact installed versions and can be faster than npm because it creates a cached copy of packages.

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
yarn run lint:client
```

Run the tests
```
yarn run test:client
```

## Running the server application

Start the server
```
yarn run server
```

Run the linter
```
yarn run lint:server
```

Run the tests
```
yarn run test:server
```

The server should be served at http://localhost:8081

## Production build for the Angular2 client application

```
yarn run build

yarn run prod
```

The production app should be served at http://localhost:3000