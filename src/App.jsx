import './App.css';
import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



//Setting up Scene
const scene = new THREE.Scene();

//Setup Lights
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0, 0, 0);

//Setup Viewport
const size = {
  width : window.innerWidth,
  height : window.innerHeight
}

//Setup Camera
const camera = new THREE.PerspectiveCamera(45, size.width/size.height, 0.1, 2000);
camera.position.z = 20
scene.add(camera)

//Render Objects
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

//Create Sun 
const sunGeometry = new THREE.SphereGeometry(7, 64, 64);
const sunMaterial = new THREE.MeshBasicMaterial({ color: '#E7E427'});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

//Make Sun the light emitter
sunMesh.add(light)
scene.add(sunMesh)

// Create Planets
const mercuryGeometry = new THREE.SphereGeometry(1, 64, 64);
const mercuryMaterial = new THREE.MeshStandardMaterial({color: '#ffb533'});
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercuryMesh.position.set(13, 0, 10)
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercuryMesh)
scene.add(mercuryObj);

const venusGeometry = new THREE.SphereGeometry(2, 64, 64);
const venusMaterial = new THREE.MeshStandardMaterial({color: '#9C8934'});
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
venusMesh.position.set(19, 0, 15)
const venusObj = new THREE.Object3D();
venusObj.add(venusMesh)
scene.add(venusObj);

const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
const earthMaterial = new THREE.MeshStandardMaterial({color: '#4690BE'});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
earthMesh.position.set(24, 0, 30);
const earthObj = new THREE.Object3D();
earthObj.add(earthMesh)
scene.add(earthObj);

const marsGeometry = new THREE.SphereGeometry(2, 64, 64);
const marsMaterial = new THREE.MeshStandardMaterial({color: '#D54116'});
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
marsMesh.position.set(30, 0, 40);
const marsObj = new THREE.Object3D();
marsObj.add(marsMesh)
scene.add(marsObj);

const jupiterGeometry = new THREE.SphereGeometry(5, 64, 64);
const jupiterMaterial = new THREE.MeshStandardMaterial({color: '#D59816'});
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiterMesh.position.set(45, 0, 50);
const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiterMesh)
scene.add(jupiterObj);

const saturnGeometry = new THREE.SphereGeometry(4, 64, 64);
const saturnMaterial = new THREE.MeshStandardMaterial({color: '#C27E0E'});
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturnMesh.position.set(60, 0, 60);
const saturnObj = new THREE.Object3D();
saturnObj.add(saturnMesh)
scene.add(saturnObj);

const uranusGeometry = new THREE.SphereGeometry(3, 64, 64);
const uranusMaterial = new THREE.MeshStandardMaterial({color: '#0E24C2'});
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranusMesh.position.set(67, 0, 65);
const uranusObj = new THREE.Object3D();
uranusObj.add(uranusMesh)
scene.add(uranusObj);

const neptuneGeometry = new THREE.SphereGeometry(2, 64, 64);
const neptuneMaterial = new THREE.MeshStandardMaterial({color: '#30BCD3'});
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptuneMesh.position.set(75, 0, 70);
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptuneMesh)
scene.add(neptuneObj);

const plutoGeometry = new THREE.SphereGeometry(1, 64, 64);
const plutoMaterial = new THREE.MeshStandardMaterial({color: '#B4D8DE'});
const plutoMesh = new THREE.Mesh(plutoGeometry, plutoMaterial);
plutoMesh.position.set(89, 0, 80);
const plutoObj = new THREE.Object3D();
plutoObj.add(plutoMesh)
scene.add(plutoObj);


function animate() {
  mercuryObj.rotateY(0.04)
  venusObj.rotateY(0.015)
  earthObj.rotateY(0.01)
  marsObj.rotateY(0.008)
  jupiterObj.rotateY(0.002)
  saturnObj.rotateY(0.001)
  uranusObj.rotateY(0.0008)
  neptuneObj.rotateY(0.0007)
  plutoObj.rotateY(0.0009)
}

renderer.setAnimationLoop(animate)


const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop)
}
loop();


//Timeline
// const tl = gsap.timeline({ default: { duration: 1 }})  
// tl.fromTo(scene.scale, {z:0, x:0, z:0}, {z:1, x:1, z:1})
// tl.fromTo('nav', {y: '-100%'}, {y: '0%'})
// tl.fromTo('.title', {opacity: 0}, {opacity: 1})


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
