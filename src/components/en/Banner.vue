<template>
    <div id="banner">
        <Mheader></Mheader>
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
    import Mheader from "@/components/en/Header"

    export default {
        name: "banner",
        components: {
            Mheader
        }
    }
</script>