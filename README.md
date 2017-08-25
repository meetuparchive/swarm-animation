# swarm-animation 
[![npm version](https://badge.fury.io/js/swarm-animation.svg)](https://badge.fury.io/js/swarm-animation)
[![Build Status](https://travis-ci.org/meetup/swarm-animation.svg?branch=master)](https://travis-ci.org/meetup/swarm-animation)
[![Coverage Status](https://coveralls.io/repos/github/meetup/swarm-animation/badge.svg?branch=master)](https://coveralls.io/github/meetup/swarm-animation?branch=master)

Reusable animation CSS and js for web, React friendly
http://meetup.github.io/swarm-animation/

## Goals
Broadly, swarm-animation's purpose is to provide reusable and performant animations to be used on web.

The vision is, for example, if we want an animation for a popover to show and hide, we already have CSS classes and a javascript function to apply these.

The focus of the project is on providing CSS animations.  
There is need for animations applied with JS as well, esp if we can get them to be more performant using methods like [FLIP](https://medium.com/outsystems-experts/flip-your-60-fps-animations-flip-em-good-372281598865#.m076uxhcv).  
Javascript utilities for applying and removing css classes in a standard way will also be provided.

### What about React?
   All of these should work with React as well. React can apply css animations from swarm-animation if their names [follow certain convention](https://facebook.github.io/react/docs/animation.html).  
   Whatever css classes we develop, we can also make sure they conform to the naming convention (with a mixin possibly). Rather than use another external lib at the moment lets see if we can develop animations that fit our needs for both classic and new Meetup.

## Installation

1. clone the repo
1. from inside the repo directory, run `yarn install`

## Building the project
  `grunt` or `grunt compile` builds the sass.
  `dist/animation.css` and `dist/swarmAnimation.js` are then available for use in your project.  

  `grunt test` compiles the test js and starts a webserver at `localhost:8888`.
  More about tests in the [Testing](#testing) section.

  `grunt docs` compiles the sass and builds the docs for the `gh-pages` branch.
  `grunt local-docs` compiles the sass and builds the docs, but does not push to `gh-pages`. It starts a webserver at `localhost:8111`.
  More about docs in the [Documentation](#documentation) section.

## Development
### css
   The sass files live in the root of `src/` for now.  
   `animation.scss` imports sass partials for different responsibilities as the project grows.  
   Future partials can be made for opacity, loaders, entering/leaving, scale, for example.  

### js
   The `src/js/swarmAnimation.js` file contains javascript functions that you can use in your js to run certain animations/apply css based on user interaction.  
   Add to this file if you want to add javascript that should apply classes on click, change, load, etc.  
   Anything added will need to be tested. See [Testing](#testing).

## Testing
  We need test coverage for all of our js animation helpers.   
  Travis CI runs these jasmine tests for the repo.  
  Test specs live under `test/specs`. Write your specs in Jasmine, using es6, here.

### running
  In development, use `grunt test` to run the tests.  
  This command calls `compile` and copies over compiled js and css to the test directory.
  It also calls `webpack:test` to use babel to create `test/build/spec_test.js` out of your specs.

  A server is run and kept alive.  
  You can navigate to `http://localhost:8888/test/build/SpecRunner.html` to see the output (also shown on command line).  
  
  _Changes to the test spec are watched and recompiled_


## Documentation

   The docs can be seen locally or here https://meetup.github.io/swarm-animation/.
   We use [highlightjs](https://highlightjs.org/) and [pushy](https://www.christopheryee.ca/pushy/) to provide code colors and a side menu, respectively.

### building docs
   `docs/src` has the `assets`, `css` and `js` for the documentation.
   `swarmAnimation` css and js are moved into `docs/dest` along with `src` files with the build task.
   
  `grunt local-docs` compiles the sass, js and builds the docs with (seldon)[https://github.com/meetup/seldon]
   You should then be able to open your browser to preview the docs at `localhost:8111`.

  `grunt docs` compiles the sass and builds the docs for the `gh-pages` branch *and pushes*
 
   _Changes to the docs are watched and recompiled_
 
### adding docs

   Documentation is added by including doc comments in your scsss (See `src/_fade.scss` for examples)
   This is still a work in progress.
   
---

## Animation catalogue

A list of animations we should have:  

fade / opacity (currently needed on landing page, maybe start flow)  
expand /collapse (accordions, maybe modals)  
loading animations  
add/remove (lists of events, attendees)  

---

For resources and articles on animation, check out the [wiki](https://github.com/meetup/swarm-animation/wiki/Animation-Resources-&-Articles)


