import {
  Scene,
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
} from "three";
const scene = new Scene();
const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
//camera pos R:L / up:down / far away
camera.position.set(0, 300, 0);
//where cam is looking
camera.lookAt(scene.position);
//adding lighting
const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.x = 1;
const light = new AmbientLight(0xffffff);
export { camera, directionalLight, light };
