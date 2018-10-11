<template>
    <div id="roadmap">
        <div class="content">
            <div class="title text-center">
                DEVELOPMENT ROADMAP
            </div>
            <div class="roadmap-content">
                <!--<div class="roadmap-list">-->
                    <!--<div class="item">-->
                        <!--<b>Q3 2018</b>-->
                        <!--<img src="../../assets/images/roadmap_2018.png" alt="">-->
                        <!--<div class="item-content">-->
                            <!--<p>1.概念产生</p>-->
                            <!--<p>2.核心团队招聘</p>-->
                            <!--<p>3.白皮书及官网设计</p>-->
                            <!--<p>4.引入战略合作伙伴</p>-->
                            <!--<p>5.通证私募</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="item">-->
                        <!--<b>Q4 2018</b>-->
                        <!--<img src="../../assets/images/roadmap_2018_1.png" alt="">-->
                        <!--<div class="item-content">-->
                            <!--<p>1.通证私募</p>-->
                            <!--<p>2.区块链主链产品POC概念验证</p>-->
                            <!--<p>3.上线交易所</p>-->
                            <!--<p>4.扩充开发及运营团队</p>-->
                            <!--<p>5.雇佣外部顾问（安全团队、营销团队等）</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="item">-->
                        <!--<b>Q1 2019</b>-->
                        <!--<img src="../../assets/images/roadmap_2019.png" alt="">-->
                        <!--<div class="item-content">-->
                            <!--<p>1.部署主链SAAS系统及测试</p>-->
                            <!--<p>2.钱包POC概念验证</p>-->
                            <!--<p>3.钱包通证交易兑换模块测试</p>-->
                            <!--<p>4.图形化智能合约生成工具POC概念验证</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="item">-->
                        <!--<b>Q2 2019</b>-->
                        <!--<img src="../../assets/images/roadmap_2019.png" alt="">-->
                        <!--<div class="item-content">-->
                            <!--<p>1.建立及运营社区论坛及开发者论坛</p>-->
                            <!--<p>2.钱包MVP产品内测</p>-->
                            <!--<p>3.招募区块生产团队</p>-->
                            <!--<p>4.图形化智能合约生成工具MVP测试</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="item">-->
                        <!--<b>Q3 2019</b>-->
                        <!--<img src="../../assets/images/roadmap_2019.png" alt="">-->
                        <!--<div class="item-content">-->
                            <!--<p>1.映射ICO通证至主链</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="item">-->
                        <!--<b>Q4 2019</b>-->
                        <!--<img src="../../assets/images/roadmap_2019.png" alt="">-->
                        <!--<div class="item-content">-->
                            <!--<p>1.部署主链SAAS系统</p>-->
                            <!--<p>2.ICO发行通证映射到主链</p>-->
                            <!--<p>3.待宣布</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="roadmap-list">
                    <div class="item roadmap-down current">
                        <span class="quarter">Q3 2018</span>
                        <el-popover
                                popper-class="roadmap-popper"
                                placement="right"
                                width="300"
                                trigger="hover"
                        >
                            <div class="item-content">
                                <p>1.Conceptual production</p>
                                <p>2.Core team recruitment</p>
                                <p>3.White paper and official website design</p>
                                <p>4.Introducing strategic partners</p>
                                <p>5.Pass-through private placement</p>
                            </div>
                            <div class="item-name" slot="reference">
                                <b>The ideas & Team recruitment</b>
                            </div>
                        </el-popover>
                    </div>
                    <div class="item roadmap-up">
                        <span class="quarter">Q4 2018</span>
                        <el-popover
                                popper-class="roadmap-popper"
                                placement="right"
                                width="400"
                                trigger="hover"
                        >
                            <div class="item-content">
                                <p>1.Pass-through private placement</p>
                                <p>2.Blockchain main chain product POC proof of concept</p>
                                <p>3.On-line exchange</p>
                                <p>4.Expand development and operations team</p>
                                <p>5.Hire external consultants (security team, marketing team)</p>
                            </div>
                            <div class="item-name" slot="reference">
                                <b>Private placement & Operation</b>
                            </div>
                        </el-popover>
                    </div>
                    <div class="item roadmap-down">
                        <span class="quarter">Q1 2019</span>
                        <el-popover
                                popper-class="roadmap-popper"
                                placement="right"
                                width="450"
                                trigger="hover"
                        >
                            <div class="item-content">
                                <p>1.Deploy the main chain SAAS system and test</p>
                                <p>2.Wallet POC proof of concept</p>
                                <p>3.Wallet POC proof of concept</p>
                                <p>4.Graphical smart contract generation tool POC proof of concept</p>
                            </div>
                            <div class="item-name" slot="reference">
                                <b>Main chain,SAAS & Wallet</b>
                            </div>
                        </el-popover>
                    </div>
                    <div class="item roadmap-up">
                        <span class="quarter">Q2 2019</span>
                        <el-popover
                                popper-class="roadmap-popper"
                                placement="right"
                                width="450"
                                trigger="hover"
                        >
                            <div class="item-content">
                                <p>1.Establish and operate community forums and developer forums</p>
                                <p>2.Wallet MVP product internal testing</p>
                                <p>3.Recruitment block production team</p>
                                <p>4.Graphical smart contract generation tool MVP test</p>
                            </div>
                            <div class="item-name" slot="reference">
                                <b>Developer forum & Product test</b>
                            </div>
                        </el-popover>
                    </div>
                    <div class="item roadmap-down">
                        <span class="quarter">Q3 2019</span>
                        <div class="item-name" slot="reference">
                            <b>Map ICO Pass to Main Chain</b>
                        </div>
                        <!--<el-popover-->
                                <!--popper-class="roadmap-popper"-->
                                <!--placement="right"-->
                                <!--width="300"-->
                                <!--trigger="hover"-->
                        <!--&gt;-->
                            <!--<div class="item-content">-->
                                <!--<p>1.Do something</p>-->
                                <!--<p>2.Do something</p>-->
                                <!--<p>3.Do something</p>-->
                                <!--<p>4.Do something</p>-->
                            <!--</div>-->
                        <!--</el-popover>-->
                    </div>
                    <div class="item roadmap-up">
                        <span class="quarter">Q4 2019</span>
                        <el-popover
                                popper-class="roadmap-popper"
                                placement="left"
                                width="350"
                                trigger="hover"
                        >
                            <div class="item-content">
                                <p>1.Deploy the main chain SAAS system</p>
                                <p>2.ICO issuance pass is mapped to the main chain</p>
                                <p>3.To be announced</p>
                            </div>
                            <div class="item-name" slot="reference">
                                <b>Main network mapping</b>
                            </div>
                        </el-popover>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'roadmap'
    }
</script>
