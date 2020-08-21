import { PI } from "./util";
import { colorArr } from "./colors";
import * as THREE from "three";

let color = colorArr[Math.floor(Math.random() * colorArr.length)];
let color2 = colorArr[Math.floor(Math.random() * colorArr.length)];
let color3 = colorArr[Math.floor(Math.random() * colorArr.length)];
const geometry = new THREE.SphereGeometry(500, 32, 32);
const geometry3 = new THREE.SphereGeometry(500, 32, 32);
const geometry2 = new THREE.SphereGeometry(250, 32, 32);
const material = new THREE.MeshLambertMaterial({
  color: 0x00005f,
  side: THREE.DoubleSide,
  wireframe: true,
});
const material3 = new THREE.MeshLambertMaterial({
  color: 0x00005f,
  side: THREE.DoubleSide,
  wireframe: true,
});
const material2 = new THREE.MeshLambertMaterial({
  color: 0x30005f,
  side: THREE.DoubleSide,
  wireframe: true,
});

export const sphere = new THREE.Mesh(geometry, material);
export const sphere3 = new THREE.Mesh(geometry3, material3);
export const sphere2 = new THREE.Mesh(geometry2, material2);
