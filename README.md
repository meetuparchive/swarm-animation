# swarm-animation [![Build Status](https://travis-ci.org/meetup/swarm-animation.svg?branch=master)](https://travis-ci.org/meetup/swarm-animation)
Reusable animation CSS and js for web, React friendly
http://meetup.github.io/swarm-animation/

## Installation

* clone the repo
* from inside the repo directory, run `npm install`

## Building the project
  `grunt` or `grunt compile` builds the sass. `dist/animation.css` is then available for use in your project.   
  `grunt docs` compiles the sass and builds the docs for the `gh-pages` branch.

## Goals
Broadly - to provide reusable and performant animations to be used on web.

The vision is, for example, if we want an animation for a popover to show and hide, we already have CSS classes and a javascript function to apply these.

The focus of the project is on providing CSS animations.  
There is need for animations applied with JS as well, esp if we can get them to be more performant using methods like (FLIP)[https://medium.com/outsystems-experts/flip-your-60-fps-animations-flip-em-good-372281598865#.m076uxhcv].  
Javascript utilities for applying and removing css classes in a standard way will also be provided.

### What about React?
   All of these should work with React as well. React can apply css animations from swarm-animation if their names [follow certain convention](https://facebook.github.io/react/docs/animation.html).  
   Whatever css classes we develop, we can also make sure they conform to the naming convention (with a mixin possibly). Rather than use another external lib at the moment lets see if we can develop animations that fit our needs for both classic and new Meetup.

## Development
### css
   The sass files live in the root of `src/` for now.  
   `animation.scss` imports sass partials for different responsibilities as the project grows.  
   Future partials will be made for opacity, loaders, entering/leaving, scale, transorm for example.  

### js
   The `src/js/lib.js` file will contain javascript functions that you can use in your js to run certain animations/apply css based on user interaction.  
   Add to this file if you want to add javascript that should apply classes on click, change, load, etc.  
   Anything added will need to be tested. See (Testing)  

## Testing
  We need test coverage for all of our js animation helpers.   
  Travis CI runs these jasmine tests for the repo.  
  
### running
  In development, use `grunt test` to run the tests.  
  This command calls `webpack` and `jasmine` and compiles `src/js/lib.js` (where you add your new functions) and turns it into `test/build/lib_compiled.js`.  
  It also creates `test/build/spec_compiled.js` out of your specs.  
  It runs a server with `connect` and keeps it alive. You can navigate to `http://localhost:8888/test/build/SpecRunner.html` to see the output (also shown on command line).

### writing
  Test code lives in `test/js`. Write your specs in Jasmine, using es6, here.

---

## Animation catalogue

A list of animations we should have:  
fade / opacity (currently needed on landing page, maybe start flow)  
expand /collapse (accordions, maybe modals)  
loading animations  
add/remove (lists of events, attendees)  

---
## Resources

### Performance related

Chrome Devtools: https://www.youtube.com/watch?v=U9xfYbKxosI  
http://blogs.adobe.com/webplatform/2014/03/18/css-animations-and-transitions-performance/
http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
https://developers.google.com/web/fundamentals/design-and-ui/animations/animations-and-performance?hl=en
http://www.html5rocks.com/en/tutorials/speed/rendering/
https://www.smashingmagazine.com/2013/03/animating-web-gonna-need-bigger-api/
https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108#.rvx1z9na8

### Design / interaction related

http://www.slideshare.net/CrowChick/communicating-animation-slides
https://material.google.com/motion/material-motion.html#
https://medium.com/@adaptivepath/jedi-principles-of-ui-animation-2b88423b1dac#.rkjkb08go
https://www.smashingmagazine.com/2016/03/integrate-motion-design-animation-ux-workflow/
http://alistapart.com/article/motion-with-meaning-semantic-animation-in-interface-design
http://valhead.com/2016/05/05/how-fast-should-your-ui-animations-be/

### From Designing Interface Animation
* Making Instructional Animations More Effective: A Cognitive Load Approach, Paul Ayres and Fred Paas: http://rfld.me/1ScKuLV. 
* Attention Cueing as a Means to Enhance Learning from an Animation, B.B. de Koning (Björn), H.K. Tabbers (Huib), R.M.J.P. Rikers (Remy),  and G.W.C. Paas (Fred) 2008-04-10: http://rfld.me/1S9UUtF.
* Optimising Learning from Animations by Minimising Cognitive Load: Cognitive and Affective Consequences of Signalling and Segmentation Methods, Roxana Moreno: http://rfld.me/1YvF54j
* Does Animation in User Interfaces Improve Decision Making? Cleotilde Gonzalez: http://rfld.me/1Qa1VbH.
* Does Animation Help Users Build Mental Maps of Spatial Information? Benjamin B. Bederson, and Angela Boltman: http://rfld.me/23IkGwh
* Animating Anthropomorphism: Giving Minds to Geometric Shapes, Jason G. Goldman on March 8, 2013: http://rfld.me/1Si0aRa or https://archive.is/aojec.
* The film from the Fritz Heider and Marianne Simmel study: http://rfld.me/1MwhYpu.

### Possible libs to consider
http://anime-js.com/  
https://github.com/chenglou/react-motion  
https://github.com/callemall/material-ui/ (see https://github.com/callemall/material-ui/blob/master/src/Dialog/Dialog.js#L95)

### React Animation Docs
https://facebook.github.io/react/docs/animation.html  
https://www.tutorialspoint.com/reactjs/reactjs_animations.htm





