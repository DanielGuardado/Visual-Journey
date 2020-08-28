# Visual-Journey

![Demo](https://media2.giphy.com/media/iiUs9BWvuNpAqGr81c/giphy.gif)


## Background and Overview

Wouldn't it be great to experience your music in a completely different way? Visuals and music go hand in hand, Visual Journey is a 3d audio visualizer that will be made using THREE.js, using the frequency information from an mp3 to generate unique patterns based on the mp3 being played.

## Functionality and MVPs

- Users will have a modal with instruction on how to use the app
- Users will have the ability to select a demo mp3 file.
- Users will have the ability to select any mp3 file from their machine.
- Users will have visuals generated based on the mp3 file they have chosen.

## Wireframe

![Wireframe](https://i.imgur.com/lEtD7TA.png)

## Technology

- THREE.js a js library and api in order to create and display 3d graphics using WebGL.
- Web Audio Api to control textures based on music playing.
- CSS
- HTML
- Webpack

## Architechture

- /dist
- /src
  - music
    - demoMusic.mp3
  - models
    - model1
    - model2
  - index.js
  - /js
    - darkmode.js
    - geometry.js
    - sound.js
    - util.js
    - colors.js
    - index.js
    - modal.js
  - /scss
- Index.html
- .gitignore
- node_modules
- package.json
- package.lock.json
- postcss.config.js
- README.md
- webpack.common.js
- webpack.dev.js
- webpack.prod.js

## Implementation Timeline

- Research and Getting environment set up, creating Three.js scene (8/17/2020)
- Start showing some visuals and graphics in the scene (8/18/2020)
- Start Implementing Audio into scene. (8/19/2020)

# Code

## Web Audio API

- Implemented an audio data analyzer using JavaScript’s web audio API in order to receive an array of all the audio frequencies. Developed algorithms to separate the frequencies into 1/4ths and then calculate the average frequency at each point in time to generate real time modulations, rotations and distortions of objects in three.js.

```javascript
analyser.getByteFrequencyData(dataArray);
//spliting the data array into 2 pieces upper half and lower half
const lowerHalf = dataArray.slice(0, dataArray.length / 2);
const upperHalf = dataArray.slice(dataArray.length / 2 + 1, dataArray.length);
//creating subsections of 1/4 for sound frequencies
const lowerHalfFreq = lowerHalf.slice(0, lowerHalf.length / 2);
const lowerUpperHalfFreq = lowerHalf.slice(
  lowerHalf.length / 2,
  lowerHalf.length
);
const upperLowerFreqHalf = upperHalf.slice(0, upperHalf.length / 2);
const upperUpperFreqHalf = upperHalf.slice(
  upperHalf.length / 2 + 1,
  upperHalf.length
);
```

## Color/Dark Mode

- Constructed a dynamic dark/color mode feature implementing DOM manipulation to change the styles on certain elements when the user interacts with the Dark Mode/Color Mode button.

```javascript
const darkMode = dark.addEventListener("click", () => {
  background.style.background = "black";
  dark.style.display = "none";
  color.style.display = "block";
  li.forEach((el) => {
    el.style.color = "white";
  });
  music.style.color = "white";
  instructions.style.color = "white";
  instructions.style.border = "3px solid white";
});

const colorMode = color.addEventListener("click", () => {
  background.style.background =
    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
  dark.style.display = "block";
  color.style.display = "none";
  li.forEach((el) => {
    el.style.color = "black";
  });
  music.style.color = "black";
  instructions.style.color = "black";
  instructions.style.border = "3px solid black";
});
```
