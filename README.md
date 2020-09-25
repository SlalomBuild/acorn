# AcornJs

## Notes before using
This project is organized to group components separately from the global state. Depending on the size and scope of your project it may be preferable to group components, services, and state into modules and organize those by feature.

Note: See [Patterns](#patterns) section for additional detail on this.

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running mock server

Navigate to `/mocks/` directory and run `npm run start` to start a mock server on `http://localhost:3002`.

# Features
* [Rxjs](http://reactivex.io/)
* Redux (via [ngrx](https://ngrx.io/))
  * Memoized state (via [reselect](https://github.com/reduxjs/reselect))
  * Immutable state (via [ngrx-store-freeze](https://github.com/brandonroberts/ngrx-store-freeze))
* Uses to Slalom's [blackslope](https://github.com/SlalomBuild/blackslope.net) project as a sample API/UI integration
* Extra code generators (see `Assumptions` section for details)

## Technologies
* [angular](https://angular.io/)
* [ngrx](https://ngrx.io/)
  * For a broader overview of redux architectures in general, see [this article](https://medium.com/@tkssharma/understanding-redux-react-in-easiest-way-part-1-81f3209fc0e5).
* [rxjs](https://www.learnrxjs.io)

## Patterns
* `index.ts`
  * Angular's default generators don't use index files, but Acorn follows the opinion that index files in general and root-level imports in particular are a convenience that enhances the dev experience
* Smart vs dumb components (aka containers)
  * This pattern is a way of bringing a separation of concerns into your components. By having some top-level components that worry about loading data and network/app-wide interactions you can keep the bulk of your components more straightforward. The idea is that a "smart" component will handle data, network, or global state while a "dumb" component will be predominantly display logic.
  * [This article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) provides a good write-up on the topic, albeit with react/redux examples.
* Feature-based containers
  * This is largely an attempt to fight container bloat and prevent issues where you have multiple containers trying to track similar pieces of state. Generally speaking, such scenarios should store the relevant application state in your reducers.
  * In Acorn's case, we are trying to not only store that state in redux, but to also split out dedicated containers for reading that state. The prime example of this being `modal.container.ts`.
    * The idea here is that by keeping state separated this way, you wouldn't have issues where different containers have different behavior around when modals open/close.
    * It is strongly recommended that if you have other global-level UI elements (for example Side-Panels) you split those out in the same way.
* Entity-level modules
  * This is largely an attempt to fight the module bloat that so often comes up on large projects. In our case Acorn is set up to have modules for: `app-store`, `services`, `components`, and an `app.module` to tie it all together.
  * If you find yourself adding a large number of other entities, it may be worth considering splitting out further modules. That said, this one is more of a convenience/preference, so feel free to decide what's right for your project.

## Assumptions
* [acorn-schematics](https://bitbucket.org/slalom-consulting/acorn-schematics/src/master/)
  * This project assumes that code generation will occur through its related code generator. The main place this assumption comes up is in the use of index files, which the angular code-generator will not update.
