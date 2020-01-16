import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class ThreeAnim extends Component {
    componentDidMount() {
        var camera, scene, renderer;
        var objects = [];
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xcce0ff);
        //scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
        // camera
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(1700, 900, 1900);
        // lights
        scene.add(new THREE.AmbientLight(0x666666));
        var light = new THREE.DirectionalLight(0xdfebff, 1);
        light.position.set(50, 200, 100);
        light.position.multiplyScalar(1.3);
        light.castShadow = true;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        var d = 300;
        light.shadow.camera.left = - d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = - d;
        light.shadow.camera.far = 1000;
        scene.add(light);
        var loader = new THREE.TextureLoader();
        var groundTexture = loader.load('images/grass.jpg');
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(25, 25);
        groundTexture.anisotropy = 16;
        groundTexture.encoding = THREE.sRGBEncoding;
        var groundMaterial = new THREE.MeshLambertMaterial({ map: groundTexture });
        var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(10000, 10000), groundMaterial);
        mesh.position.y = - 250;
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);
        objects.push(mesh);
        //roll-over
        // var rollOverGeo = new THREE.BoxBufferGeometry( 50, 50, 50 );
        // rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
        // rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
        // scene.add( rollOverMesh );
        //100 x 100
        var gridgeo = new THREE.PlaneGeometry(1000, 1000);
        var gridmaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
        var gridplane = new THREE.Mesh(gridgeo, gridmaterial);
        gridplane.position.set(1000, -240, 100);
        gridplane.rotation.x = - Math.PI / 2;
        scene.add(gridplane);
        console.log(gridplane);
        // cubes
        var cubeGeo = new THREE.PlaneBufferGeometry(50, 50, 50);
        // cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000});
        // grid
        // var gridHelper = new THREE.GridHelper( 100, 100 );
        // scene.add( gridHelper );
        //interceptors
        var gltfloader1 = new GLTFLoader();
        gltfloader1.load('models/interceptor/scene.gltf', (gltf) => {
            var interceptor = gltf.scene;
            interceptor.scale.set(13, 13, 13);
            interceptor.position.set(550, -240, 480);
            // interceptor.rotation.x=- Math.PI / 2;
            scene.add(interceptor);
        });
        
        var gltfloader2 = new GLTFLoader();
        gltfloader2.load('models/interceptor/scene.gltf', (gltf) => {
            var interceptor = gltf.scene;
            interceptor.scale.set(13, 13, 13);
            interceptor.position.set(550, -240, -330);
            // interceptor.rotation.x=- Math.PI / 2;
            scene.add(interceptor);
        });

        var gltfloader3 = new GLTFLoader();
        gltfloader3.load('models/interceptor/scene.gltf', (gltf) => {
            var interceptor = gltf.scene;
            interceptor.scale.set(13, 13, 13);
            interceptor.position.set(1420, -240, 480);
            // interceptor.rotation.x=- Math.PI / 2;
            scene.add(interceptor);
        });

        var gltfloader4 = new GLTFLoader();
        gltfloader4.load('models/interceptor/scene.gltf', (gltf) => {
            var interceptor = gltf.scene;
            interceptor.scale.set(13, 13, 13);
            interceptor.position.set(1420, -240, -330);
            // interceptor.rotation.x=- Math.PI / 2;
            scene.add(interceptor);
        });

        var anti_ball, ball;

        //anti_ballistic
        var anti_ballistic = new GLTFLoader();
        anti_ballistic.load('models/anti_ballistic/scene.gltf', (gltf) => {
            anti_ball = gltf.scene;
            anti_ball.scale.set(70, 70, 70);
            anti_ball.rotation.y = (45 + 22.5);
            anti_ball.rotation.x = (-175);
            anti_ball.position.set(550, -130, 480);
            // interceptor.rotation.x=- Math.PI / 2;
            console.log(anti_ball);
            scene.add(anti_ball);
        });

        var ballistic = new GLTFLoader();
        ballistic.load('models/ballistic_missile/scene.gltf', (gltf) => {
            ball = gltf.scene;
            ball.scale.set(80, 80, 80);
            ball.position.set(550, -180, -2400);
            ball.rotation.x = Math.PI / 4;
            ball.rotation.z=- Math.PI / 2;
            scene.add(ball);
        });




        //raycaster = new THREE.Raycaster();
        // mouse = new THREE.Vector2();


        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount.appendChild(renderer.domElement);

        var controls = new OrbitControls(camera, renderer.domElement);
        controls.maxPolarAngle = Math.PI * 0.5;
        controls.minDistance = 1000;
        controls.maxDistance = 50000;

        window.addEventListener('resize', onWindowResize, false);
        // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        // document.addEventListener( 'mousedown', onDocumentMouseDown, false );

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        var zi = 2880;
        var yi = 1;
        function render() {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
            controls.update();
            camera.updateProjectionMatrix();
            if (anti_ball) {
                //xi-=0.05;
                zi -= 0.05;
                yi = Math.sin(zi) * 50;
                // anti_ball.position.x=xi;
                anti_ball.position.y = yi;
                anti_ball.position.z -= 8;

                // anti_ball.rotation.y=5; 
                // anti_ball.rotation.z=0.25;
            }
        }
        render();


    }



    render() {
        return (
            <div ref={ref => (this.mount) = ref} ></div>
        );
    }
}

export default ThreeAnim;
