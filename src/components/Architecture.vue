<template>
    <div id="architecture">
        <el-tabs v-model="activeName">
            <el-tab-pane label="生态模型" name="first">

            </el-tab-pane>
            <el-tab-pane label="功能模块" name="second">功能模块</el-tab-pane>
            <el-tab-pane label="优势" name="third">优势</el-tab-pane>
            <el-tab-pane label="BANCOR" name="fourth">BANCOR</el-tab-pane>
            <el-tab-pane label="系统架构" name="fourth">系统架构</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>

    export default {
        name: "banner",
        data(){
            return{
                activeName:"second"
            }
        },
        components: {
        }
    }
</script>