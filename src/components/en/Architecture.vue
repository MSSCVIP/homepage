<template>
    <div id="architecture">
        <div class="content">
            <el-tabs v-model="activeName" stretch="true" class="architecture-tabs">
                <el-tab-pane label="生态模型" name="first">
                    <div class="model-panel">
                        <img src="../../assets/images/model.png" class="model-img" alt="">
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
                        <img src="../../assets/images/architecture-bancor.jpg" class="architecture-bancor" alt="">
                    </div>
                </el-tab-pane>
                <el-tab-pane label="系统架构" name="fifth">
                    <div class="architecture-panel">
                        <img src="../../assets/images/architecture-system.gif" class="architecture-system" alt="">
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