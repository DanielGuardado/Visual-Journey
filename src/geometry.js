import { PlaneGeometry, MeshLambertMaterial, Mesh, DoubleSide } from "three";
import { PI } from "./util";
import { colorArr } from "./colors";
const planeGeometry = new PlaneGeometry(400, 400, 5, 5);

function createMesh(color) {
  let mesh = new MeshLambertMaterial({
    color: color,
    side: DoubleSide,
    wireframe: true,
  });
  return mesh;
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
const bassColor = createMesh(0xcc0000);

// export const plane = createPlane(planeGeometry, randomColor, -0.5, 0, 0);
// export const plane2 = createPlane(planeGeometry, randomColor2, 5, 0, 0);
// export const plane3 = createPlane(planeGeometry, randomColor3, -0.5, 30, 0);
// export const plane4 = createPlane(planeGeometry, randomColor, -0.5, 60, 0);
// export const plane5 = createPlane(planeGeometry, randomColor2, -0.5, -30, 0);
export const plane = createPlane(planeGeometry, bassColor, -0.5, 0, 0);
export const plane2 = createPlane(planeGeometry, bassColor, 5, 0, 0);
export const plane3 = createPlane(planeGeometry, bassColor, -0.5, 30, 0);
export const plane4 = createPlane(planeGeometry, bassColor, -0.5, 60, 0);
export const plane5 = createPlane(planeGeometry, bassColor, -0.5, -30, 0);
export const plane6 = createPlane(planeGeometry, randomColor3, 5, 0, -30);
export const plane7 = createPlane(planeGeometry, randomColor, 5, 0, 30);
export const plane8 = createPlane(planeGeometry, randomColor2, 5, 0, 60);
export const plane9 = createPlane(planeGeometry, randomColor3, 5, 0, -60);
export const plane10 = createPlane(planeGeometry, randomColor, -0.5, -60, 0);
