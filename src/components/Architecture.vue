<template>
    <div id="architecture">
        <div class="content">
            <el-tabs v-model="activeName" stretch="true" class="architecture-tabs">
                <el-tab-pane label="生态模型" name="first">
                    <div class="model-panel">
                        <img src="../assets/images/model.png" class="model-img" alt="">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="功能模块" name="second">
                    <div class="service-panel">
                        <el-rows>
                            <el-col :span="8" class="item">
                                <div class="service-rocket service-img"></div>
                                <p class="service-title"><b>极速搭建商城服务</b></p>
                                <p class="service-intro">
                                    多终端应用界面<br>
                                    购物车系统<br>
                                    商品管理系统<br>
                                    订单系统<br>
                                    会员管理系统<br>
                                    支付交易系统<br>
                                </p>
                            </el-col>
                            <el-col :span="8" class="item">
                                <div class="service-layer service-img"></div>
                                <p class="service-title"><b>极速搭建商城服务</b></p>
                                <p class="service-intro">
                                    多终端应用界面<br>
                                    购物车系统<br>
                                    商品管理系统<br>
                                    订单系统<br>
                                    会员管理系统<br>
                                    支付交易系统<br>
                                </p>
                            </el-col>
                            <el-col :span="8" class="item">
                                <div class="service-plugin service-img"></div>
                                <p class="service-title"><b>极速搭建商城服务</b></p>
                                <p class="service-intro">
                                    多终端应用界面<br>
                                    购物车系统<br>
                                    商品管理系统<br>
                                    订单系统<br>
                                    会员管理系统<br>
                                    支付交易系统<br>
                                </p>
                            </el-col>
                        </el-rows>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="优势" name="third">
                    <div class="quality-panel">
                        <el-rows>
                            <el-col :span="8" class="item">
                                <div class="quality1 quality-img"></div>
                                <p class="service-title"><b>跨品牌积分营销</b></p>
                                <p class="service-intro">
                                    魔方链上的商户可以通过去中心化交易系统用自己的积分和其他商户交换或购买。
                                </p>
                            </el-col>
                            <el-col :span="8" class="item">
                                <div class="quality2 quality-img"></div>
                                <p class="service-title"><b>产品 TOKEN 预售众筹</b></p>
                                <p class="service-intro">
                                    商户可以通过魔方链发布自身产品的通证进行预售和众筹。
                                </p>
                            </el-col>
                            <el-col :span="8" class="item">
                                <div class="quality3 quality-img"></div>
                                <p class="service-title"><b>防伪溯源</b></p>
                                <p class="service-intro">
                                    魔方链的身份认证机制以及共识机制为商户提供了产品的追根溯源能力。
                                </p>
                            </el-col>
                            <el-col :span="8" class="item">
                                <div class="quality4 quality-img"></div>
                                <p class="service-title"><b>高效零手续费跨境支付</b></p>
                                <p class="service-intro">
                                    魔方链钱包系统可以为商户提供跨境点对点的零手续费交易。
                                </p>
                            </el-col>
                            <el-col :span="8" class="item">
                                <div class="quality5 quality-img"></div>
                                <p class="service-title"><b>消费者信用认证共享</b></p>
                                <p class="service-intro">
                                    魔方链上的分布式账本记录着每一笔交易的信用，所有用户都可以看到信用评度。
                                </p>
                            </el-col>
                            <el-col :span="8" class="item">
                                <div class="quality6 quality-img"></div>
                                <p class="service-title"><b>高效互操性</b></p>
                                <p class="service-intro">
                                    魔方链提供了更高效的信息共享及协同工作能力。
                                </p>
                            </el-col>
                        </el-rows>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="BANCOR" name="fourth">
                    <div class="bancor-panel">
                        <img src="../assets/images/architecture-bancor.jpg"  class="architecture-bancor" alt="">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="系统架构" name="fifth">
                    <div class="architecture-panel">
                        <img src="../assets/images/architecture-system.gif" class="architecture-system" alt="">
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>

    export default {
        name: "banner",
        data(){
            return{
                activeName:"first"
            }
        },
        components: {
        }
    }
</script>
<style lang="less">
    #architecture{
        height: 800px;
        background:url("../assets/images/architecture_bg.jpg") 0 0 no-repeat;
        .content{
            .architecture-tabs{
                margin-top: -120px;
                padding-top: 120px;
                .el-tabs__nav{
                    .el-tabs__active-bar{
                        display: none;
                    }
                }
                .el-tabs__nav-wrap{
                    height: 80px;
                    &:after{
                        display: none;
                    }
                }
                .el-tabs__item{
                    font-size: 24px;
                    color: #fff;
                    opacity: .5;
                    height: 80px;
                    &:nth-child(2){
                        &.is-active{
                            &:after{
                                margin-left: -25px;
                            }
                        }
                    }
                    &:nth-child(6){
                        &.is-active{
                            &:after{
                                margin-left: -5px;
                            }
                        }
                    }
                    &.is-active{
                        position: relative;
                        opacity: 1;
                        font-weight: bold;
                        &:after{
                            content:"";
                            position: absolute;
                            left: 50% !important;
                            bottom: 20px;
                            margin-left: -15px;
                            background-color: #fff;
                            width: 30px !important;
                            height: 5px !important;
                        }
                    }
                }
            }
            .model-panel{
                position: relative;
                width: 100%;
                height: 620px;
                .model-img{
                    position: absolute;
                    left: 50%;
                    bottom:0;
                    margin-left: -236px;
                }
            }
            .service-panel{
                width: 100%;
                height: 340px;
                background: #fff;
                border-radius: 10px;
                padding: 100px 0;
                el-rows{
                    overflow: hidden;
                }
                .item{
                    position: relative;
                    &:after{
                        content: '';
                        position: absolute;
                        top: 50%;
                        right: 0;
                        margin-top: -165px;
                        background: #cccccc;
                        width: 1px;
                        height: 330px;
                    }
                    &:last-child{
                        &:after{
                            display: none;
                        }
                    }
                    .service-img{
                        display: block;
                        width: 130px;
                        height: 130px;
                        margin: 0 auto;
                        overflow: hidden;
                        background-image: url("../assets/images/service.gif");
                        background-repeat: no-repeat;
                        &.service-rocket{
                            background-position: 0 0;
                        }
                        &.service-layer{
                            background-position: -130px 0;
                        }
                        &.service-plugin{
                            background-position: -260px 0;
                        }
                    }
                }
            }
            .quality-panel{
                width: 100%;
                height: 500px;
                padding: 20px 0;
                background: #fff;
                border-radius: 10px;
                .item{
                    &:first-child,&:nth-child(2),&:nth-child(3){
                        margin-bottom: 10px;
                    }
                }
                .quality-img{
                    width: 180px;
                    height: 120px;
                    display: block;
                    margin: 0 auto;
                    overflow: hidden;
                    background-image: url("../assets/images/quality.jpg");
                    background-repeat: no-repeat;
                    &.quality1{
                        background-position: 0 0;
                    }
                    &.quality2{
                        background-position: -180px 0;
                    }
                    &.quality3{
                        background-position: -360px 0;
                    }
                    &.quality4{
                        background-position: -540px 0;
                    }
                    &.quality5{
                        background-position: -720px 0;
                    }
                    &.quality6{
                        background-position: -900px 0;
                    }
                }
                .service-intro{
                    width: 180px;
                    height: 57px;
                    overflow: auto;
                    margin: 0 auto;
                    color: #666;
                    font-size: 14px;
                    text-align: left;
                }
            }
            .architecture-bancor,.architecture-system{
                border-radius: 10px;
            }

        }
    }
</style>