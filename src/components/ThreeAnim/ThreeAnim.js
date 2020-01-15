import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



class ThreeAnim extends Component {

    componentDidMount() {
        var scene = new THREE.Scene();
        //MRDOOB STATS.JS
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount.appendChild(renderer.domElement);

        // var cubematerials = [
        //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("public/hills_dn/hills_lf.jpg"), side: THREE.DoubleSide }),
        //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("public/hills_dn/hills_rt.jpg"), side: THREE.DoubleSide }),
        //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("public/hills_dn/hills_up.jpg"), side: THREE.DoubleSide }),
        //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("public/hills_dn/hills_dn.jpg"), side: THREE.DoubleSide }),
        //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("public/hills_dn/hills_ft.jpg"), side: THREE.DoubleSide }),
        //     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("public/hills_dn/hills_bk.jpg"), side: THREE.DoubleSide }),
            
        // ];


        var geometry = new THREE.CubeGeometry(10 , 10, 10);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }); //MESHFACEMATERIALBLAHBLAHcubematerials );    
        //var material = new THREE.MeshFaceMaterial(cubematerials);

        var cube = new THREE.Mesh(geometry, material);
//        scene.add(cube);

        var controls = new OrbitControls(camera, renderer.domElement);
        var ambientlight = new THREE.AmbientLight(0xffffff, 2);
        scene.add(ambientlight);
        // var light1 = new THREE.PointLight(0xffffff, 4, 20);
        // scene.add(light1);
        // var light2 = new THREE.PointLight(0xffffff, 1);
        // scene.add(light2);
        // var light3 = new THREE.PointLight(0xffffff, 1, 100);
        // scene.add(light3);

        // var ptlight = new THREE.SpotLight(0xffffff, 3, 100);
        // scene.add(ptlight);
        camera.position.z = 12;

        var missileloaded = function (gltf) {
            meshmiss=gltf.scene;
            meshmiss.position.set(2,2,2);
            scene.add(meshmiss);

        }

        var loader = new GLTFLoader();
        loader.load(  'models/scene.gltf', missileloaded);
        var meshmiss;
          
            
        window.addEventListener('resize', function () {
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });
        var yi = 1;
        var xi=3.14;
        var animate = function () {
            requestAnimationFrame(animate);
            //ptlight.position.set(-20,-20,-20);


            // var time = Date.now() * 0.001;
            // light1.position.set(Math.cos(time * 0.7) * 30, Math.sin(time * 0.7) * 30, Math.sin(time * 0.7) * 30);
            // light2.position.set(Math.sin(time * 0.7) * 30, Math.cos(time * 0.7) * 30, Math.sin(time * 0.7) * 30);
            // light3.position.set(Math.sin(time * 0.7) * 30, Math.sin(time * 0.7) * 30, Math.cos(time * 0.7) * 30);

            // cube.rotation.x += 0.01;
            // cube.position.y += 0.01;
           
            if(meshmiss){
                
                xi-=0.005;
                yi=Math.sin(xi)*5;
                meshmiss.position.x = xi;
                meshmiss.position.y =yi ;
                // meshmiss.rotation.x = 10;

                meshmiss.rotation.y = 5;
                meshmiss.rotation.z = 0.25;

                meshmiss.position.z +=0.01;
                
                
            }
           



            renderer.render(scene, camera);
        };

        animate();

    }

    render() {
        return (
            <div ref={ref => (this.mount) = ref} />
        );
    }
}

export default ThreeAnim;