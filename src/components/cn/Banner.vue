<template>
    <div id="banner" ref="banner">
        <Mheader></Mheader>
        <div class="banner-content">
            <div class="content">
                <div class="cube" ref="cube"></div>
                <el-rows justify="center">
                    <el-col :span="24">
                        <h1>这是一句中文标语</h1>
                    </el-col>
                    <el-col :span="24">
                        <p>
                            <b>MAGIC SQUARE SHARE CHAIN</b>
                        </p>
                        <span>WIDELY USED IN MULTI-APPLICATION SCENARIOS</span>
                    </el-col>
                </el-rows>
            </div>
        </div>
    </div>
</template>
<script>
    import Mheader from "@/components/cn/Header";
    import * as THREE from 'three';
    import $ from 'jquery';
    import FBXLoader from 'three-fbx-loader';

    export default {
        name: "banner",
        components: {
            Mheader
        },
        data() {
            return {
                camera: "",
                scene: "",
                renderer: "",
                light: "",
                mesh: "",
                cube:""
            }
        },
        mounted() {
            this.init();
            this.animate();
            $(document).mousemove((e)=>{
                this.rotateCube(e);
            })
        },
        methods: {
            rotateCube(e){
                // if(!this.mesh){
                //     return;
                // }
                let x = e.pageX;
                let y = e.pageY;
                // console.log(x + '|' + y)
                let w = this.$refs.banner.clientWidth;
                let h = this.$refs.banner.clientHeight;

                let halfW = w / 2;
                let halfH = h / 2;

                if (x > halfW) {
                    this.cube.rotation.y = (x - halfW) / halfW * Math.PI * 0.5;
                } else {
                    this.cube.rotation.y = -(halfW - x) / halfW * Math.PI * 0.5;
                }
                if (y > halfH) {
                    this.cube.rotation.x = -(halfH - y) / halfH * Math.PI * 0.03;
                } else {
                    this.cube.rotation.x = (y - halfH) / halfH * Math.PI * .03;
                }
            },
            init() {
                this.scene = new THREE.Scene();

                this.initCamera();
                this.initMesh();
                this.initLight();
                this.initRenderer();

                this.scene.add(this.camera);
            },
            initCamera() {
                // this.camera = new THREE.OrthographicCamera(-2, 2, 1.5, 1.5, 1, 10);
                // this.camera.position.set(0, 0, 5);
                // this.camera.lookAt(new THREE.Vector3(0,0,0));
                this.camera = new THREE.PerspectiveCamera(15, 1200 / 800, .5, 10);
                this.camera.position.set(0, 3, 4);
                this.camera.lookAt(this.scene.position);
            },
            initRenderer() {
                this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
                // this.renderer = new THREE.WebGLRenderer({antialias: true});
                this.renderer.shadowMapEnable = true;
                this.renderer.setSize(1200, 800);
                this.$refs.cube.appendChild(this.renderer.domElement);
            },
            initLight(){

                this.scene.add( new THREE.AmbientLight( 0x555555 ) );
                this.light = new THREE.DirectionalLight(0xdfebff,1)
                this.light.position.set( 50, 200, 100 );
                this.light.position.multiplyScalar( 1.3 );
                this.light.castShadow = true;
                this.light.shadow.mapSize.width = 1024;
                this.light.shadow.mapSize.height = 1024;
                let d = 300;
                this.light.shadow.camera.left = - d;
                this.light.shadow.camera.right = d;
                this.light.shadow.camera.top = d;
                this.light.shadow.camera.bottom = - d;
                this.light.shadow.camera.far = 1;
                this.scene.add( this.light );


            },
            initMesh() {
                // let material = new THREE.MeshNormalMaterial();
                // let geometry = new THREE.CubeGeometry(.7, .7, .7);
                // // let material = new THREE.MeshBasicMaterial();
                // this.mesh = new THREE.Mesh(geometry, material);
                const that = this;

                let loader = new THREE.JSONLoader();
                loader.load(
                    'mesh/shell.json',
                    function (geometry,materials) {
                        that.cube = new THREE.Mesh(geometry, materials);
                        that.cube.scale.x = that.cube.scale.y = that.cube.scale.z = .3;
                        that.cube.position.set(-.3,0,.1);
                        that.scene.add(that.cube);
                    }
                )
                // let loader = new FBXLoader();
                // loader.load(
                //     'mesh/cube.fbx',
                //     (obj)=>{
                //         this.scene.add(obj)
                //     }
                // )
            },
            animate() {
                requestAnimationFrame(this.animate);
                // this.cube.rotation.x += 0.01;
                // this.cube.rotation.y += 0.02;
                // this.mesh.rotation.z += 0.01;
                this.renderer.render(this.scene, this.camera)
            }
        }
    }
</script>
