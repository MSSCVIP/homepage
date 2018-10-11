<template>
    <div id="wallet">
        <div class="content">
            <div class="cube-swap">
                <div class="swap-head">
                    <div class="head-left">
                        <el-rows>
                            <el-col :span="8"><img src="../../assets/images/eos_active.png" alt=""></el-col>
                            <el-col :span="8" class="head-info">
                                <span class="cc-blue">INITIAl COSTANT</span>
                                <span class="cc-blue">RESERVE</span>
                                <span class="cc-blue">IN</span>
                                <span class="cc-blue">EOS ACCOUNT</span>
                                <span class="cc-pink">CUBECARTFUND</span>
                            </el-col>
                            <el-col :span="8" class="head-eos">
                                <span>150,000</span>
                                <b>EOS</b>
                            </el-col>
                        </el-rows>
                    </div>
                    <div class="head-right">
                        <span>12% CRR</span>
                    </div>
                </div>
                <div class="ibo">
                    <div class="progress">
                        <el-rows class="progress-amount">
                            <el-col :span="5" class="cc-pink text-left">0 EOS</el-col>
                            <el-col :span="5" class="cc-pink text-left">2,000,000 EOS</el-col>
                            <el-col :span="14" class="cc-pink">TOTAL SUPPLY   16,666,666.6666 CBT</el-col>
                        </el-rows>
                        <div class="progress-box">
                            <div class="progress-bar" style="width: 220px;"></div>
                        </div>
                    </div>
                    <div class="ibo-info">
                        <span class="title">IBO</span>
                        <div class="ibo-main">
                            <el-rows>
                                <el-col :span="8">
                                    <img src="../../assets/images/eos_logo.png" alt="">
                                    <p>EOS</p>
                                </el-col>
                                <el-col :span="8">
                                    <img src="../../assets/images/swap_token.png" alt="">
                                </el-col>
                                <el-col :span="8">
                                    <img src="../../assets/images/cubecart_logo.png" alt="">
                                    <p>CBT</p></el-col>
                            </el-rows>
                        </div>
                        <div class="ibo-foot">
                            <el-rows>
                                <el-col :span="8">1</el-col>
                                <el-col :span="8">:</el-col>
                                <el-col :span="8">12</el-col>
                            </el-rows>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wallet-intro">
                <h3 class="text-left">Download Cubewallet To <br>
                    Swap CBT Smart Token</h3>
                <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div class="wallet-btn-box">
                    <a href="#" class="ios-download">
                    </a>
                    <a href="#" class="android-download">
                    </a>
                </div>
            </div>
            <div class="wallet-pic">
                <div class="mac">
                    <img src="../../assets/images/mac-wallet.png" alt="">
                </div>
                <div class="iphone">
                    <img src="../../assets/images/iphone-wallet.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"wallet",
        data(){
            return{}
        }
    }
</script>
