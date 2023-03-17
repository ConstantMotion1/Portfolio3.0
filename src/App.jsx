import './App.css';
import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import sunWrap from './assets/textures/sun.jpg';
import mercuryWrap from './assets/textures/mercury.jpg';
import venusWrap from './assets/textures/venus.jpg';
import earthWrap from './assets/textures/earth.jpg';
import marsWrap from './assets/textures/mars.jpg';
import jupiterWrap from './assets/textures/jupiter.jpg';
import saturnWrap from './assets/textures/saturn.jpg';
import saturnringWrap from './assets/textures/saturnring.png';
import uranusWrap from './assets/textures/uranus.jpg';
import neptuneWrap from './assets/textures/neptune.jpg';
import plutoWrap from './assets/textures/pluto.jpg';




//Setting up Scene
const scene = new THREE.Scene();

//Setup Lights
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0x333333, 0.2);
scene.add(ambientLight);

//Setup Viewport
const size = {
  width : window.innerWidth,
  height : window.innerHeight
}

//Setup Camera
const camera = new THREE.PerspectiveCamera(45, size.width/size.height, 0.1, 2000);
camera.position.z = 20
scene.add(camera)

//Connect Canvas
const canvas = document.getElementById('root')
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(size.width, size.height)
renderer.setPixelRatio(2);
renderer.render(scene, camera)

//Initialize Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = true;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 5;


//Dynamic Resize
window.addEventListener('resize', () => {
  //update size
  size.width = window.innerWidth,
  size.height = window.innerHeight

  //update camera
  camera.aspect = size.width/size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
})

//Create Textures
const textureLoader = new THREE.TextureLoader()


//Create Sun 
const sunGeometry = new THREE.SphereGeometry(7, 64, 64);
const sunMaterial = new THREE.MeshBasicMaterial({map: textureLoader.load(sunWrap)});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

//Make Sun the light emitter
sunMesh.add(light)
scene.add(sunMesh)

// Create Planets
const mercuryGeometry = new THREE.SphereGeometry(1, 64, 64);
const mercuryMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(mercuryWrap)});
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercuryMesh.position.set(13, 0, 10)
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercuryMesh)
scene.add(mercuryObj);

const venusGeometry = new THREE.SphereGeometry(2, 64, 64);
const venusMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(venusWrap)});
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
venusMesh.position.set(19, 0, 15)
const venusObj = new THREE.Object3D();
venusObj.add(venusMesh)
scene.add(venusObj);

const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
const earthMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(earthWrap)});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
earthMesh.position.set(24, 0, 30);
const earthObj = new THREE.Object3D();
earthObj.add(earthMesh)
scene.add(earthObj);

const marsGeometry = new THREE.SphereGeometry(2, 64, 64);
const marsMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(marsWrap)});
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
marsMesh.position.set(30, 0, 40);
const marsObj = new THREE.Object3D();
marsObj.add(marsMesh)
scene.add(marsObj);

const jupiterGeometry = new THREE.SphereGeometry(5, 64, 64);
const jupiterMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(jupiterWrap)});
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiterMesh.position.set(45, 0, 50);
const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiterMesh)
scene.add(jupiterObj);

const saturnGeometry = new THREE.SphereGeometry(4, 64, 64);
const saturnMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(saturnWrap)});
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturnMesh.position.set(60, 0, 60);
// Create saturn's ring
const saturnRing = new THREE.TorusGeometry(7, 0.6, 30, 200);
const saturnRingMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(saturnringWrap)});
const saturnRingMesh = new THREE.Mesh(saturnRing, saturnRingMaterial);
saturnRingMesh.position.set(60, 0, 60);
let axis = new THREE.Vector3(1, 0, 0)
saturnRingMesh.rotateOnAxis(axis, 20)
const saturnObj = new THREE.Object3D();
saturnObj.add(saturnMesh)
//Combine saturn sphere object with ring object
const saturnwRing = new THREE.Group();
saturnwRing.add(saturnObj);
saturnwRing.add(saturnRingMesh);
scene.add(saturnwRing);


const uranusGeometry = new THREE.SphereGeometry(3, 64, 64);
const uranusMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(uranusWrap)});
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranusMesh.position.set(67, 0, 65);
const uranusObj = new THREE.Object3D();

//Create Uranus ring
const uranusRing = new THREE.TorusGeometry(3.5, 0.4, 30, 200);
const uranusRingMaterial = new THREE.MeshStandardMaterial({color:'#1BAD9C'});
const uranusRingMesh = new THREE.Mesh(uranusRing, uranusRingMaterial);
uranusRingMesh.position.set(67, 0, 65);
uranusObj.add(uranusMesh)
//Combine saturn sphere object with ring object
const uranuswRing = new THREE.Group();
uranuswRing.add(uranusObj);
uranuswRing.add(uranusRingMesh);
scene.add(uranuswRing);

scene.add(uranuswRing);

const neptuneGeometry = new THREE.SphereGeometry(2, 64, 64);
const neptuneMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(neptuneWrap)});
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptuneMesh.position.set(75, 0, 70);
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptuneMesh)
scene.add(neptuneObj);

const plutoGeometry = new THREE.SphereGeometry(1, 64, 64);
const plutoMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load(plutoWrap)});
const plutoMesh = new THREE.Mesh(plutoGeometry, plutoMaterial);
plutoMesh.position.set(89, 0, 80);
const plutoObj = new THREE.Object3D();
plutoObj.add(plutoMesh)
scene.add(plutoObj);

//Create Stars
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({color: '#ffffff', size: 0.2});
const starCount = 15000;
const vertices = new Float32Array(starCount)

//Give each vertices a random position
for (let i = 0; i < starCount; i++) {
  vertices[i] = (Math.random() - 0.5) * 1000
}
const buffer = new THREE.BufferAttribute(vertices, 3)

starGeometry.setAttribute("position", buffer )

const star = new THREE.Points(starGeometry, starMaterial);
const stars = new THREE.Object3D();
stars.add(star)
scene.add(stars);


function animate() {
  mercuryObj.rotateY(0.04)
  venusObj.rotateY(0.015)
  earthObj.rotateY(0.01)
  marsObj.rotateY(0.009)
  jupiterObj.rotateY(0.007)
  saturnwRing.rotateY(0.004)
  uranuswRing.rotateY(0.002)
  neptuneObj.rotateY(0.0012)
  plutoObj.rotateY(0.00095)


  earthMesh.rotateY(0.003)
  jupiterMesh.rotateY(0.003)
  sunMesh.rotateY(0.004)
}

renderer.setAnimationLoop(animate)


const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop)
}
loop();


//Timeline
const tl = gsap.timeline({ default: { duration: 1 }})  
tl.fromTo(scene.scale, {z:0, x:0, z:0}, {z:1, x:1, z:1})
tl.fromTo('nav', {y: '-100%'}, {y: '0%'})
tl.fromTo(camera.position, {z:20, x:0, y:0}, {z:150, x:0, y:60})
tl.fromTo('h1', {opacity: '0%'}, {opacity: '100%'})


//mouse animation color
// let mouseDown = false
// let rbg = []
// window.addEventListener('mousedown', () => (mouseDown = true))
// window.addEventListener('mouseup', () => (mouseDown = true))

// window.addEventListener('mousemove', (e) => {
//   if(mouseDown) {
//     rgb = [
//       math.round()
//     ]
//   }
// })

function App() {
  return (
    <div></div>
  )
}

export default App
