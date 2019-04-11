# AcornJs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

See [acorn-schematics](https://bitbucket.org/slalom-consulting/acorn-schematics/src/master/) for scaffolding tailored to this project structure.

## Build

Run `ng build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running mock server

Navigate to `/mocks/` directory and run `npm run start` to start a mock server on `http://localhost:3002`.

## Technologies
* [angular](https://angular.io/)
* [ngrx](https://ngrx.io/)
  * For a broader overview of redux architectures in general, see [this article](https://medium.com/@tkssharma/understanding-redux-react-in-easiest-way-part-1-81f3209fc0e5).
* [rxjs](https://www.learnrxjs.io)

## Patterns
* index.ts
  * Angular's default generators don't use index files, but Acorn follows the opinion that index files in general and root-level imports in particular are a convenience that enhances the dev experience
  * An extension of this philosophy is the `app.module.ts`'s dynamic loading of effects/services. By having index files available we can dynamically import every effect/service with just one line of code, then loop through them to wire up our module. This way as long as you've updated your index files you don't need to open the `app.module.ts` file every time you create a new effect or service.
* Smart vs dumb components (aka containers)
  * This pattern is a way of bringing a separation of concerns into your components. By having some top-level components that worry about loading data and network/app-wide interactions you can keep the bulk of your components more straightforward. The idea is that a "smart" component will handle data, network, or global state while a "dumb" component will be predominantly display logic.
  * [This article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) provides a good write-up on the topic, ableit with react/redux examples.

## Assumptions
* [acorn-schematics](https://bitbucket.org/slalom-consulting/acorn-schematics/src/master/)
  * This project assumes that code generation will occur through its related code generator. The main place this assumption comes up is in the use of index files, which the angular code-generator will not update.
