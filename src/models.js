import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
let charizard;
let loader6 = new GLTFLoader();
loader6.load("src/models/charizard/scene.gltf", function (gltf) {
  charizard = gltf.scene.children[0];
  charizard.scale.set(5, 5, 5, 5);
  // gardevoir.rotation.x = -0.5 * Math.PI;
  // gardevoir.rotation.y = -0.5 * Math.PI;
  charizard.rotation.x = Math.PI / 2;
  charizard.position.set(360, 0, 0);
  //   group.add(gltf.scene);
});

let meeseeks;
let loader4 = new GLTFLoader();
loader4.load("src/models/meeseeks/scene.gltf", function (gltf) {
  meeseeks = gltf.scene.children[0];
  meeseeks.scale.set(5, 5, 5, 5);
  //   meeseeks.rotation.x = 10 * Math.PI;
  //   meeseeks.rotation.y = 10 * Math.PI;
  meeseeks.rotation.x = Math.PI / 2;
  meeseeks.position.set(100, 400, 80);
  //   group.add(gltf.scene);
});

let toad;
let loader3 = new GLTFLoader();
loader3.load("src/models/toad/scene.gltf", function (gltf) {
  toad = gltf.scene.children[0];
  toad.scale.set(2, 2, 2, 2);
  toad.rotation.x = 10 * Math.PI;
  toad.rotation.y = 10 * Math.PI;
  toad.position.set(0, 440, 120);
});

let spongebob;
let loader2 = new GLTFLoader();
loader2.load("src/models/spongebob/scene.gltf", function (gltf) {
  spongebob = gltf.scene.children[0];
  spongebob.scale.set(30, 30, 30, 30);
  spongebob.rotation.x = -0.5 * Math.PI;
  spongebob.rotation.y = -0.5 * Math.PI;
  spongebob.position.set(0, -440, -120);
});

let duck;
let loader = new GLTFLoader();
loader.load("src/models/duck/scene.gltf", function (gltf) {
  duck = gltf.scene.children[0];
  duck.scale.set(30, 30, 30, 30);
  duck.position.set(0, 120, 60);
});

let jelly;
let loader5 = new GLTFLoader();
loader5.load("src/models/jellyfish/scene.gltf", function (gltf) {
  jelly = gltf.scene.children[0];
  jelly.scale.set(30, 30, 30, 30);
  jelly.position.set(0, 740, -410);
});
let jelly2;
let loader7 = new GLTFLoader();
loader7.load("src/models/jellyfish/scene.gltf", function (gltf) {
  jelly2 = gltf.scene.children[0];
  jelly2.scale.set(30, 30, 30, 30);
  jelly2.position.set(0, -740, -410);
});

export { charizard, meeseeks, toad, spongebob, duck, jelly, jelly2 };
