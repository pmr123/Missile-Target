import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import classes from './ThreeAnim.module.css';



class ThreeAnim extends Component {

    
    render() {
        return (
            <div ref={ref => (this.mount) = ref} className={classes.canvaa} />
        );
    }
}

export default ThreeAnim;