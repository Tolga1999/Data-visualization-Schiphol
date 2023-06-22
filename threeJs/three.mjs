import * as THREE from 'three';
import {
    TrackballControls
} from 'three/addons';
// import {
//     GLTFLoader
// } from '/three/addons/loaders/GLTFLoader.js';

// renderer element wordt gemaakt, sized en toegevoegd aan HTML document
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#scene"),
});

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();

// camera variable (er zijn verschillende), altijd width/height anders squished like old movies
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

// camera position changed to avoid camera and cube to be inside eachother cause of (0,0,0)
camera.position.z = 3;

// to controll your cube with your mouse
const controls = new TrackballControls(camera, renderer.domElement);

controls.rotateSpeed = 4.0;
// how far you can go out (dolly out) with the perspective camera
controls.maxDistance = 5;
// how far you can go in (dolly in) with the perspective camera
controls.minDistance = 2;
// panning camera is disabled
controls.noPan = true;

// set ambient light for standardMaterial
const light = new THREE.AmbientLight(0xffffff, 0.75); // soft white light
// const pointlight = new THREE.PointLight( 0xffffff); // soft white light
scene.add(light);

// loading in models
// let loadedModel;
// const loader = new GLTFLoader();
// loader.load('../assets/earth/scene.gltf', function (gltfScene) {
//     loadedModel = gltfScene
//     // loadedModel.scene.scale.set(2,2,2);
//     scene.add(loadedModel.scene);
// });

// loading in jpeg for sphere
const globeTexture = new THREE.TextureLoader().load('../assets/globeTexture.jpeg');

// mesh function picks up item and adds the materials to it which we can use in the scene after
const globe = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 32),
    new THREE.MeshStandardMaterial({
        map: globeTexture
    })
)
scene.add(globe)


// setting color for scene
renderer.setClearColor(0xF3F7FD, 1);

// rendering scene, loop so everytime you refresh it renders the model/cube
function animate() {
    // so we can rotate the globe
    // globe.rotation.x += 0.005;
    globe.rotation.y += 0.005;

    requestAnimationFrame(animate);

    // update controls
    controls.update();

    renderer.render(scene, camera);
}

// calling animate function
animate();