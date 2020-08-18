import "./styles/index.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import SimplexNoise from "simplex-noise";

const noise = new SimplexNoise();

//handy math!
const cos = Math.cos;
const sin = Math.sin;
const sqrt = Math.sqrt;
const abs = Math.abs;
const PI = Math.PI;

const visualizerInit = function () {
  const file = document.getElementById("mp3File");
  const audio = document.getElementById("audio");

  document.onload = function () {
    audio.play();
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
    scene.add(directionalLight);
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
    //creating mesh
    const planeGeometry = new THREE.PlaneGeometry(400, 400, 10, 10);
    const planeAqua = new THREE.MeshLambertMaterial({
      color: 0x00ffff,
      side: THREE.DoubleSide,
      wireframe: true
      //wireframe makes seethru wires
    });
    const planeYellow = new THREE.MeshLambertMaterial({
      color: 0xffff00,
      side: THREE.DoubleSide,
      wireframe: true
      //wireframe makes seethru wires
    });
    //creating geometry
    const plane = new THREE.Mesh(planeGeometry, planeYellow);
    plane.rotation.x = -0.5 * PI;
    plane.position.set(0, 0, 0);
    group.add(plane);

    const plane2 = new THREE.Mesh(planeGeometry, planeAqua);
    plane2.rotation.x = 5 * PI;
    plane2.position.set(0, 0, 0);
    group.add(plane2);

    const plane3 = new THREE.Mesh(planeGeometry, planeAqua);
    plane3.rotation.x = -0.5 * PI;
    plane3.position.set(0, 30, 0);
    group.add(plane3);
    
    const plane4 = new THREE.Mesh(planeGeometry, planeYellow);
    plane4.rotation.x = -0.5 * PI;
    plane4.position.set(0, 60, 0);
    group.add(plane4);

    const plane10 = new THREE.Mesh(planeGeometry, planeYellow);
    plane10.rotation.x = -0.5 * PI;
    plane10.position.set(0, -60, 0);
    group.add(plane10);
    
    const plane5 = new THREE.Mesh(planeGeometry, planeAqua);
    plane5.rotation.x = -0.5 * PI;
    plane5.position.set(0, -30, 0);
    group.add(plane5);
    
    const plane6 = new THREE.Mesh(planeGeometry, planeYellow);
    plane6.rotation.x = 5 * PI;
    plane6.position.set(0, 0, -30);
    group.add(plane6);

    const plane7 = new THREE.Mesh(planeGeometry, planeAqua);
    plane7.rotation.x = 5 * PI;
    plane7.position.set(0, 0, 30);
    group.add(plane7);

    const plane8 = new THREE.Mesh(planeGeometry, planeAqua);
    plane8.rotation.x = 5 * PI;
    plane8.position.set(0, 0, 60);
    group.add(plane8);

    const plane9 = new THREE.Mesh(planeGeometry, planeAqua);
    plane9.rotation.x = 5 * PI;
    plane9.position.set(0, 0, -60);
    group.add(plane9);

//     var geometry = new THREE.ConeGeometry( 5, 20, 32 );
// var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
// var cone = new THREE.Mesh( geometry, material );
// group.add( cone );

    scene.add(group);
    document.getElementById("render").appendChild(renderer.domElement);

    function render() {
      analyser.getByteFrequencyData(dataArray);

      const lowerHalfArray = dataArray.slice(0, dataArray.length / 2 - 1);
      const upperHalfArray = dataArray.slice(
        dataArray.length / 2 - 1,
        dataArray.length - 1
      );
      const lowerMax = max(lowerHalfArray);
      const lowerAvg = avg(lowerHalfArray);
      const upperMax = max(upperHalfArray);
      const upperAvg = avg(upperHalfArray);

      const upperAvgFr = upperAvg / upperHalfArray.length;
      const lowerMaxFr = lowerMax / lowerHalfArray.length;
      const lowerAvgFr = lowerAvg / lowerHalfArray.length;
      const upperMaxFr = upperMax / upperHalfArray.length;

      planeSound(plane, modulate(upperAvgFr, 0, 1, 1, 8));
      planeSound(plane2, modulate(lowerMaxFr, 0, 1, 1, 4));
      planeSound(plane3, modulate(lowerAvgFr, 0, 1, 1, 8));
      planeSound(plane4, modulate(upperMaxFr, 0, 1, 1, 6));
      planeSound(plane5, modulate(lowerAvgFr, 0, 1, 1, 8));
      planeSound(plane6, modulate(upperAvgFr, 0, 1, 1, 6));
      planeSound(plane7, modulate(upperAvgFr, 0, 1, 1, 6));
      planeSound(plane8, modulate(upperAvgFr, 0, 1, 1, 6));
      planeSound(plane9, modulate(upperAvgFr, 0, 1, 1, 6));
      planeSound(plane10, modulate(upperAvgFr, 0, 1, 1, 6));
      
      // group.rotation.y += 0;
      group.rotation.y += lowerAvgFr / 300;
      group.rotation.x += upperAvg / 2500
      group.rotation.z +=lowerMaxFr / 2500;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    render();

    function planeSound(mesh, distortion) {
      mesh.geometry.vertices.forEach(function (vertex) {
        const amp = 9;
        const distance =
          (noise.noise2D(vertex.x, vertex.y) +
            0) *
          distortion *
          amp;
        vertex.z = distance;
      });
      mesh.geometry.verticesNeedUpdate = true;
      mesh.geometry.computeVertexNormals();
    }

    audio.play();
  }
};

visualizerInit();

//helper functions
function fractionate(val, minVal, maxVal) {
  return (val - minVal) / (maxVal - minVal);
}

function modulate(val, minVal, maxVal, outMin, outMax) {
  const fraction = fractionate(val, minVal, maxVal);
  const delta = outMax - outMin;
  return outMin + fraction * delta;
}

function avg(arr) {
  const total = arr.reduce(function (sum, b) {
    return sum + b;
  });
  return total / arr.length;
}

function max(arr) {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
}