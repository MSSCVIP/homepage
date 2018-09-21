<template>
    <div id="banner">
        <Header></Header>
        <div class="banner-content">
            <div class="content">
                <el-rows justify="center">
                    <el-col :span="24">
                        <h1>THIS IS A SLOGAN</h1>
                    </el-col>
                    <el-col :span="24">
                        <p>
                            <b>MAGIC SQUARE SHARE CHAIN</b>
                        </p>
                        <span>WIDELY USED IN MULTI-APPLICATION SCENARIOS</span>
                    </el-col>
                </el-rows>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from "@/components/Header"

    export default {
        name: "banner",
        components: {
            Header
        }
    }
</script>
<style lang="less">
    #banner {
        padding-top: 40px;
        width: 100%;
        height: 760px;
        background:url("../assets/images/head_bg.jpg") 0 0 no-repeat;
        .banner-content{
            h1{
                margin-top: 120px;
                position: relative;
                font-size:100px;
                color:#fff;
                &:after{
                    content:"";
                    display: block;
                    position:absolute;
                    bottom:-50px;
                    left:50%;
                    margin-left: -25px;
                    width:50px;
                    height: 5px;
                    background:#f5ae48;
                }
            }
            p{
                color:#f5ae48;
                font-size:32px;
                margin-bottom: 5px;
            }
            span{
                color:#f5ae48;
            }
        }
    }
</style>