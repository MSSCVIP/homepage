<template>
    <div id="footer">
        <div class="content">
            <el-rows justify="center">
                <el-col :span="24">
                    ALL RIGHTS RESERVED © MSSC 2018
                </el-col>
            </el-rows>
        </div>
    </div>
</template>
<script>
    export default {
        name:'footer'
    }
</script>
<style lang="less">
    #footer{
        color: #666;
        text-align: center;
        line-height: 60px;
        height: 60px;
        background: #dddddd;
    }
</style>