import {
  Scene,
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
} from "three";
const scene = new Scene();
//45
const camera = new PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.01,
  2000
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
