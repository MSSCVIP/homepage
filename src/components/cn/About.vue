<template>
    <div id="about">
        <div class="content">
            <div class="title ms-blue">
                项目团队
            </div>
            <el-rows :gutter="40">
                <el-col :span="6">
                    <div class="grid-content text-center">
                        <img src="../../assets/images/team1.jpg" alt="">
                        <b>BuaKaw（创始人 &CTO）</b>
                        <p>
                            EOS 主网启动成员之一，香港26 小时现场制作区块链应用前十强，绝对的技术极客，精通区块链底层技术逻辑，市值管理，交易所原理。
                        </p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content text-center">
                        <img src="../../assets/images/team2.jpg" alt="">
                        <b>佐佑</b>
                        <p>
                            互联网创业者，资深网络工程师，6 年软件行业工作经验，带领的团队在信息抓取与分析、桌面应用程序、web 应用开发等领域有丰富经验。
                        </p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content text-center">
                        <img src="../../assets/images/team3.jpg" alt="">
                        <b>SkyHigh</b>
                        <p>
                            互联网连续创业者 ,6 年互联网行业经验；<br>
                            资深产品策划 , 前腾讯 TEG 后台架构师；<br>
                            前后端全栈工程师 , AI 及区块链早期开发者；<br>
                            带领团队产品架构的策划 , 钱包和应用界面开发。<br>
                        </p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content text-center">
                        <img src="../../assets/images/team4.jpg" alt="">
                        <b>NewWay</b>
                        <p>
                            中国国防科技大学硕士，12 年IT 行业经验，历任亿讯科技，品高软件，爱立信广州数据业务研发中心，汇丰软件软件工程师，项目经理，Java 架构师。
                        </p>
                    </div>
                </el-col>
            </el-rows>
        </div>
    </div>
</template>
<script>
    export default {
        name:'about',
        data(){
            return{

            }
        }
    }
</script>