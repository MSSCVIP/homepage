<template>
    <div id="banner" ref="banner">
        <Mheader></Mheader>
        <div class="banner-content">
            <div class="content">
                <div class="cube" ref="cube"></div>
                <!--<el-rows justify="center">-->
                <!--<el-col :span="24">-->
                <!--<h1>THIS IS A SLOGAN</h1>-->
                <!--</el-col>-->
                <!--<el-col :span="24">-->
                <!--<p>-->
                <!--<b>MAGIC SQUARE SHARE CHAIN</b>-->
                <!--</p>-->
                <!--<span>WIDELY USED IN MULTI-APPLICATION SCENARIOS</span>-->
                <!--</el-col>-->
                <!--</el-rows>-->
                <div class="cube-info">
                    <p class="cube-purpose">Fast to create & deploy e-business DAPP with EOS side-chain SAAS Easily
                        issue & swap royalty points</p>
                    <p class="cube-details">Wether you are an expert or a beginner. Cubecart.io is going to <br> become
                        the first platform which will faster all your needs in a simple,
                        <br> easy and intuotive way</p>
                    <p class="cube-email">Enter your email to get bounty and airdrop now!</p>
                    <div class="check-in">
                        <el-form :model="user" :rules="rules" ref="registerForm">
                            <el-form-item prop="email">
                                <el-input v-model="user.email"></el-input>
                                <el-button class="cc-btn" @click="submitEmail('registerForm')">SUBMIT</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <div class="whitepaper-btn">
                    <el-button @click="$store.commit('DOWNLOADWP')" class="cc-btn">DOWNLOAD WHITEPAPER</el-button>
                </div>
            </div>
        </div>
        <script type="x-shader/x-vertex" id="shaderVs">
            varying vec2 vN;
            void main() {
                vec3 e = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );
                vec3 n = normalize( normalMatrix * normal );
                vec3 r = reflect( e, n );
                float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
                vN = r.xy / m + .5;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1. );
            }

        </script>
        <script type="x-shader/x-vertex" id="shaderFs">
            uniform sampler2D tMatCap;
            varying vec2 vN;
            void main() {

                    vec3 base = texture2D( tMatCap, vN ).rgb;
                    gl_FragColor = vec4( base, 1. );
            }

        </script>
    </div>
</template>
<script>
    import Mheader from "@/components/en/Header";
    import * as THREE from 'three';
    import FBXLoader from 'three-fbx-loader';
    import * as CANNON from 'cannon';

    export default {
        name: "banner",
        components: {
            Mheader
        },
        data() {
            var checkEmail = (rule, value, callback) => {
                console.log(value)
                if (!value) {
                    this.isEmail = false;
                    return callback(new Error('Please enter your email address.'));
                } else {
                    let mailRegExp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
                    if (!mailRegExp.test(value)) {
                        return callback(new Error('Please enter a valid email address.'));
                    } else {
                        this.axios({
                            method: "get",
                            params: {
                                email: value
                            },
                            url: "/api/user/checkEmail"
                        }).then((res) => {
                            let isExisted = res.data.existed;
                            if (!isExisted) {
                                this.isEmail = true;
                            } else {
                                callback(new Error('The email address is registered.'));
                            }
                        })
                    }
                }
            };
            return {
                user: {
                    email: ""
                },
                rules: {
                    email: [
                        {validator: checkEmail, trigger: 'blur'}
                    ]
                },
                isEmail: false,
                camera: "",
                scene: "",
                renderer: "",
                light: "",
                mesh: "",
                cube: "",
                timestep: 1.0 / 60.0,
                sphere: "",
                world: "",
                body: "",
                cube2: "",
                plane: "",
                groundbody: "",
                speed: 0.001,
                bannerW:'',
                bannerH:''
            }
        },
        mounted() {
            this.initCannon();
            this.init();
            this.animate();
            this.bannerW = this.$refs.banner.clientWidth;
            this.bannerH = this.$refs.banner.clientHeight;
            setTimeout(() => {
                document.addEventListener("mousemove", (e) => {
                    // if(!this.mesh) return;
                    this.rotateCube(e);
                }, true)
            }, 500)
        },
        methods: {
            // ...mapMutations(['DOWNLOADWP']),
            ...{

                //提交邮件登记
                submitEmail(formName) {
                    this.$refs[formName].validate((valid) => {
                        console.log('test')
                        if (!valid) {
                            console.log('submit error')
                        }
                    })

                    if (this.isEmail) {
                        let data = JSON.parse(JSON.stringify(this.user));
                        let postData = this.$qs.stringify(data);
                        console.log('test', postData)
                        // this.axios({
                        //     method: 'post',
                        //     data: postData,
                        //     url: '/api/user/register'
                        // }).then((res) => {
                        //     if (res.data.state == 1) {
                        //         this.$notify.success({
                        //             message: 'success!',
                        //             duration: 2000
                        //         });
                        //         this.clearUser();
                        //     } else {
                        //         this.$notify.error({
                        //             message: 'fail！',
                        //             duration: 2000
                        //         });
                        //     }
                        // })
                        // .catch((err) => {
                        //     console.log(err);
                        // });
                    }
                },
                //下载白皮书
                // downloadWP() {
                //     let host = window.location.host;
                //     window.open(host + '/files/white-paper-v2.4.pdf');
                // },
                rotateCube(e) {
                    let that = this;
                    this.speed = 0;
                    let x = e.pageX;
                    let y = e.pageY;
                    // console.log(x + '|' + y)

                    let halfW = that.bannerW / 2;
                    let halfH = that.bannerH / 2;

                    if (x > halfW) {

                        this.speed = (x - halfW) / halfW * Math.PI * 0.005;
                    } else {
                        this.speed = -(halfW - x) / halfW * Math.PI * 0.005;
                    }
                    // setTimeout(()=>{
                    //     this.speed = 0.001
                    // },1000)
                    // if (y > halfH) {
                    //     this.cube.rotation.x = -(halfH - y) / halfH * Math.PI * 0.03;
                    // } else {
                    //     this.cube.rotation.x = (y - halfH) / halfH * Math.PI * .03;
                    // }
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
                    this.camera = new THREE.PerspectiveCamera(15, 460 / 420, 1, 10);
                    this.camera.position.set(0, 0, 4);
                    this.camera.lookAt(this.scene.position);
                },
                initRenderer() {
                    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
                    // this.renderer = new THREE.WebGLRenderer({antialias: true});
                    this.renderer.shadowMapEnable = true;
                    this.renderer.setSize(460, 420);
                    this.$refs.cube.appendChild(this.renderer.domElement);
                },
                initLight() {
                    this.scene.add(new THREE.AmbientLight(0xffffff));
                    this.light = new THREE.DirectionalLight(0xffffff, 1)
                    this.light.position.set(50, 200, 100);
                    this.light.position.multiplyScalar(1.3);
                    this.light.castShadow = true;
                    this.light.shadow.mapSize.width = 1024;
                    this.light.shadow.mapSize.height = 1024;
                    let d = 300;
                    this.light.shadow.camera.left = -d;
                    this.light.shadow.camera.right = d;
                    this.light.shadow.camera.top = d;
                    this.light.shadow.camera.bottom = -d;
                    this.light.shadow.camera.far = 1;
                    this.scene.add(this.light);
                },
                initMesh() {
                    let that = this;
                    let texture = new THREE.TextureLoader().load('texture/metal2.jpg');

                    let shaderMaterials = new THREE.ShaderMaterial({
                        uniforms: {
                            tMatCap: {
                                type: 't',
                                value: texture
                            }
                        },
                        vertexShader: document.getElementById('shaderVs').textContent,
                        fragmentShader: document.getElementById('shaderFs').textContent,
                        flatShading: THREE.SmoothShading
                    })

                    // let geometry = new THREE.SphereGeometry(1,32,32);
                    // that.cube = new THREE.Mesh(geometry,shaderMaterials);
                    // that.cube.scale.x = that.cube.scale.y = that.cube.scale.z = .3;
                    // that.cube.position.set(-.3, 0, .1);
                    // that.scene.add(that.cube);

                    let loader1 = new THREE.JSONLoader();
                    loader1.load(
                        'mesh/c.json',
                        function (geometry, materials) {
                            // console.log(materials, shaderMaterials)
                            materials.splice(3, 1, shaderMaterials);
                            that.cube = new THREE.Mesh(geometry, materials);
                            that.cube.scale.x = that.cube.scale.y = that.cube.scale.z = .55;
                            that.cube.position.set(0, 0, 0);
                            that.scene.add(that.cube);
                            // console.log(that.cube)
                        }
                    )

                    // let sphereGeo = new THREE.SphereGeometry(1,12,12);
                    // let sphereMatrl = new THREE.MeshNormalMaterial();
                    // that.sphere = new THREE.Mesh(sphereGeo,sphereMatrl);
                    // that.sphere.scale.x = that.sphere.scale.y = that.sphere.scale.z = .1;
                    // that.sphere.position.set(0,1,0);
                    // that.scene.add(that.sphere);

                    // let cubeGeo = new THREE.BoxGeometry(1, 1, 1);
                    // let cubeMatrl = new THREE.MeshNormalMaterial();
                    //
                    // that.cube2 = new THREE.Mesh(cubeGeo, cubeMatrl);
                    // that.cube2.scale.x = that.cube2.scale.y = that.cube2.scale.z = .2;
                    // that.cube2.position.set(0, 0, 1);
                    // that.scene.add(that.cube2);
                    //
                    // that.plane = new THREE.Mesh(new THREE.PlaneGeometry(5,10,10),new THREE.MeshBasicMaterial({color:0xffffff}));
                    // that.plane.scale.x = that.plane.scale.y = that.plane.scale.z = .45;
                    // that.plane.position.set(0,0,-5);
                    // that.scene.add(that.plane);

                    // that.plane.position.copy(that.groundbody.position);
                    // that.plane.quaternion.copy(that.groundbody.quaternion);

                },
                animate() {
                    requestAnimationFrame(this.animate);
                    // this.updatePhysic();
                    this.rotate();
                    this.renderer.render(this.scene, this.camera)
                },
                rotate() {
                    if (!this.cube) {
                        return;
                    }
                    this.cube.rotation.y += Math.PI * this.speed;
                },
                initCannon() {
                    // this.world = new CANNON.World();
                    // this.world.gravity.set(0, 0, -9.82);
                    // this.world.broadphase = new CANNON.NaiveBroadphase();
                    //
                    // // this.world.defaultContactMaterial.contactEquationStiffness = 1e7;
                    // // this.world.defaultContactMaterial.contactEquationRelaxation = 5;
                    //
                    // let mass = 5 ,radius = 1;
                    // let shade = new CANNON.Sphere(radius);
                    // // let shade = new CANNON.Box(new CANNON.Vec3(.5, .5, .5));
                    // this.body = new CANNON.Body({mass: mass, shade: shade});
                    // this.body.position.set(0, 0, 0);
                    // this.world.add(this.body);
                    //
                    // let groundshape = new CANNON.Plane();
                    // this.groundbody = new CANNON.Body({mass: 0, shade: groundshape});
                    // this.world.add(this.groundbody);
                    //
                    // for(let i = 0;i<60;i++){
                    //     this.world.step(this.timestep);
                    //     console.log(this.body.position.x)
                    // }

                    // let world = new CANNON.World();
                    // world.gravity.set(0,0, -9.82);
                    // world.broadphase = new CANNON.NaiveBroadphase();
                    // world.defaultContactMaterial.contactEquationStiffness = 1e7;
                    // world.defaultContactMaterial.contactEquationRelaxation = 5;
                    //
                    // //create sphere body
                    // let radius = 1;
                    // let sphereBody = new CANNON.Body({
                    //     mass: 5,
                    //     position: new CANNON.Vec3(0,0,10),
                    //     shade: new CANNON.Sphere(radius)
                    // });
                    // world.add(sphereBody);
                    //
                    // //create ground plane
                    // let planeBody = new CANNON.Body({
                    //     mass:0,
                    //     position: new CANNON.Vec3(0,0,0),
                    //     shade: new CANNON.Plane()
                    // })
                    // world.add(planeBody);
                    //
                    // let timestep = 1.0 / 60.0 ;
                    // let maxSubSteps = 3;
                    //
                    // let lasttime;
                    // (function simloop(time){
                    //     requestAnimationFrame(simloop);
                    //     if(lasttime !== undefined){
                    //         let dt = (time - lasttime) / 1000;
                    //         world.step(timestep, dt , maxSubSteps);
                    //     }
                    //     console.log("Sphere z position" + sphereBody.position.z);
                    //     lasttime = time;
                    // })()

                    // let demo = new CANNON.demo();
                    // let size = 1;
                    //
                    // demo.addScene("sleep",function () {
                    //     let world = demo.getWorld();
                    //     world.gravity.set(0,0,-9.82);
                    //     world.broadphase = new CANNON.NaiveBroadphase();
                    //
                    //     world.defaultContactMaterial.contactEquationStiffness = 1e7;
                    //     world.defaultContactMaterial.contactEquationRelaxation = 5;
                    //
                    //     //create ground plane
                    //     let groundBody = new CANNON.Body({
                    //         mass:0,
                    //         shade: new CANNON.Plane()
                    //     })
                    //
                    //     //create sphere
                    //     let sphereBody = new CANNON.Body({
                    //         mass:1,
                    //         shade: new CANNON.Sphere(size),
                    //         position: new CANNON.Vec3(0,0,size*6)
                    //     })
                    //     let pos = new CANNON.Vec3(0,0,size);
                    //
                    //     //allow sleeping
                    //     world.allowSleeping = true;
                    //     sphereBody.allowSleep = true;
                    //
                    //     //sleep paramters
                    //     sphereBody.sleepSpeedLimit = .1;
                    //     sphereBody.sleepTimeLimit = 1;
                    //
                    //     sphereBody.addEventListener("sleepy",function(event){
                    //         console.log("The sphere is feeling sleepy...");
                    //     });
                    //
                    //     sphereBody.addEventListener("sleep",function(event){
                    //         console.log("The sphere fell asleep!");
                    //     });
                    //
                    //     world.addBody(groundBody);
                    //     world.addBody(sphereBody);
                    //
                    //     demo.addVisual(groundBody);
                    //     demo.addVisual(sphereBody);
                    // });
                    // demo.start();


                },
                updatePhysic() {
                    // this.world.step(this.timestep);
                    //
                    // // console.log(this.body)
                    // // this.cube2.position.copy(this.body.position);
                    // // this.cube2.quaternion.copy(this.body.quaternion);
                    // console.log(this.body.position.x)

                }
            }
        }
    }
</script>
