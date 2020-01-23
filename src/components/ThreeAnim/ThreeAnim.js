import React, { Component } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class ThreeAnim extends Component {

   constructor(props){
       super(props);
    //    this.props = props.hehe;
   }
    componentDidMount(){
            
			var time=0;
			var missiles_anti=[];
			var missiles_ballistic=[];
						
			const gravity = 9.8;
			console.log(this.props.hehe);
            
			var findin_data=this.props.hehe.dd;
			var antiballistic_data=this.props.hehe.ival; 
            var ballistic_data=this.props.hehe.mval;
			var fetch_theta,fetch_phi;
			var modified_antiballistic={};
			var tempobj={};
			
            var i,j;
			// alert(antiballistic_data);
			var antiballength =  Object.keys(antiballistic_data).length;
			var findinlength =  Object.keys(findin_data).length;

			
			for (i = 0; i < antiballength; i++) {
				for (j = 0; j < findinlength; j++) {
					
					if (Number(findin_data[j].interceptor)==i ) {													
							fetch_theta=findin_data[j].theta;
							fetch_phi=findin_data[j].phi;
							modified_antiballistic[findin_data[j].interceptor] = {theta : fetch_theta,phi: fetch_phi,x: antiballistic_data[i].x, y:antiballistic_data[i].y,z:antiballistic_data[i].z,V:antiballistic_data[i].V};
						}
				}
			}
			var camera, scene, renderer;
			scene = new THREE.Scene();
					scene.background = new THREE.Color( 0xcce0ff );
					//scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
					// camera
					camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
					camera.position.set( -325, 200, -400 );
					// lights
					scene.add( new THREE.AmbientLight( 0x666666 ) );
					var light = new THREE.DirectionalLight( 0xdfebff, 1 );
					light.position.set( 50, 200, 100 );
					light.position.multiplyScalar( 1.3 );
					light.castShadow = true;
					light.shadow.mapSize.width = 1024;
					light.shadow.mapSize.height = 1024;
					var d = 300;
					light.shadow.camera.left = - d;
					light.shadow.camera.right = d;
					light.shadow.camera.top = d;
					light.shadow.camera.bottom = - d;
					light.shadow.camera.far = 1000;
					scene.add( light );

					var loader = new THREE.TextureLoader();

					var groundTexture = loader.load( 'images/grass.jpg' );
					groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
					groundTexture.repeat.set( 25, 25 );
					groundTexture.anisotropy = 16;
					groundTexture.encoding = THREE.sRGBEncoding;
					var groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );
					var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 10000, 10000 ), groundMaterial );
					mesh.position.y = -20;
					mesh.rotation.x = - Math.PI / 2;
					mesh.receiveShadow = true;
					scene.add( mesh );
					// objects.push( mesh );

					//roll-over
					// var rollOverGeo = new THREE.BoxBufferGeometry( 50, 50, 50 );
					// rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
					// rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
					// scene.add( rollOverMesh );

					//100 x 100
					var gridgeo = new THREE.PlaneGeometry(1000,1000);
					var gridmaterial = new THREE.MeshBasicMaterial( {color: 0x964B00, side: THREE.DoubleSide} );
					var gridplane = new THREE.Mesh( gridgeo, gridmaterial );
					gridplane.position.set(500,0,500);
					gridplane.rotation.x=- Math.PI / 2;
					scene.add( gridplane );

					//axis lines
					var linegeometry_x = new THREE.Geometry();
					linegeometry_x.vertices.push(new THREE.Vector3(0, 0, 0)); //500,-240,-400
					linegeometry_x.vertices.push(new THREE.Vector3(200, 0, 0));
					/* linewidth on windows will always be 1 */
					var linematerial_x = new THREE.LineBasicMaterial( { color: 0xffff00, linewidth: 200 } );
					var line_x = new THREE.Line(linegeometry_x, linematerial_x);
					scene.add(line_x);

					var linegeometry_y = new THREE.Geometry();
					linegeometry_y.vertices.push(new THREE.Vector3(0, 0, 0)); //x, y, z
					linegeometry_y.vertices.push(new THREE.Vector3(0, 200, 0));
					/* linewidth on windows will always be 1 */
					var linematerial_y = new THREE.LineBasicMaterial( { color: 0xffff00, linewidth: 200 } );
					var line_y = new THREE.Line(linegeometry_y, linematerial_y);
					scene.add(line_y);

					var linegeometry_z = new THREE.Geometry();
					linegeometry_z.vertices.push(new THREE.Vector3(0, 0, 0)); //x, y, z
					linegeometry_z.vertices.push(new THREE.Vector3(0, 0, 200));
					/* linewidth on windows will always be 1 */
					var linematerial_z = new THREE.LineBasicMaterial( { color: 0xffff00, linewidth: 200 } );
					var line_z = new THREE.Line(linegeometry_z, linematerial_z);
					scene.add(line_z);

					//text
					var fontLoader_z = new THREE.FontLoader();
					fontLoader_z.load("fonts/helvetiker_regular.typeface.json",function(tex){ 
					    var  textGeo_z = new THREE.TextGeometry('Z', {
					            size: 40,
					            height: 5,
					            curveSegments: 6,
					            font: tex,
					    });
					    var  color = new THREE.Color();
					    color.setRGB(255, 0, 0);
					    var  textMaterial_z = new THREE.MeshBasicMaterial({ color: color });
					    var  text_z = new THREE.Mesh(textGeo_z , textMaterial_z);
					    text_z.position.set(0,0,200);
					    text_z.rotation.y=Math.PI;
					    scene.add(text_z);
					});

					var fontLoader_y = new THREE.FontLoader();
					fontLoader_y.load("fonts/helvetiker_regular.typeface.json",function(tex){ 
					    var  textGeo_y = new THREE.TextGeometry('Y', {
					            size: 40,
					            height: 5,
					            curveSegments: 6,
					            font: tex,
					    });
					    var  color = new THREE.Color();
					    color.setRGB(255, 0, 0);
					    var  textMaterial_y = new THREE.MeshBasicMaterial({ color: color });
					    var  text_y = new THREE.Mesh(textGeo_y , textMaterial_y);
					    text_y.position.set(0,200,0);
					    scene.add(text_y);
					})

					var fontLoader_x = new THREE.FontLoader();
					fontLoader_x.load("fonts/helvetiker_regular.typeface.json",function(tex){ 
					    var  textGeo_x = new THREE.TextGeometry('X', {
					            size: 40,
					            height: 5,
					            curveSegments: 6,
					            font: tex,
					    });
					    var  color = new THREE.Color();
					    color.setRGB(255, 0, 0);
					    var  textMaterial_x = new THREE.MeshBasicMaterial({ color: color });
					    var  text_x = new THREE.Mesh(textGeo_x , textMaterial_x);
					    text_x.position.set(200, 0, 0);
					    scene.add(text_x);
					})

					var index=0;
					var gltfloader = new GLTFLoader();
					var anti_ballistic=new GLTFLoader();
					var anti_ball,interceptor;

					function place_interceptors(antiballistic_data) {
						console.log(antiballistic_data);
						
						if(index>antiballistic_data.length-1) return 

						
						var single_antiballistic=antiballistic_data[index];
							//interceptors
							
							gltfloader.load('models/interceptor/scene.gltf',(gltf)=>{
								interceptor=gltf.scene;
								interceptor.scale.set(13,13,13);
								interceptor.position.set(Number(single_antiballistic.x)*10,Number(single_antiballistic.y)*10,Number(single_antiballistic.z)*10 );
								interceptor.rotation.y=Math.PI;
								scene.add(interceptor);
							});

							//anti_ballistic
							
							
							anti_ballistic.load('models/anti_ballistic/scene.gltf',(gltf)=>{
							anti_ball=gltf.scene;
							anti_ball.scale.set(70,70,70);
							anti_ball.rotation.z=Math.PI;
							anti_ball.rotation.x=Math.PI;
							anti_ball.position.set(Number(single_antiballistic.x )*10,Number(single_antiballistic.y)*10+80,Number(single_antiballistic.z)*10);
							anti_ball.rotation.y=Math.PI/2;
							// interceptor.rotation.x=- Math.PI / 2;
							scene.add(anti_ball);
							
							missiles_anti.push(anti_ball);
								
							index++;
							place_interceptors(antiballistic_data);
						});
					}

					var expo=new GLTFLoader();
					expo.load('models/blast/scene.gltf',(gltf)=>{
						expo=gltf.scene;
						//expo.scale.set(0,0,0);
						// interceptor.rotation.x=- Math.PI / 2;
						expo.visible=false;
						scene.add(expo);
					});

					var ball,index_ballistic=0;

					//anti_ballistic
					// var anti_ballistic=new GLTFLoader();
					// anti_ballistic.load('models/anti_ballistic/scene.gltf',(gltf)=>{
					// 	anti_ball=gltf.scene;
					// 	anti_ball.scale.set(70,70,70);
					// 	anti_ball.rotation.z=phi_antiballistic;
					// 	anti_ball.rotation.x=Math.PI-thita_antiballistic;
					// 	anti_ball.position.set(550,-130,480);
					// 	// interceptor.rotation.x=- Math.PI / 2;
					// 	scene.add(anti_ball);
					// });
					var ballistic=new GLTFLoader();
					function place_ballistic(ballistic_data) {
						if (index_ballistic>ballistic_data.length-1) return
						
						var single_ballistic=ballistic_data[index_ballistic];
						ballistic.load('models/ballistic_missile/scene.gltf',(gltf)=>{
						ball=gltf.scene;
						ball.scale.set(100,100,100);
						ball.position.set(Number(single_ballistic.x)*10,Number(single_ballistic.y)*10,Number(single_ballistic.z)*10);
						ball.rotation.x=Number(single_ballistic.t);
						ball.rotation.z=Number(single_ballistic.p);
						// interceptor.rotation.x=- Math.PI / 2;
						scene.add(ball);
						index_ballistic++;
						missiles_ballistic.push(ball);
						place_ballistic(ballistic_data);
					});	
					}

					place_interceptors(antiballistic_data);
					place_ballistic(ballistic_data);

					renderer = new THREE.WebGLRenderer( { antialias: true } );
					renderer.setPixelRatio( window.devicePixelRatio );
					renderer.setSize( window.innerWidth, window.innerHeight );
					document.body.appendChild(renderer.domElement);

					// var controls = new THREE.OrbitControls( camera, renderer.domElement );
					// controls.maxPolarAngle = Math.PI * 0.5;
					// controls.minDistance = 1000;
					// controls.maxDistance = 50000;

					var controls = new MapControls( camera, renderer.domElement );
					
					controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
					controls.dampingFactor = 0.05;
					controls.screenSpacePanning = false;
					controls.minDistance = 50;
					controls.maxDistance = 2500;
					controls.maxPolarAngle = Math.PI / 2;

					window.addEventListener( 'resize', onWindowResize, false );
					function onWindowResize() {
					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();
					renderer.setSize( window.innerWidth, window.innerHeight );
					}

					var firstclick=false;
					window.addEventListener('click',()=>{

						if(!firstclick){
							firstclick=true;
							
							animate_ballistic();
							animate_antiballistic();
						}
					});
					

        			
				

					function render() {
					requestAnimationFrame(render);
					renderer.render( scene, camera );
					controls.update();
					camera.updateProjectionMatrix();						
					}

					render();

					
					function animate_ballistic() {
						requestAnimationFrame(animate_ballistic);
						var missiles_obj=missiles_ballistic[0];
						var single_ballistic=ballistic_data[0];
						
						
						if(missiles_obj.position.y>=0){
						time=time+0.01;
						missiles_obj.position.y+=Number(single_ballistic.V)*Math.sin(single_ballistic.t*Math.PI/180)*time-((gravity*time*time)/2);
						missiles_obj.position.x+=Number(single_ballistic.V)*Math.cos(single_ballistic.t*Math.PI/180)*Math.cos(single_ballistic.p*Math.PI/180)*time;
						missiles_obj.position.z+=Number(single_ballistic.V)*Math.cos(single_ballistic.t*Math.PI/180)*Math.sin(single_ballistic.p*Math.PI/180)*time;
						missiles_obj.rotation.z-=0.005;
						
						}

					}

					// alphatime=0.1;
					var antitime=0;
					function animate_antiballistic() {
						requestAnimationFrame(animate_antiballistic);
						var antimissiles_obj=missiles_anti[0];
						var single_antiballistic=modified_antiballistic[0];
						// console.log(antimissiles_obj, missiles_anti, single_antiballistic, modified_antiballistic);

						if(antimissiles_obj.position.y<=700){

						antitime=antitime+0.06;
						antimissiles_obj.position.y+=Number(single_antiballistic.V)*Math.sin(single_antiballistic.theta*Math.PI/180)*antitime-((gravity*antitime*antitime)/2);
						antimissiles_obj.position.x+=Number(single_antiballistic.V)*Math.cos(single_antiballistic.theta*Math.PI/180)*Math.cos(single_antiballistic.phi*Math.PI/180)*antitime;
						antimissiles_obj.position.z+=Number(single_antiballistic.V)*Math.cos(single_antiballistic.theta*Math.PI/180)*Math.sin(single_antiballistic.phi*Math.PI/180)*antitime;
						antimissiles_obj.rotation.z-=0.005;
						// console.log(antimissiles_obj.position.y, Number(single_antiballistic.V)*Math.sin(single_antiballistic.theta)*antitime-((gravity*antitime*antitime)/2));
						// console.log(Number(single_antiballistic.V), Math.sin(single_antiballistic.theta*Math.PI/180), single_antiballistic.theta,((gravity*antitime*antitime)/2));
						//  console.log(antimissiles_obj);
						
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