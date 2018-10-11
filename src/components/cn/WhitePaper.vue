<template>
    <div id="white-paper">
        <div class="content">
            <div class="title">
                <span class="ms-blue">解决</span><span>问题</span>
            </div>
            <el-rows>
                <el-col :span="8">
                    <div class="white-paper-intro ms-area">
                        <h4 class="ms-blue">魔方链 MSSC</h4>
                        <p>
                            魔方链是革新性的区块链电子商务生态平台，旨在让缺乏技术人才的中小企业用户通过魔方链核心的去中心化电子商务 BAAS（区块链即服务Blockchain as a
                            Service）平台，轻松快速实现去中心化电子商务应用构建、 部署及维护
                        </p>
                        <div class="ms-btn ms-bg-yellow with-arrow white-paper-btn" @click="downloadWP">白皮书</div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="bancor-protocol">
                        <img src="../../assets/images/bancor.png" alt="">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="register ms-area">
                        <h4 class="ms-blue">登记 MSSC</h4>
                        <div class="register-box">
                            <el-form :rules="rules" :model="user" ref="registerForm">
                                <el-rows>
                                    <el-col :span="12">
                                        <el-form-item prop="eosadr">
                                            <el-input class="user-eos-account" name="eosadr" v-model="user.eosadr" placeholder="请输入EOS账号"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item prop="investment">
                                            <el-radio v-model="user.type" label="1">天使轮</el-radio>
                                            <el-radio v-model="user.type" label="2">基石轮</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item prop="phoneNum">
                                            <el-input class="user-phone" name="phone" v-model="user.phoneNum" placeholder="请输入电话"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item prop="email">
                                            <el-input class="user-mail" name="mail" v-model="user.email" placeholder="请输入邮箱"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-rows>
                            </el-form>
                            <!--<input type="text" class="user-eos-account" name="eosAccount" v-model="user.eosadr" @blur="validateEosadr(user.eosadr)" placeholder="请输入EOS账号">-->
                            <!--<div class="investment">-->
                            <!--<el-radio v-model="user.type" label="1">天使轮</el-radio>-->
                            <!--<el-radio v-model="user.type" label="2">基石轮</el-radio>-->
                            <!--</div>-->
                            <!--<input type="text" class="user-phone" name="phone" v-model="user.phoneNum" @blur="validatePhone(user.phoneNum)" placeholder="请输入电话">-->
                            <!--<input type="text" class="user-mail" name="mail" v-model="user.email" @blur="validateEmail(user.email)" placeholder="请输入邮箱">-->
                        </div>
                        <div class="ms-btn ms-bg-yellow with-arrow register-btn" @click="register">登记 MSSC</div>
                    </div>
                </el-col>
            </el-rows>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'whitePaper',
        data() {
            var checkPhone = (rule, value, callback) => {
                if (!value) {
                    this.isPhone = false;
                    return callback(new Error('手机号码不能为空'));
                }else {
                    let phoneRegExp = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
                    if (!phoneRegExp.test(value)) {
                        callback(new Error('请输入正确的手机号码'));
                    } else {
                        this.axios({
                            method:"get",
                            params:{
                                phoneNum: value
                            },
                            url:"/api/user/checkPhone"
                        }).then((res)=>{
                            let isExisted = res.data.existed;
                            if(!isExisted){
                                this.isPhone = true;
                            }else {
                                callback(new Error('该手机号码已存在'));
                            }
                        })
                    }
                }

            };
            var checkEmail = (rule, value, callback) => {
                if (!value) {
                    this.isEmail = false;
                    return callback(new Error('邮箱地址不能为空'));
                } else {
                    let mailRegExp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
                    if (!mailRegExp.test(value)) {
                        return callback(new Error('请输入正确的邮箱地址'));
                    } else {
                        this.axios({
                            method:"get",
                            params:{
                                email: value
                            },
                            url:"/api/user/checkEmail"
                        }).then((res)=>{
                            let isExisted = res.data.existed;
                            if(!isExisted){
                                this.isEmail = true;
                            }else {
                                callback(new Error('该邮箱地址已存在'));
                            }
                        })
                    }
                }
            };
            var checkEosadr = (rule, value, callback) => {

                if (!value) {
                    this.isEosAdr = false;
                    return callback(new Error('eos地址不能为空'));
                } else {
                    this.axios({
                        method:"get",
                        params:{
                            eosadr: value
                        },
                        url:"/api/user/checkEosadr"
                    }).then((res)=>{
                        let isExisted = res.data.existed;
                        if(!isExisted){
                            this.isEosAdr = true;
                        }else {
                            callback(new Error('该eos地址已存在'));
                        }
                    })
                }
            };
            return {
                isPhone: false,
                isEmail: false,
                isEosAdr: false,
                user: {
                    eosadr: '',
                    type: '1',
                    phoneNum: '',
                    email: '',
                },
                rules: {
                    eosadr: [
                        {
                            validator: checkEosadr,
                            trigger: 'blur'
                        }
                    ],
                    email: [
                        {
                            validator: checkEmail,
                            trigger: 'blur'
                        }
                    ],
                    phoneNum: [
                        {
                            validator: checkPhone,
                            trigger: 'blur'
                        }
                    ]
                }
            };
        },
        methods: {
            clearUser(){
                this.user.email ="";
                this.user.eosadr ="";
                this.user.phoneNum ="";
                this.user.type ="1";
            },
            register() {
                let datas = null;
                if (this.isPhone && this.isEmail && this.isEosAdr) {
                    datas = JSON.parse(JSON.stringify(this.user));
                    let postData = this.$qs.stringify(datas);
                    this.axios({
                        method: 'post',
                        data: postData,
                        url: '/api/user/register'
                    })
                        .then((res) => {
                            console.log('新增成功！', res);
                            if (res.data.state == 1) {
                                this.$notify.success({
                                    message: '新增成功!',
                                    duration: 2000
                                });
                                this.clearUser();
                            } else {
                                this.$notify.error({
                                    message: '新增失败！',
                                    duration: 2000
                                });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            },
            downloadWP(){
                let host = window.location.host;
                window.open(host + '/files/white-paper-v2.4.pdf');
            }
        }
    };
</script>
