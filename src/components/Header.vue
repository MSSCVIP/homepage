<template>
<div id="header">
    <div class="content">
        <el-rows justify="space-between">
            <el-col :span="8">
                <div class="logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
            </el-col>
            <el-col :span="16">
                <Nav></Nav>
            </el-col>
        </el-rows>
    </div>
</div>
</template>

<script>
    // @ is an alias to /src
    import Nav from "@/components/Nav"

    export default {
        name: 'header',
        components: {
            Nav
        }
    }
</script>
<style lang="less">
    #header{
        .logo{
            text-align: left;
        }

    }
</style>