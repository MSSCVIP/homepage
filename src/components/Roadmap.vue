<template>
    <div id="roadmap">
        <div class="content">
            <div class="title">
                <span class="ms-blue">开发</span>
                <span class="">进度</span>
            </div>
            <img src="../assets/images/roadmap.jpg" class="roadmap-left" alt="">
            <div class="roadmap-content">
                <div class="roadmap-list">
                    <div class="item">
                        <b>Q3 2018</b>
                        <img src="../assets/images/roadmap_2018.png" alt="">
                        <div class="item-content">
                            <p>1.概念产生</p>
                            <p>2.核心团队招聘</p>
                            <p>3.白皮书及官网设计</p>
                            <p>4.引入战略合作伙伴</p>
                            <p>5.通证私募</p>
                        </div>
                    </div>
                    <div class="item">
                        <b>Q4 2018</b>
                        <img src="../assets/images/roadmap_2018_1.png" alt="">
                        <div class="item-content">
                            <p>1.通证私募</p>
                            <p>2.区块链主链产品POC概念验证</p>
                            <p>3.上线交易所</p>
                            <p>4.扩充开发及运营团队</p>
                            <p>5.雇佣外部顾问（安全团队、营销团队等）</p>
                        </div>
                    </div>
                    <div class="item">
                        <b>Q1 2019</b>
                        <img src="../assets/images/roadmap_2019.png" alt="">
                        <div class="item-content">
                            <p>1.部署主链SAAS系统及测试</p>
                            <p>2.钱包POC概念验证</p>
                            <p>3.钱包通证交易兑换模块测试</p>
                            <p>4.图形化智能合约生成工具POC概念验证</p>
                        </div>
                    </div>
                    <div class="item">
                        <b>Q2 2019</b>
                        <img src="../assets/images/roadmap_2019.png" alt="">
                        <div class="item-content">
                            <p>1.建立及运营社区论坛及开发者论坛</p>
                            <p>2.钱包MVP产品内测</p>
                            <p>3.招募区块生产团队</p>
                            <p>4.图形化智能合约生成工具MVP测试</p>
                        </div>
                    </div>
                    <div class="item">
                        <b>Q3 2019</b>
                        <img src="../assets/images/roadmap_2019.png" alt="">
                        <div class="item-content">
                            <p>1.映射ICO通证至主链</p>
                        </div>
                    </div>
                    <div class="item">
                        <b>Q4 2019</b>
                        <img src="../assets/images/roadmap_2019.png" alt="">
                        <div class="item-content">
                            <p>1.部署主链SAAS系统</p>
                            <p>2.ICO发行通证映射到主链</p>
                            <p>3.待宣布</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'roadmap',
        data(){

        }
    }
</script>
<style lang="less">
    #roadmap{
        position: relative;
        padding-top: 120px;
        text-align: left;
        .roadmap-left{
        }
        .roadmap-content{
            position: absolute;
            left: 50%;
            top: 120px;
            &:before{
                position: absolute;
                content:"";
                margin:10px auto;
                width:2px;
                height:600px;
                background-color: #d8dfff;
            }
            .roadmap-list{
                position: absolute;
                min-width:560px;
                left: -172px;
                .item{
                    display: block;
                    overflow: hidden;
                    font-size: 16px;
                    color:#666666;
                    margin-bottom: 20px;
                    b{
                        float: left;
                        width: 112px;
                        margin:0 10px;
                        font-family: Arial;
                        font-weight: bold;
                        text-align: center;
                        font-size: 24px;
                        height: 52px;
                        line-height: 52px;
                    }
                    img{
                        float: left;
                        margin: 0 17.5px;
                    }
                    .item-content{
                        float: left;
                        margin:0 15px;
                        text-align: left;
                        p{
                            line-height: 24px;
                            margin:0;
                        }
                    }
                }
                .item:first-child{
                    b{
                        height: 69px;
                        line-height: 69px;
                    }
                    img{
                        margin:0 10px;
                    }
                }
            }
        }
    }
</style>