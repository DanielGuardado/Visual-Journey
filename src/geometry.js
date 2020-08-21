import { PlaneGeometry, MeshLambertMaterial, Mesh, DoubleSide } from "three";
import { PI } from "./util";
import { colorArr } from "./colors";
const planeGeometry = new PlaneGeometry(400, 400, 5, 5);
const planeMaxGeometry = new PlaneGeometry(1600, 1600, 20, 20);

function createMesh(color) {
  let mesh = new MeshLambertMaterial({
    color: color,
    side: DoubleSide,
    wireframe: true,
  });
  return mesh;
}
function createMaxMesh(color) {
  let mesh = new MeshLambertMaterial({
    color: color,
    side: DoubleSide,
    wireframe: true,
  });
  return mesh;
}
function createMaxPlane(planeGeometry, planeMesh, rotation, pos1, pos2, pos3) {
  let p = new Mesh(planeGeometry, planeMesh);
  p.rotation.x = rotation * PI;
  p.position.set(pos3, pos1, pos2);
  return p;
}

function createPlane(planeGeometry, planeMesh, rotation, pos1, pos2) {
  let p = new Mesh(planeGeometry, planeMesh);
  p.rotation.x = rotation * PI;
  p.position.set(0, pos1, pos2);
  return p;
}

let color = colorArr[Math.floor(Math.random() * colorArr.length)];
let color2 = colorArr[Math.floor(Math.random() * colorArr.length)];
let color3 = colorArr[Math.floor(Math.random() * colorArr.length)];
// console.log(color, color2, color3);
// let color = colorArr[Math.floor(Math.random() * colorArr.length)];
// setInterval(function (color) {
//   color = colorArr[Math.floor(Math.random() * colorArr.length)];
//   console.log(this.color);
// }, 2000);
const randomColor = createMesh(color);
const randomColor2 = createMesh(color2);
const randomColor3 = createMesh(color3);
const randomMaxColor = createMaxMesh(color);
const randomMaxColor2 = createMaxMesh(color2);
const randomMaxColor3 = createMaxMesh(color3);
const bassColor = createMesh(0xcc0000);
const highsColor = createMesh(0xfbff05);

// export const plane = createPlane(planeGeometry, randomColor, -0.5, 0, 0);
// export const plane2 = createPlane(planeGeometry, randomColor2, 5, 0, 0);
// export const plane3 = createPlane(planeGeometry, randomColor3, -0.5, 30, 0);
// export const plane4 = createPlane(planeGeometry, randomColor, -0.5, 60, 0);
// export const plane5 = createPlane(planeGeometry, randomColor2, -0.5, -30, 0);
export const plane = createPlane(planeGeometry, bassColor, -0.5, 0, 0);
export const plane2 = createPlane(planeGeometry, bassColor, 5, 0, 0);
export const plane3 = createPlane(planeGeometry, bassColor, -0.5, 30, 0);
export const plane4 = createPlane(planeGeometry, highsColor, -0.5, 60, 0);
export const plane5 = createPlane(planeGeometry, highsColor, -0.5, -30, 0);
export const plane6 = createPlane(planeGeometry, randomColor3, 5, 0, -30);
export const plane7 = createPlane(planeGeometry, randomColor, 5, 0, 30);
export const plane8 = createPlane(planeGeometry, randomColor2, 5, 0, 60);
export const plane9 = createPlane(planeGeometry, randomColor3, 5, 0, -60);
export const plane10 = createPlane(planeGeometry, randomColor, -0.5, -60, 0);

export const farPlane = createMaxPlane(
  planeMaxGeometry,
  randomMaxColor,
  15,
  -600,
  -600,
  0
);
export const farPlane2 = createMaxPlane(
  planeMaxGeometry,
  randomMaxColor2,
  15,
  600,
  600,
  0
);
export const farPlane3 = createMaxPlane(
  planeMaxGeometry,
  randomMaxColor,
  -0.5,
  600,
  0,
  90
);
export const farPlane4 = createMaxPlane(
  planeMaxGeometry,
  randomMaxColor2,
  -0.5,
  -600,
  0,
  90
);
// export const farPlane5 = createPlane(planeGeometry, randomColor, -0.5, 0 - 600);
// export const farPlane6 = createPlane(planeGeometry, randomColor, -0.5, 0 - 600);
