import * as THREE from "three";
const { PI } = require("./util");
const planeGeometry = new THREE.PlaneGeometry(400, 400, 5, 5);

function createMesh(color) {
  let mesh = new THREE.MeshLambertMaterial({
    color: color,
    side: THREE.DoubleSide,
    wireframe: true,
  });
  return mesh;
}

function createPlane(planeGeometry, planeMesh, rotation, pos1, pos2) {
  let p = new THREE.Mesh(planeGeometry, planeMesh);
  p.rotation.x = rotation * PI;
  p.position.set(0, pos1, pos2);
  return p;
}
let colorArr = [
  0xffff00,
  0x00ffff,
  0xd900d9,
  0x80ff00,
  0x8000ff,
  0x00ff80,
  0x5cffad,
  0xff5cad,
  0xad5cff,
  0xffad5c,
  0x5cfffe,
];
let color = colorArr[Math.floor(Math.random() * colorArr.length)];
let color2 = colorArr[Math.floor(Math.random() * colorArr.length)];
let color3 = colorArr[Math.floor(Math.random() * colorArr.length)];
console.log(color, color2, color3);
// let color = colorArr[Math.floor(Math.random() * colorArr.length)];
// setInterval(function (color) {
//   color = colorArr[Math.floor(Math.random() * colorArr.length)];
//   console.log(this.color);
// }, 2000);
const randomColor = createMesh(color);
const randomColor2 = createMesh(color2);
const randomColor3 = createMesh(color3);
const yellowMesh = createMesh(16776960);
const aquaMesh = createMesh(65535);
const violetMesh = createMesh(14221529);
const plane = createPlane(planeGeometry, randomColor, -0.5, 0, 0);
const plane2 = createPlane(planeGeometry, randomColor2, 5, 0, 0);
const plane3 = createPlane(planeGeometry, randomColor3, -0.5, 30, 0);
const plane4 = createPlane(planeGeometry, randomColor, -0.5, 60, 0);
const plane5 = createPlane(planeGeometry, randomColor2, -0.5, -30, 0);
const plane6 = createPlane(planeGeometry, randomColor3, 5, 0, -30);
const plane7 = createPlane(planeGeometry, randomColor, 5, 0, 30);
const plane8 = createPlane(planeGeometry, randomColor2, 5, 0, 60);
const plane9 = createPlane(planeGeometry, randomColor3, 5, 0, -60);
const plane10 = createPlane(planeGeometry, randomColor, -0.5, -60, 0);

export {
  plane,
  plane2,
  plane3,
  plane4,
  plane5,
  plane6,
  plane7,
  plane8,
  plane9,
  plane10,
};
