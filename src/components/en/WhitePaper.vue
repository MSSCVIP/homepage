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
                            魔方链是革新性的区块链电子商务生态平台，旨在让缺乏技术人才的中小企业用户通过魔方链核心的去中心化电子商务 BAAS（区块链即服务Blockchain as a Service）平台，轻松快速实现去中心化电子商务应用构建、 部署及维护
                        </p>
                        <div class="ms-btn ms-bg-yellow with-arrow white-paper-btn">白皮书</div>
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
                                <!--<el-form :rules="rules" :model="rulesData" ref="registerForm">-->
                                    <!--<el-rows>-->
                                        <!--<el-col :span="12">-->
                                            <!--<el-form-item prop="name">-->
                                                <!--<el-input class="user-name" name="name" v-model="rulesData.userName" placeholder="请输入用户名"></el-input>-->
                                            <!--</el-form-item>-->
                                        <!--</el-col>-->
                                        <!--<el-col :span="12">-->
                                            <!--<el-form-item prop="phone">-->
                                                <!--<el-input class="user-phone" name="phone" v-model="rulesData.phoneNum" placeholder="请输入电话"></el-input>-->
                                            <!--</el-form-item>-->
                                        <!--</el-col>-->
                                        <!--<el-col :span="12">-->
                                            <!--<el-form-item prop="mail">-->
                                                <!--<el-input class="user-mail" name="mail" v-model="rulesData.email" placeholder="请输入邮箱"></el-input>-->
                                            <!--</el-form-item>-->
                                        <!--</el-col>-->
                                        <!--<el-col :span="12">-->
                                            <!--<el-form-item prop="eosAccount">-->
                                                <!--<el-input class="user-eos-account" name="eosAccount" v-model="rulesData.eosAccount" placeholder="请输入EOS账号"></el-input>-->
                                            <!--</el-form-item>-->
                                        <!--</el-col>-->
                                    <!--</el-rows>-->
                                <!--</el-form>-->
                                <input type="text" class="user-eos-account" name="eosAccount" v-model="user.eosadr" @blur="validateEosadr(user.eosadr)" placeholder="请输入EOS账号">
                                <div class="investment">
                                    <el-radio v-model="user.type" label="1">天使轮</el-radio>
                                    <el-radio v-model="user.type" label="2">基石轮</el-radio>
                                </div>
                                <input type="text" class="user-phone" name="phone" v-model="user.phoneNum" @blur="validatePhone(user.phoneNum)" placeholder="请输入电话">
                                <input type="text" class="user-mail" name="mail" v-model="user.email" @blur="validateEmail(user.email)" placeholder="请输入邮箱">
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
        name:"whitePaper",
        data(){
            return{
                isPhone:false,
                isEmail:false,
                isEosAdr:false,
                user:{
                    eosadr:"",
                    type:"1",
                    phoneNum:"",
                    email:"",
                },
                rules:{
                    // name:[
                    //     {type:"string",required:true, message:"请输入用户名",trigger:"blur"}
                    // ],
                    // mail:[
                    //     {required:true,message:"请输入邮箱",trigger:"blur"},
                    //     {type: "email",message:"请输入正确的邮箱",trigger:"blur"}
                    // ],
                    // eosAccount:[
                    //     {type: "",required:true,message:"请输入eos账号",trigger:"blur"}
                    // ],
                    // phone:[
                    //     {validator:checkPhone,trigger:"blur"}
                    // ]
                }
            }
        },
        methods:{
            register(){
                let datas = null;
                if(this.isPhone && this.isEmail && this.isEosAdr){
                    datas = JSON.stringify(this.user);
                    this.axios.post("/api/user/register",this.user).then((res)=>{
                        if(res.status == 99999)
                        console.log(res)
                    })
                }
                console.log(this.isPhone && this.isEmail && this.isEosAdr,datas)
                //console.log(this.obj)
            },
            validatePhone(val){
                if(!val){
                    console.log("手机号码不能为空")
                    return
                }

                let phoneRegExp = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
                if(phoneRegExp.test(val)){
                    this.isPhone = true;
                }else {
                    console.log(val,"请输入正确的手机号码")
                    return
                }
            },
            validateEmail(val){
                if(!val){
                    console.log("邮箱不能为空")
                    return
                }

                let mailRegExp = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
                if(!mailRegExp.test(val)){
                    console.log("请输入正确的邮箱地址")
                    return
                }else {
                    this.isEmail = true;
                }
            },
            validateEosadr(val){
                if(!val){
                    console.log("eos地址不能为空")
                    return
                }else {
                    this.isEosAdr = true;
                }
            }
        }
    }
</script>