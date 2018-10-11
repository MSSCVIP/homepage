<template>
    <div id="cubecart">
        <div class="content">
            <el-dialog class="play-box" :visible.sync="seen" width="50%">
                <b>video</b>
            </el-dialog>
            <div class="title text-center">
                WHAT IS CUBECART?
            </div>
            <el-rows>
                <el-col :span="12">
                    <div class="video">
                        <div class="play-btn" @click="seen=true"><img src="../../assets/images/play.png" alt=""></div>
                    </div>
                </el-col>
                <el-col :span="12" class="text-left">
                    <h3>We’re building a blockchain <br> based e-business platform to <br>make it easier for you.</h3>
                    <div class="wallet-info-list">
                            <el-rows class="item">
                                <el-col :span="4">
                                    <div class="side-chain wallet-icons"></div>
                                </el-col>
                                <el-col :span="20">
                                    <p>
                                        We’ve deployed our own <span>EOS side-chain </span>and corporate with main-net BP to validate transaction of on-chain shopping.
                                    </p>
                                </el-col>
                            </el-rows>
                        <el-rows class="item">
                            <el-col :span="4">
                                <div class="saas wallet-icons"></div>
                            </el-col>
                            <el-col :span="20">
                                <p>
                                    While existing solutions offer to solve just one problem at a time, our team is up to build a secure, useful, & easy-to-use <span>e-business SAAS</span> for on-chain shopping.
                                </p>
                            </el-col>
                        </el-rows>
                        <el-rows class="item">
                            <el-col :span="4">
                                <div class="digital wallet-icons"></div>
                            </el-col>
                            <el-col :span="20">
                                <p>
                                    At the end, Our aims to integrate e-business companies, employees, and business assets by <span>digital wallet</span> into a unified blockchain ecosystem, which will make business truly efficient, transparent, and reliable.
                                </p>
                            </el-col>
                        </el-rows>

                        <div class="whitepaper-btn">
                            <el-button @click="$store.commit('DOWNLOADWP')" class="cc-btn">DOWNLOAD WHITEPAPER</el-button>
                        </div>
                    </div>
                </el-col>
            </el-rows>
        </div>
    </div>
</template>
<script>
    export default {
        name: "cubecart",
        data() {
            return {
                seen: false
            }
        }
    }
</script>
