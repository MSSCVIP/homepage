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
                        <img src="../assets/images/bancor.png" alt="">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="register ms-area">
                        <h4 class="ms-blue">登记 MSSC</h4>
                        <div class="register-box">
                            <input type="text" class="user-name" placeholder="请输入用户名">
                            <input type="text" class="user-phone" placeholder="请输入电话">
                            <input type="text" class="user-mail" placeholder="请输入邮箱">
                            <input type="text" class="user-eos-account" placeholder="请输入EOS账号">
                        </div>
                        <div class="ms-btn ms-bg-yellow with-arrow register-btn">登记 MSSC</div>
                    </div>
                </el-col>
            </el-rows>
        </div>
    </div>
</template>
<script>
    export default {
        name:"whitePaper",
        components:{

        }
    }
</script>
<style lang="less">
    #white-paper{
        height: 639px;
        background: url("../assets/images/solve_bg.jpg")0 0 no-repeat;
        .ms-area{
            position: relative;
            width: 346px;
            height: 206px;
            background: #fff;
            border-radius:20px;
            padding: 32px;
            text-align: left;
            h4{
                font-size: 24px;
                font-weight: 500;
                margin-top: 0;
                margin-bottom: 20px;
            }
            .ms-btn{
                position: absolute;
                bottom:-28px;
                left:32px;
            }
            p{
                line-height: 26px;
            }
        }
        .register{
            margin-left: 16px;
            h4{
                margin-bottom: 40px;
            }
            input{
                float: left;
                width: 133px;
                margin-bottom: 20px;
                margin-right: 20px;
                border-radius: 16px;
                height: 22px;
                line-height: 22px;
                background:#f1f2f3;
                border:0;
                padding:5px 15px;
                outline: 0;
            }
            input:nth-child(2),
            input:nth-child(4){
                margin-right: 0;
            }
        }
        .bancor-protocol{
            img{
                margin:0 auto;
            }
        }
    }
</style>