# angular2-webpack

An Angular2 starter application with integrated Bootstrap Dashboard template.

You will see that the jQuery and Bootstrap resources are loaded in vendor.js

Key Features:

* Written in TypeScript.
* Now includes tslint, a static analysis linter for TypeSript.
* Provides examples of Karma/Jasmine tests and skeleton test files for all components.
* Includes working examples of routing, shared services, event emitters and filters.
* Uses webpack-dev-server which builds and reloads the app in the browser when a change is detected, making development faster.
* NEW support for yarn, which pins down exact installed versions and can be faster than npm because it creates a cached copy of packages.

## Installing the app with yarn

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

Run the linter
```
yarn run lint
```

Run the tests
```
yarn test
```

## Installing the app with npm

Install the app
```
npm install
```

Start the app using Webpack
```
npm start
```

Run the linter
```
npm run lint
```

Run the tests
```
npm test
```

The development app should be served at http://localhost:8080

## Production build

```
npm run build

cp production_server.js dist

cd dist

node production_server.js
```

The production app should be served at http://localhost:3000