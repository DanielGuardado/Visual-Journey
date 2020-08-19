import * as THREE from "three";
import SimplexNoise from "simplex-noise";
const { avg, modulate } = require("./util");
import {
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
} from "./geometry";

const noise = new SimplexNoise();
const visualizerInit = function () {
  const file = document.getElementById("mp3File");
  const audio = document.getElementById("audio");
  const demo = document.getElementById("audio1");

  demo.onplay = function () {
    const demo = this;
    audio.src = demo.src;
    play();
  };

  file.onchange = function () {
    const files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    play();
  };
  function play() {
    //create audio analyzer using js web audio api
    const context = new AudioContext();
    const src = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const scene = new THREE.Scene();
    const group = new THREE.Group();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    //camera pos R:L / up:down / far away
    camera.position.set(0, 300, 0);
    //where cam is looking
    camera.lookAt(scene.position);
    scene.add(camera);
    //creating renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    //adding lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.x = 1;
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(directionalLight);
    scene.add(light);
    group.add(plane);
    group.add(plane2);
    group.add(plane3);
    group.add(plane4);
    group.add(plane5);
    group.add(plane6);
    group.add(plane7);
    group.add(plane8);
    group.add(plane9);
    group.add(plane10);

    scene.add(group);
    document.getElementById("render").appendChild(renderer.domElement);

    function planeSound(mesh, distortion) {
      mesh.geometry.vertices.forEach(function (vertex) {
        const amp = 6;
        const distance =
          (noise.noise2D(vertex.x, vertex.y) + 0) * distortion * amp;
        vertex.z = distance;
      });
      mesh.geometry.verticesNeedUpdate = true;
      mesh.geometry.computeVertexNormals();
    }

    function render() {
      analyser.getByteFrequencyData(dataArray);
      //spliting the data array into 2 pieces upper half and lower half
      const lowerHalf = dataArray.slice(0, dataArray.length / 2);
      const upperHalf = dataArray.slice(
        dataArray.length / 2 + 1,
        dataArray.length
      );
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

      const lowerAvg = avg(lowerHalfFreq);
      const lowerUpperAvg = avg(lowerUpperHalfFreq);
      const upperLowerAvg = avg(upperLowerFreqHalf);
      const upperUpperAvg = avg(upperUpperFreqHalf);

      const lowerLowerFr = lowerAvg / lowerHalfFreq.length;
      const lowerUpperFr = lowerUpperAvg / lowerUpperHalfFreq.length;
      const upperLowerFr = upperLowerAvg / upperLowerFreqHalf.length;
      const upperUpperFr = upperUpperAvg / upperUpperFreqHalf.length;

      planeSound(plane, modulate(lowerLowerFr, 0, 1, 1, 8));
      planeSound(plane2, modulate(lowerUpperFr, 0, 1, 1, 4));
      planeSound(plane3, modulate(upperLowerFr, 0, 1, 1, 8));
      planeSound(plane4, modulate(upperUpperFr, 0, 1, 1, 6));
      planeSound(plane5, modulate(upperLowerFr, 0, 1, 1, 8));
      planeSound(plane6, modulate(lowerUpperFr, 0, 1, 1, 6));
      planeSound(plane7, modulate(upperUpperFr, 0, 1, 1, 6));
      planeSound(plane8, modulate(upperLowerFr, 0, 1, 1, 6));
      planeSound(plane9, modulate(lowerUpperFr, 0, 1, 1, 6));
      planeSound(plane10, modulate(lowerLowerFr, 0, 1, 1, 6));

      // group.rotation.y += 0;
      group.rotation.y += lowerLowerFr / 500;
      group.rotation.x += upperUpperFr / 3500;
      group.rotation.x -= lowerLowerFr / 500;
      // group.rotation.z += upperUpperFr / 3500;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    render();
    audio.play();
  }
};

export { visualizerInit };
