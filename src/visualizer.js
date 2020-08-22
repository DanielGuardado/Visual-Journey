import * as THREE from "three";
import { Scene, Group, WebGLRenderer } from "three";
import SimplexNoise from "simplex-noise";
import { avg, modulate, max, min } from "./util";
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
  farPlane,
  farPlane2,
  farPlane3,
  farPlane4,
} from "./geometry";
import { sphere, sphere2, sphere3 } from "./spheres";
import { camera, directionalLight, light } from "./lighting_renderer";
import {
  charizard,
  meeseeks,
  toad,
  spongebob,
  duck,
  jelly,
  jelly2,
} from "./models";

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

    const scene = new Scene();
    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    const group = new Group();
    scene.add(camera);
    scene.add(directionalLight);
    scene.add(light);
    scene.add(group);
    document.getElementById("render").appendChild(renderer.domElement);

    const planeSound = function planeSound(mesh, distortion) {
      mesh.geometry.vertices.forEach(function (vertex) {
        const amp = 6;
        const distance =
          (noise.noise2D(vertex.x, vertex.y) + 0) * distortion * amp;
        vertex.z = distance;
      });
      mesh.geometry.verticesNeedUpdate = true;
      mesh.geometry.computeVertexNormals();
    };

    // const sphereSound = function sphereSound(mesh, distortion, distortion2) {
    //   mesh.geometry.vertices.forEach(function (vertex) {
    //     const offset = mesh.geometry.parameters.radius;
    //     const amp = 6;
    //     vertex.normalize();
    //     const distance =
    //       offset +
    //       distortion2 +
    //       (noise.noise2D(vertex.x, vertex.y) + 0) * distortion * amp;
    //     vertex.z = distance;
    //   });
    //   mesh.geometry.verticesNeedUpdate = true;
    //   mesh.geometry.computeVertexNormals();
    // };

    let posx = -150;
    let posy = 150;
    let posz = 150;

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

      const lowerLowerMax = max(lowerHalfFreq);
      const lowerUpperMax = max(lowerUpperHalfFreq);
      const upperLowerMax = max(upperLowerFreqHalf);
      const upperUpperMax = max(upperUpperFreqHalf);

      const lowerLowerMin = min(lowerHalfFreq);
      const lowerUpperMin = min(lowerUpperHalfFreq);
      const upperLowerMin = min(upperLowerFreqHalf);
      const upperUpperMin = min(upperUpperFreqHalf);

      const lowerLowerFr = lowerAvg / lowerHalfFreq.length;
      const lowerUpperFr = lowerUpperAvg / lowerUpperHalfFreq.length;
      const upperLowerFr = upperLowerAvg / upperLowerFreqHalf.length;
      const upperUpperFr = upperUpperAvg / upperUpperFreqHalf.length;

      const lowerLowerMaxFr = lowerLowerMax / lowerHalfFreq.length;
      const lowerUpperMaxFr = lowerUpperMax / lowerUpperHalfFreq.length;
      const upperLowerMaxFr = upperLowerMax / upperLowerFreqHalf.length;
      const upperUpperMaxFr = upperUpperMax / upperUpperFreqHalf.length;

      const lowerLowerMinFr = lowerLowerMin / lowerHalfFreq.length;
      const lowerUpperMinFr = lowerUpperMin / lowerUpperHalfFreq.length;
      const upperLowerMinFr = upperLowerMin / upperLowerFreqHalf.length;
      const upperUpperMinFr = upperUpperMin / upperUpperFreqHalf.length;

      if (
        (lowerLowerMaxFr > 7.6 && lowerLowerMaxFr < 7.0) ||
        lowerLowerMaxFr >= 7.9375
      ) {
        group.add(plane);
        group.add(plane2);
        group.add(plane3);
        group.add(sphere);
        group.add(charizard);
        group.add(meeseeks);
        group.remove(sphere3);
      } else {
        group.remove(plane);
        group.remove(plane2);
        group.remove(plane3);
        group.remove(sphere);
        group.remove(charizard);
        group.remove(meeseeks);
        if (lowerLowerMaxFr > 6 && lowerLowerMaxFr < 7.5) {
          group.add(sphere3);
        } else {
          group.remove(sphere3);
        }
      }

      if (
        (lowerLowerMinFr > 5.2 && lowerLowerMinFr < 5.4) ||
        (lowerLowerMinFr > 5.7 && lowerLowerMinFr < 5.9) ||
        lowerLowerMinFr > 6.1
      ) {
        group.add(plane6);
        group.add(plane7);
        group.add(toad);
        group.add(sphere2);
      } else {
        group.remove(plane6);
        group.remove(plane7);
        group.remove(toad);
        group.remove(sphere2);
      }

      if (
        (lowerUpperMinFr > 2.4 && lowerUpperMinFr < 3.4) ||
        (lowerUpperMinFr > 3.9 && lowerUpperMinFr < 4.3)
      ) {
        group.add(plane8);
        group.add(plane9);
        group.add(plane10);
        // group.add(duck);
        // group.add(spongebob);
      } else {
        group.remove(plane8);
        group.remove(plane9);
        group.remove(plane10);
        // group.remove(duck);
        // group.remove(spongebob);
      }

      if (lowerUpperMinFr > 3) {
        group.add(duck);
        group.add(spongebob);
        group.add(jelly);
        group.add(jelly2);
      } else {
        group.remove(duck);
        group.remove(spongebob);
        group.remove(jelly);
        group.remove(jelly2);
      }

      if (
        upperLowerMaxFr < 0.25 ||
        (upperLowerMaxFr > 1 && upperLowerMaxFr < 1.5) ||
        (upperLowerMaxFr > 2.5 && upperLowerMaxFr < 3)
      ) {
        group.add(plane4);
        group.add(plane5);
      } else {
        group.remove(plane4);
        group.remove(plane5);
      }
      if (upperLowerMaxFr === 0) {
        group.remove(plane4);
        group.remove(plane5);
      }
      sphere.rotation.x += lowerLowerFr / 300;
      sphere.rotation.y += lowerLowerFr / 300;
      charizard.rotation.x += lowerLowerFr / 300;
      charizard.rotation.y += upperLowerFr / 300;
      meeseeks.rotation.x += upperUpperFr;
      meeseeks.rotation.y += upperUpperFr;
      toad.rotation.x += upperLowerFr / 200;
      toad.rotation.y += upperLowerFr / 200;
      spongebob.rotation.x += lowerUpperFr / 200;
      spongebob.rotation.y += lowerUpperFr / 200;
      duck.rotation.x += upperLowerFr / 200;
      duck.rotation.y += upperLowerFr / 200;

      planeSound(plane, modulate(lowerLowerFr, 0, 1, 1, 6));
      // planeSound(plane, modulate(lowerLowerFr * 20, 0, 2, 2, 20));
      planeSound(plane2, modulate(lowerLowerFr, 0, 1, 1, 4));
      planeSound(plane3, modulate(lowerLowerFr, 0, 1, 1, 8));
      planeSound(plane4, modulate(upperLowerFr, 0, 1, 1, 6));
      planeSound(plane5, modulate(upperLowerFr, 0, 1, 1, 8));
      planeSound(plane6, modulate(lowerUpperMinFr, 0, 1, 1, 6));
      planeSound(plane7, modulate(lowerUpperMinFr, 0, 1, 1, 6));
      planeSound(plane8, modulate(lowerUpperFr, 0, 1, 1, 6));
      planeSound(plane9, modulate(lowerUpperFr, 0, 1, 1, 6));
      planeSound(plane10, modulate(lowerUpperFr, 0, 1, 1, 6));
      planeSound(farPlane, modulate(lowerUpperMinFr, 0, 1, 1, 6));
      planeSound(farPlane2, modulate(lowerUpperMinFr, 0, 1, 1, 6));
      planeSound(farPlane3, modulate(lowerUpperFr, 0, 1, 1, 6));
      planeSound(farPlane4, modulate(lowerUpperFr, 0, 1, 1, 6));
      planeSound(sphere3, modulate(lowerUpperFr, 0, 1, 1, 6));
      if (lowerLowerFr > 5) {
        group.rotation.y += lowerLowerFr / 500;
      } else {
        group.rotation.y - +lowerLowerFr / 250;
      }
      if (upperUpperFr > 2.5) {
        group.rotation.z += upperLowerFr / 250;
      } else {
        group.rotation.z -= upperLowerFr / 500;
      }
      if (lowerUpperFr > 5.5) {
        group.rotation.x += lowerUpperFr / 250;
      } else {
        group.rotation.x -= lowerUpperFr / 500;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    render();
    audio.play();
  }
};

export { visualizerInit };
