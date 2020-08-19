import * as THREE from "three";
const { PI } = require("./util");
const planeGeometry = new THREE.PlaneGeometry(400, 400, 5, 5);
const planeAqua = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  side: THREE.DoubleSide,
  wireframe: true,
});
const planeYellow = new THREE.MeshLambertMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
  wireframe: true,
});
const planeViolet = new THREE.MeshLambertMaterial({
  color: 0xd900d9,
  side: THREE.DoubleSide,
  wireframe: true,
});
const plane = new THREE.Mesh(planeGeometry, planeYellow);
plane.rotation.x = -0.5 * PI;
plane.position.set(0, 0, 0);

const plane2 = new THREE.Mesh(planeGeometry, planeAqua);
plane2.rotation.x = 5 * PI;
plane2.position.set(0, 0, 0);

const plane3 = new THREE.Mesh(planeGeometry, planeViolet);
plane3.rotation.x = -0.5 * PI;
plane3.position.set(0, 30, 0);

const plane4 = new THREE.Mesh(planeGeometry, planeYellow);
plane4.rotation.x = -0.5 * PI;
plane4.position.set(0, 60, 0);

const plane10 = new THREE.Mesh(planeGeometry, planeYellow);
plane10.rotation.x = -0.5 * PI;
plane10.position.set(0, -60, 0);

const plane5 = new THREE.Mesh(planeGeometry, planeViolet);
plane5.rotation.x = -0.5 * PI;
plane5.position.set(0, -30, 0);

const plane6 = new THREE.Mesh(planeGeometry, planeYellow);
plane6.rotation.x = 5 * PI;
plane6.position.set(0, 0, -30);

const plane7 = new THREE.Mesh(planeGeometry, planeAqua);
plane7.rotation.x = 5 * PI;
plane7.position.set(0, 0, 30);

const plane8 = new THREE.Mesh(planeGeometry, planeViolet);
plane8.rotation.x = 5 * PI;
plane8.position.set(0, 0, 60);

const plane9 = new THREE.Mesh(planeGeometry, planeAqua);
plane9.rotation.x = 5 * PI;
plane9.position.set(0, 0, -60);

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
