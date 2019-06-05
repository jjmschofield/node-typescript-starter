# node-typescript-starter
A handy boilerplate for building NodeJs applications in Typescript. 

The objective of this project is to give you a sensible starting point to start building out services from. 
Some things (like the selection of Javascript superset, test framework and code style) are intentionally opinionated, however as far as possible flexibility has been considered
to allow you to bend the template to meet your requirements.

In terms of the development stack, here are some buzz words for you:
* Typescript (with Tslint based on the Airbnb styleguide)
* Jest (unit and integration test support)
* Docker
* .editorconfig and IntelliJ config

This starter also drops in a few libraries to help you get moving more quickly:
* Koa middleware and factory 
  * Helps you bootstrap a minimalistic and secure web serivce with error handling and logging
* A centralized multi-transport logger with Correlation Id
  * Provides a very easy to use logging interface
  * Allows you to stream log events to multiple transports
  * Provides a Correlation ID solution to tie events across multiple microservices 
* Basic configuration management using `.env` files  

[src/app.ts] and [src/server.ts] are an example of how to compose all of this together. 
Everything is designed to be modular and replaceable, allowing you to rip out and replace the pieces you don't want in your stack. 
These libraries may be extracted into separate npm packages if they become sufficiently mature in future.

For development documentation see the [contributing guide](CONTRIBUTING.md). 

## Getting Started
Once you have copied or cloned the contents of this repo into your project directory:

```
$ npm install
$ npm start
```

You can check that tests are setup correctly by using:
```
$ npm run test:unit
```

You can run in a suitable dev mode (file watching, debugging) with:
```
$ npm run start:dev
```

## Feature Set
### Typescript
The project is setup already to do TypeScript transpilation. 

A build will result in transpiled files being output into `dist`.

Some sensible defaults are provided, but once you have copied this starter go ahead and make any changes you need over in the [tsconfig.json]()

[source-map-support](https://www.npmjs.com/package/source-map-support) is included to provide accurate source information in any logged stack traces.

### Jest
Jest is setup and ready for you to use with any of the following commands:
```
$ npm run test:unit
$ npm run test:unit:coverage
$ npm run test:int
```
Test file names are expected in the following formats:
* Unit Tests: `<file path>/<file name>.test.ts`
* Integration Tests: `<file path>/<file name>.test.int.ts`

Reports will be output to `tests/reports`.

## Docker
An example Dockerfile is provided to get you started quickly if you want to run your service as a container.

To run your service as a container do:
```
$ docker build -t node-ts-starter .
$ docker run -p 3000:80 node-ts-starter
```

This will map port 3000 on your local machine to port 80 on the container.

Go ahead and player with the [Dockerfile]() to your hearts content and modify [.dockerignore]() as you need.

## Tslint 
Tslint is in place to keep your code style standardised and to help protect against common bad practices.

The ruleset in use is based on the very popular [Airbnb styleguide](https://github.com/airbnb/javascript). 

If you don't like these rules you can change them in [tslint.json]().

## Editorconfig and IntelliJ config
To make adhereing to the styleguide simpler, configurations for most IDE's are provided in [.editorconfig].

For Intellij or Webstorm users in particular, you'll find some sensible configuration options committed and shared tasks.

## Starter Libraries
Common functionality (for example Koa app construction, logging an configuration from a .env file) are provided under `src/lib`.

These libraries are designed to operate independently and when composed together by your application.

### Config
A very simple wrapper around [dotenv-safe](https://www.npmjs.com/package/dotenv-safe).

Place a `.env` file in the root of your project, this can be changed per environment very easily.

If any variables are already defined in the environment before reading from `.env`, they will not be overwritten - you can use this to load in secrets from your CI solution.
 
This simple solution does not give you the ability to bring in secrets from a key management store (eg Azure Keyvault or AWS KMS), though conceivably your could set them to process.env once they have been recovered.

You should load this config as early as possible in the lifecycle of your application.

To use it simply do:
```
import config from './lib/config';

const main = async () => {
  await config.load(); 
};

(async () => {
  try {
    await main();
  }
  catch (error) {
    process.exit(1);
  }
})();
```

### Koa
A set of middleware useful to get started quickly with Koa.

A factory is provided which composes the middleware in a common pattern.

Working in tandem with the logging library it can be used as follows:
```
import http from 'http';
import https from 'https';
import { createDefaultApp } from './lib/koa';
import { logRequest } from './lib/logger/middleware/koa';

const app = createDefaultApp({ requestLogger: logRequest });

http.createServer(app.callback()).listen(80);
https.createServer(app.callback()).listen(443);
```
This will give you a Koa application configured with the following middleware:

* errorHandler
  * Ensures status codes are set when exceptions and response bodies are empty when application errors are encountered
  * Can be used as a template for more complicated error handling if required
* setCorrelationId
  * Sets a correlation id using the [correlation-id](https://www.npmjs.com/package/correlation-id) package. Works well with `src/lib/logger` which always calls `correlation-id` when logging.
  * In order to send the correlation ID onto another service or message queue, simply do `correlator.getId()` within the call stack for a request
* setReqTime
  * Calculates the request time for each request and sets it as the `X-Response-Time` header

Optionally the factory takes a request logger, `logRequest` from `/lib/logger/middleware/koa` is a good candidate.

Helmet and Cors are also in use, and can take configurations passed in through the factories configuration object.

Alternatively, you can import and use the individual factory functions used by the default factory as you see fit - or use the middleware directly, depending on your preference and/or use case.



# Remaining Work
* Tests
* Koa router / sub router implementation
* Koa input sanitation and validation pattern implementation
* Multi-transport logger
* Add PM2

