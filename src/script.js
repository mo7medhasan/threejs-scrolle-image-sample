import "./style.css";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "dat.gui";
// import gsap from "gsap";
// // texture Loader
// const textureLoader = new THREE.TextureLoader();

// // // Debug
// // const gui = new dat.GUI();

// // // Canvas
// // const canvas = document.querySelector("canvas.webgl");

// // // Scene
// // const scene = new THREE.Scene();
// // (function() {
// // const geometry = new THREE.PlaneBufferGeometry(1, 1.3);

// // for (let i = 0; i < 5; i++) {
// //   const material = new THREE.MeshBasicMaterial({
// //     map: textureLoader.load(`/images/${i + 1}.jpg`),
// //   });

// //   const img = new THREE.Mesh(geometry, material);
// //   img.position.set(1, i * -1.8);

// //   scene.add(img);
// // }

// // let objs = [];

// // scene.traverse((object) => {
// //   if (object.isMesh) objs.push(object);
// // });

// // // Objects

// // // Lights

// // const pointLight = new THREE.PointLight(0xffffff, 0.1);
// // pointLight.position.x = 2;
// // pointLight.position.y = 3;
// // pointLight.position.z = 4;
// // scene.add(pointLight);

// // /**
// //  * Sizes
// //  */
// // const sizes = {
// //   width: window.innerWidth,
// //   height: window.innerHeight,
// // };

// // window.addEventListener("resize", () => {
// //   // Update sizes
// //   sizes.width = window.innerWidth;
// //   sizes.height = window.innerHeight;

// //   // Update camera
// //   camera.aspect = sizes.width / sizes.height;
// //   camera.updateProjectionMatrix();

// //   // Update renderer
// //   renderer.setSize(sizes.width, sizes.height);
// //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// // });

// // /**
// //  * Camera
// //  */
// // // Base camera
// // const camera = new THREE.PerspectiveCamera(
// //   75,
// //   sizes.width / sizes.height,
// //   0.1,
// //   100
// // );
// // camera.position.x = 0;
// // camera.position.y = 0;
// // camera.position.z = 2;
// // scene.add(camera);
// // gui.add(camera.position, "y").min(-5).max(10);
// // // Controls
// // // const controls = new OrbitControls(camera, canvas)
// // // controls.enableDamping = true

// // /**
// //  * Renderer
// //  */
// // const renderer = new THREE.WebGLRenderer({
// //   canvas: canvas,
// // });
// // renderer.setSize(sizes.width, sizes.height);
// // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// // // mouse

// // let y = 0,
// //   position = 0;

// // const onMouseWheel = (event) => {
// //   y = event.deltaY * 0.0007;
// // };

// // const mouse = new THREE.Vector2();

// // window.addEventListener("mousemove", (event) => {
// //   mouse.x = (event.clientX / sizes.width) * 2 - 1;
// //   mouse.y = -(event.clientY / sizes.height) * 2 + 1;
// // });

// // window.addEventListener("wheel", onMouseWheel);

// // /**
// //  * Animate
// //  */

// // const raycaster = new THREE.Raycaster();

// // const clock = new THREE.Clock();

// // const tick = () => {
// //   const elapsedTime = clock.getElapsedTime();

// //   // Update objects
// //   position += y;
// //   y *= 0.9;

// //   // RayCaster
// //   raycaster.setFromCamera(mouse, camera);

// //   const intersects = raycaster.intersectObjects(objs);
// //   for (const intersect of intersects) {
// //      gsap.to(intersect.object.scale,{x:1.7,y:1.7})  
// //      gsap.to(intersect.object.rotation ,{y:-0.5})  
// //      gsap.to(intersect.object.position ,{z:-0.9})  
 
// //     }

// //   for(const object of objs){
// //     if(!intersects.find( intersect => intersect.object === object )){
// //      gsap.to(  object.scale,{x:1,y:1})
// //      gsap.to(  object.rotation ,{y:0})
// //      gsap.to(  object.position ,{z:0})
// //     }
// //   }

// //   camera.position.y = - position;

// //   // Update Orbital Controls
// //   // controls.update()

// //   // Render
// //   renderer.render(scene, camera);

// //   // Call tick again on the next frame
// //   window.requestAnimationFrame(tick);
// // };

// // tick();})

// // (function() {
// // 	'use strict';
// 	/* 	'To actually be able to display anything with Three.js, we need three things:
// 		A scene, a camera, and a renderer so we can render the scene with the camera.' 
	   		
// 	   		- https://threejs.org/docs/#Manual/Introduction/Creating_a_scene 		*/
       
// 	var scene, camera, renderer;

// 	/* We need this stuff too */
// 	var container, aspectRatio,
// 		HEIGHT, WIDTH, fieldOfView,
// 		nearPlane, farPlane,
// 		mouseX, mouseY, windowHalfX,
// 		windowHalfY, stats, geometry,
// 		starStuff, materialOptions, stars;

// 	init();
// 	animate();

// 	function init() {
// 		container = document.createElement('div');
// 		document.body.appendChild( container );
// 		document.body.style.overflow = 'hidden';

// 		HEIGHT = window.innerHeight;
// 		WIDTH = window.innerWidth;
// 		aspectRatio = WIDTH / HEIGHT;
// 		fieldOfView = 75;
// 		nearPlane = 1;
// 		farPlane = 1000;
// 		mouseX = 0;
// 		mouseY = 0;

// 		windowHalfX = WIDTH / 2;
// 		windowHalfY = HEIGHT / 2;

// 	/* 	fieldOfView — Camera frustum vertical field of view.
// 			aspectRatio — Camera frustum aspect ratio.
// 			nearPlane — Camera frustum near plane.
// 			farPlane — Camera frustum far plane.	

// 			- https://threejs.org/docs/#Reference/Cameras/PerspectiveCamera

// 		 	In geometry, a frustum (plural: frusta or frustums) 
// 		 	is the portion of a solid (normally a cone or pyramid) 
// 		 	that lies between two parallel planes cutting it. - wikipedia.		*/

// 		camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

// 		//Z positioning of camera

// 		camera.position.z = farPlane / 2;
		
// 		scene = new THREE.Scene({antialias:true});
// 		scene.fog = new THREE.FogExp2( 0x000000, 0.0003 );

// 		// The wizard's about to get busy.
// 		starForge();
		
// 		//check for browser Support
// 		if (webGLSupport()) {
// 			//yeah?  Right on...
// 			renderer = new THREE.WebGLRenderer({alpha: true});

// 		} else {
// 			//No?  Well that's okay.
// 			renderer = new THREE.CanvasRenderer();
// 		}

// 		renderer.setClearColor(0x000011, 1);
// 		renderer.setPixelRatio(window.devicePixelRatio);
// 		renderer.setSize( WIDTH, HEIGHT);
// 		container.appendChild(renderer.domElement);

// 		stats = new Stats();
// 		stats.domElement.style.position = 'absolute';
// 		stats.domElement.style.top = '0px';
// 		stats.domElement.style.right = '0px';
// 		container.appendChild( stats.domElement );

// 		window.addEventListener( 'resize', onWindowResize, false );
// 		document.addEventListener( 'mousemove', onMouseMove, false );
		
// 	}

// 	function animate() {
// 		requestAnimationFrame(animate);
// 		render();
// 		stats.update();
// 	}


// 	function render() {
// 		camera.position.x += ( mouseX - camera.position.x ) * 0.005;
// 		camera.position.y += ( - mouseY - camera.position.y ) * 0.005;
// 		camera.lookAt( scene.position );
// 		renderer.render(scene, camera);
// 	}

// 	function webGLSupport() {
// 		/* 	The wizard of webGL only bestows his gifts of power
// 			to the worthy.  In this case, users with browsers who 'get it'.		*/

// 		try {
// 			var canvas = document.createElement('canvas');
// 			return !!(window.WebGLRenderingContext && (
// 				canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
// 			);
// 		} catch(e) {
// 			// console.warn('Hey bro, for some reason we\'re not able to use webGL for this.  No biggie, we\'ll use canvas.');
// 			return false;
// 		}
// 	}

// 	function onWindowResize() {

// 		// Everything should resize nicely if it needs to!
// 	  	var WIDTH = window.innerWidth,
// 	  		HEIGHT = window.innerHeight;

// 	  	camera.aspect = aspectRatio;
// 	  	camera.updateProjectionMatrix();
// 	  	renderer.setSize(WIDTH, HEIGHT);
// 	}

// 	function starForge() {
// 		/* 	Yep, it's a Star Wars: Knights of the Old Republic reference,
// 			are you really surprised at this point? 
// 													*/
// 		var starQty = 45000;
// 			geometry = new THREE.SphereGeometry(1000, 100, 50);

// 	    	materialOptions = {
// 	    		size: 1.0, //I know this is the default, it's for you.  Play with it if you want.
// 	    		transparency: true, 
// 	    		opacity: 0.7
// 	    	};

// 	    	starStuff = new THREE.PointCloudMaterial(materialOptions);

// 		// The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

// 		for (var i = 0; i < starQty; i++) {		

// 			var starVertex = new THREE.Vector3();
// 			starVertex.x = Math.random() * 2000 - 1000;
// 			starVertex.y = Math.random() * 2000 - 1000;
// 			starVertex.z = Math.random() * 2000 - 1000;

// 			geometry.vertices.push(starVertex);

// 		}


// 		stars = new THREE.PointCloud(geometry, starStuff);
// 		scene.add(stars);
// 	}

// 	function onMouseMove(e) {

// 		mouseX = e.clientX - windowHalfX;
// 		mouseY = e.clientY - windowHalfY;
// 	}	

// // })();


gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
gsap.set('.scrollDist', {width:'100%', height:'200%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)

document.querySelector('#arrowBtn').addEventListener('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
document.querySelector('#arrowBtn').addEventListener('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
document.querySelector('#arrowBtn').addEventListener('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)