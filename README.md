# Visual-Journey
## Background and Overview
Wouldn't it be great to experience your music in a completely different way? Visuals and music go hand in hand, Visual Journey is a 3d fractal generator that will be made using THREE.js, using the frequency information from an mp3 to generate unique patterns based on the mp3 being played.
## Functionality and MVPs 
* Users will have a modal with instruction on how to use the app
* Users will have the ability to select a demo mp3 file.
* Users will have the ability to select any mp3 file from their machine.
* Users will have visuals generated based on the mp3 file they have chosen.
## Wireframe
![Wireframe](https://i.imgur.com/lEtD7TA.png)
## Architecture and Technology
* I will be using THREE.js a js library and api in order to create and display 3d graphics using WebGL
* /dist
* /src
  - assets
    - demoMusic.mp3
  - index.js
  - /js
    - Music.js
    - Scene.js
    - Util.js
  - /scss
* Index.html
* .gitignore
* node_modules
* package.json
* package.lock.json
* postcss.config.js
* README.md
* webpack.common.js
* webpack.dev.js
* webpack.prod.js
## Implementation Timeline 
* Research and Getting environment set up, creating Three.js scene (8/17/2020)
* Start showing some fractals and graphics in the scene (8/18/2020)
* Start Implementing Audio into scene. (8/19/2020)
