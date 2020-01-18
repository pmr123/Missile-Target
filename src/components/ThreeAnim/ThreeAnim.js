import React, { Component } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class ThreeAnim extends Component {
    // componentDidMount() {
    //     var camera, scene, renderer;
    //     var objects = [];
    //     scene = new THREE.Scene();
    //     scene.background = new THREE.Color(0xcce0ff);
    //     //scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
    //     // camera
    //     camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    //     camera.position.set(1700, 900, 1900);
    //     // lights
    //     scene.add(new THREE.AmbientLight(0x666666));
    //     var light = new THREE.DirectionalLight(0xdfebff, 1);
    //     light.position.set(50, 200, 100);
    //     light.position.multiplyScalar(1.3);
    //     light.castShadow = true;
    //     light.shadow.mapSize.width = 1024;
    //     light.shadow.mapSize.height = 1024;
    //     var d = 300;
    //     light.shadow.camera.left = - d;
    //     light.shadow.camera.right = d;
    //     light.shadow.camera.top = d;
    //     light.shadow.camera.bottom = - d;
    //     light.shadow.camera.far = 1000;
    //     scene.add(light);
    //     var loader = new THREE.TextureLoader();
    //     var groundTexture = loader.load('images/grass.jpg');
    //     groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    //     groundTexture.repeat.set(25, 25);
    //     groundTexture.anisotropy = 16;
    //     groundTexture.encoding = THREE.sRGBEncoding;
    //     var groundMaterial = new THREE.MeshLambertMaterial({ map: groundTexture });
    //     var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(10000, 10000), groundMaterial);
    //     mesh.position.y = - 250;
    //     mesh.rotation.x = - Math.PI / 2;
    //     mesh.receiveShadow = true;
    //     scene.add(mesh);
    //     objects.push(mesh);
    //     //roll-over
    //     // var rollOverGeo = new THREE.BoxBufferGeometry( 50, 50, 50 );
    //     // rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
    //     // rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
    //     // scene.add( rollOverMesh );
    //     //100 x 100
    //     var gridgeo = new THREE.PlaneGeometry(1000, 1000);
    //     var gridmaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
    //     var gridplane = new THREE.Mesh(gridgeo, gridmaterial);
    //     gridplane.position.set(1000, -240, 100);
    //     gridplane.rotation.x = - Math.PI / 2;
    //     scene.add(gridplane);
    //     console.log(gridplane);
    //     // cubes
    //     var cubeGeo = new THREE.PlaneBufferGeometry(50, 50, 50);
    //     // cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000});
    //     // grid
    //     // var gridHelper = new THREE.GridHelper( 100, 100 );
    //     // scene.add( gridHelper );
    //     //interceptors
    //     var gltfloader1 = new GLTFLoader();
    //     gltfloader1.load('models/interceptor/scene.gltf', (gltf) => {
    //         var interceptor = gltf.scene;
    //         interceptor.scale.set(13, 13, 13);
    //         interceptor.position.set(550, -240, 480);
    //         // interceptor.rotation.x=- Math.PI / 2;
    //         scene.add(interceptor);
    //     });

    //     var gltfloader2 = new GLTFLoader();
    //     gltfloader2.load('models/interceptor/scene.gltf', (gltf) => {
    //         var interceptor = gltf.scene;
    //         interceptor.scale.set(13, 13, 13);
    //         interceptor.position.set(550, -240, -330);
    //         // interceptor.rotation.x=- Math.PI / 2;
    //         scene.add(interceptor);
    //     });

    //     var gltfloader3 = new GLTFLoader();
    //     gltfloader3.load('models/interceptor/scene.gltf', (gltf) => {
    //         var interceptor = gltf.scene;
    //         interceptor.scale.set(13, 13, 13);
    //         interceptor.position.set(1420, -240, 480);
    //         // interceptor.rotation.x=- Math.PI / 2;
    //         scene.add(interceptor);
    //     });

    //     var gltfloader4 = new GLTFLoader();
    //     gltfloader4.load('models/interceptor/scene.gltf', (gltf) => {
    //         var interceptor = gltf.scene;
    //         interceptor.scale.set(13, 13, 13);
    //         interceptor.position.set(1420, -240, -330);
    //         // interceptor.rotation.x=- Math.PI / 2;
    //         scene.add(interceptor);
    //     });

    //     var anti_ball, ball;

    //     //anti_ballistic
    //     var anti_ballistic = new GLTFLoader();
    //     anti_ballistic.load('models/anti_ballistic/scene.gltf', (gltf) => {
    //         anti_ball = gltf.scene;
    //         anti_ball.scale.set(70, 70, 70);
    //         anti_ball.rotation.y = (45 + 22.5);
    //         anti_ball.rotation.x = (-175);
    //         anti_ball.position.set(550, -130, 480);
    //         // interceptor.rotation.x=- Math.PI / 2;
    //         console.log(anti_ball);
    //         scene.add(anti_ball);
    //     });

    //     var ballistic = new GLTFLoader();
    //     ballistic.load('models/ballistic_missile/scene.gltf', (gltf) => {
    //         ball = gltf.scene;
    //         ball.scale.set(80, 80, 80);
    //         ball.position.set(550, -180, -2400);
    //         ball.rotation.x = Math.PI / 4;
    //         ball.rotation.z=- Math.PI / 2;
    //         scene.add(ball);
    //     });




    //     //raycaster = new THREE.Raycaster();
    //     // mouse = new THREE.Vector2();


    //     renderer = new THREE.WebGLRenderer();
    //     renderer.setPixelRatio(window.devicePixelRatio);
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     this.mount.appendChild(renderer.domElement);

    //     var controls = new OrbitControls(camera, renderer.domElement);
    //     controls.maxPolarAngle = Math.PI * 0.5;
    //     controls.minDistance = 1000;
    //     controls.maxDistance = 50000;

    //     window.addEventListener('resize', onWindowResize, false);
    //     // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    //     // document.addEventListener( 'mousedown', onDocumentMouseDown, false );

    //     function onWindowResize() {
    //         camera.aspect = window.innerWidth / window.innerHeight;
    //         camera.updateProjectionMatrix();
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //     }

    //     var zi = 2880;
    //     var yi = 1;
    //     function render() {
    //         requestAnimationFrame(render);
    //         renderer.render(scene, camera);
    //         controls.update();
    //         camera.updateProjectionMatrix();
    //         if (anti_ball) {
    //             //xi-=0.05;
    //             zi -= 0.05;
    //             yi = Math.sin(zi) * 50;
    //             // anti_ball.position.x=xi;
    //             anti_ball.position.y = yi;
    //             anti_ball.position.z -= 8;

    //             // anti_ball.rotation.y=5; 
    //             // anti_ball.rotation.z=0.25;
    //         }
    //     }
    //     render();


    // }
    componentDidMount() {
        console.log("Worked");
        var thita, phi;
        var camera, scene, renderer;
        var objects = [];
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xcce0ff);
        //scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
        // camera
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(-1400, 100, -1600);
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
        var gridmaterial = new THREE.MeshBasicMaterial({ color: 0x964B00, side: THREE.DoubleSide });
        var gridplane = new THREE.Mesh(gridgeo, gridmaterial);
        gridplane.position.set(1000, -240, 100);
        gridplane.rotation.x = - Math.PI / 2;
        scene.add(gridplane);

        //axis lines
        var linegeometry_x = new THREE.Geometry();
        linegeometry_x.vertices.push(new THREE.Vector3(500, -240, -400)); //x, y, z
        linegeometry_x.vertices.push(new THREE.Vector3(820, -240, -400));
        /* linewidth on windows will always be 1 */
        var linematerial_x = new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 200 });
        var line_x = new THREE.Line(linegeometry_x, linematerial_x);
        scene.add(line_x);

        var linegeometry_y = new THREE.Geometry();
        linegeometry_y.vertices.push(new THREE.Vector3(500, -240, -400)); //x, y, z
        linegeometry_y.vertices.push(new THREE.Vector3(500, -50, -400));
        /* linewidth on windows will always be 1 */
        var linematerial_y = new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 200 });
        var line_y = new THREE.Line(linegeometry_y, linematerial_y);
        scene.add(line_y);

        var linegeometry_z = new THREE.Geometry();
        linegeometry_z.vertices.push(new THREE.Vector3(500, -240, -400)); //x, y, z
        linegeometry_z.vertices.push(new THREE.Vector3(500, -240, -300));
        /* linewidth on windows will always be 1 */
        var linematerial_z = new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 200 });
        var line_z = new THREE.Line(linegeometry_z, linematerial_z);
        scene.add(line_z);

        //text
        var fontLoader_z = new THREE.FontLoader();
        fontLoader_z.load("fonts/helvetiker_regular.typeface.json", function (tex) {
            var textGeo_z = new THREE.TextGeometry('Z', {
                size: 40,
                height: 5,
                curveSegments: 6,
                font: tex,
            });
            var color = new THREE.Color();
            color.setRGB(255, 0, 0);
            var textMaterial_z = new THREE.MeshBasicMaterial({ color: color });
            var text_z = new THREE.Mesh(textGeo_z, textMaterial_z);
            text_z.position.set(400, -240, -300)
            scene.add(text_z);
        });

        var fontLoader_y = new THREE.FontLoader();
        fontLoader_y.load("fonts/helvetiker_regular.typeface.json", function (tex) {
            var textGeo_y = new THREE.TextGeometry('Y', {
                size: 40,
                height: 5,
                curveSegments: 6,
                font: tex,
            });
            var color = new THREE.Color();
            color.setRGB(255, 0, 0);
            var textMaterial_y = new THREE.MeshBasicMaterial({ color: color });
            var text_y = new THREE.Mesh(textGeo_y, textMaterial_y);
            text_y.position.set(500, -50, -400);
            scene.add(text_y);
        })

        var fontLoader_x = new THREE.FontLoader();
        fontLoader_x.load("fonts/helvetiker_regular.typeface.json", function (tex) {
            var textGeo_x = new THREE.TextGeometry('X', {
                size: 40,
                height: 5,
                curveSegments: 6,
                font: tex,
            });
            var color = new THREE.Color();
            color.setRGB(255, 0, 0);
            var textMaterial_x = new THREE.MeshBasicMaterial({ color: color });
            var text_x = new THREE.Mesh(textGeo_x, textMaterial_x);
            text_x.position.set(820, -240, -400);
            scene.add(text_x);
        })

        // cubes
        // var cubeGeo = new THREE.PlaneBufferGeometry( 50, 50, 50 );
        // cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000});

        // grid
        // var gridHelper = new THREE.GridHelper( 100, 100 );
        // scene.add( gridHelper );

        //interceptors
         var gltfloader = new GLTFLoader();
        gltfloader.load('models/interceptor/scene.gltf', (gltf) => {
            var interceptor = gltf.scene;
            interceptor.scale.set(13, 13, 13);
            interceptor.position.set(550, -240, 480);
            interceptor.rotation.y = Math.PI;
            // interceptor.rotation.x=- Math.PI / 2;
            scene.add(interceptor);
        });

         gltfloader = new GLTFLoader();
        gltfloader.load('models/interceptor/scene.gltf', (gltf) => {
            var interceptor = gltf.scene;
            interceptor.scale.set(13, 13, 13);
            interceptor.position.set(550, -240, -240);
            // interceptor.rotation.x=- Math.PI / 2;
            interceptor.rotation.y = Math.PI;
            scene.add(interceptor);
        });

         gltfloader = new GLTFLoader();
        gltfloader.load('models/interceptor/scene.gltf', (gltf) => {
            var interceptor = gltf.scene;
            interceptor.scale.set(13, 13, 13);
            interceptor.position.set(1420, -240, 480);
            // interceptor.rotation.x=- Math.PI / 2;
            interceptor.rotation.y = Math.PI;
            scene.add(interceptor);
        });

         gltfloader = new GLTFLoader();
        gltfloader.load('models/interceptor/scene.gltf', (gltf) => {
            var interceptor = gltf.scene;
            interceptor.scale.set(13, 13, 13);
            interceptor.position.set(1420, -240, -240);
            // interceptor.rotation.x=- Math.PI / 2;
            interceptor.rotation.y = Math.PI;
            scene.add(interceptor);

        });

        var explosion;
        var expo = new GLTFLoader();
        expo.load('models/blast/scene.gltf', (gltf) => {
            explosion = gltf.scene;
            explosion.visible=false;
            // interceptor.rotation.x=- Math.PI / 2;
            scene.add(explosion);
        });
        // var expo=new THREE.OBJLoader();
        // expo.load('models/explosion/explosion.obj',(obj)=>{
        // 	explosion=obj;
        // 	explosion.visible=false;
        // 	scene.add(explosion);
        // })

        var anti_ball, ball;

        //anti_ballistic
        var anti_ballistic = new GLTFLoader();
        anti_ballistic.load('models/anti_ballistic/scene.gltf', (gltf) => {
            anti_ball = gltf.scene;
            anti_ball.scale.set(70, 70, 70);
            anti_ball.rotation.y = Math.PI / 2;
            anti_ball.rotation.x = -Math.PI / 4;
            anti_ball.position.set(550, -130, 480);
            // interceptor.rotation.x=- Math.PI / 2;
            scene.add(anti_ball);
        });

        var ballistic = new GLTFLoader();
        ballistic.load('models/ballistic_missile/scene.gltf', (gltf) => {
            ball = gltf.scene;
            ball.scale.set(80, 80, 80);
            ball.position.set(550, -180, 2960);
            ball.rotation.x = -Math.PI / 4;
            ball.rotation.z = -Math.PI / 2;
            //console.log(ball);
            // interceptor.rotation.x=- Math.PI / 2;
            scene.add(ball);
        });
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        
        var controls = new MapControls(camera, renderer.domElement);

        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 50;
        controls.maxDistance = 1000;
        controls.maxPolarAngle = Math.PI / 2;

        window.addEventListener('resize', onWindowResize, false);
        // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        // document.addEventListener( 'mousedown', onDocumentMouseDown, false );

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        var firstclick = false;
        window.addEventListener('click', () => {
            if (!firstclick) {
                firstclick = true;
                animate();
            }
        });


        var antiballposx = 550;
        var antiballposy = -130;
        var antiballposz = 480;
        // ball velocity vector:
        var antiball_velocityx = 0;
        var antiball_velocityy = 100;
        var antiball_velocityz = 120;
        // gravity constant:
        const gravity = 9.8;

        var ballposx = 550;
        var ballposy = -180;
        var ballposz = 2960;
        // ball velocity vector:
        var ball_velocityx = 0;
        var ball_velocityy = 100;
        var ball_velocityz = -120;

        var viewCount = 15;
        var angleofballistic = -1.5 * Math.PI;
        var angleofantiballistic = Math.PI;

        function render() {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
            controls.update();
            camera.updateProjectionMatrix();
        }
        render();
        // var pathplotted = false;
        function animate() {
            requestAnimationFrame(animate);
            if (antiballposz <= ballposz && antiballposy != ballposy) {
                antiball_velocityy -= gravity;
                antiballposx += antiball_velocityx;
                antiballposy += antiball_velocityy;
                antiballposz += antiball_velocityz;
                anti_ball.position.x = antiballposx;
                anti_ball.position.y = antiballposy;
                anti_ball.position.z = antiballposz;
                ball_velocityy -= gravity;
                ballposx += ball_velocityx;
                ballposy += ball_velocityy;
                ballposz += ball_velocityz;
                ball.position.x = ballposx;
                ball.position.y = ballposy;
                ball.position.z = ballposz;
                angleofantiballistic -= 0.01;
                angleofballistic -= 0.01;
                anti_ball.rotation.x = angleofantiballistic;
                ball.rotation.x = angleofballistic;
                // var pointGeometry = new THREE.Geometry();
                // var pointloc = new THREE.Vector3(antiballposx,antiballposy,antiballposy);
                // pointGeometry.vertices.push(pointloc);
                // var pointMaterial = new THREE.PointsMaterial( { color: 0xffff00 } );
                // var pointmesh = new THREE.Points( pointGeometry, pointMaterial);
                // pointmesh.scale.set(100,100,100);
                // //console.log(pointmesh);
                // scene.add(pointmesh);
            } else {
                anti_ball.visible = false;
                ball.visible = false;
                explosion.position.set(550, antiballposy, antiballposz);
                // explosion.position.y = antiballposy;
                // explosion.position.z = antiballposz;
                explosion.scale.set(30, 30, 30);
                if (viewCount != 0) {
                    explosion.visible = true;
                    viewCount -= 1;
                } else {
                    explosion.visible = false;
                }
            }
        }
    }
    render() {
        return (
            <div ref={ref => (this.mount) = ref} ></div>
        );
    }
}
export default ThreeAnim;