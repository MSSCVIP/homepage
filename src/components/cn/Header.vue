<template>
<div id="mheader">
    <div class="content">
        <el-rows justify="space-between">
            <el-col :span="8">
                <div class="logo">
                    <img src="../../assets/images/logo.png" alt="">
                </div>
            </el-col>
            <el-col :span="16">
                <Mnav></Mnav>
            </el-col>
        </el-rows>
    </div>
</div>
</template>

<script>
    // @ is an alias to /src
    import Mnav from "@/components/cn/Nav"

    export default {
        name: 'mheader',
        components: {
            Mnav
        }
    }
</script>