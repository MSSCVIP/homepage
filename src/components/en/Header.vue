<template>
    <div id="mheader" ref="header">
        <div class="content">
            <el-rows justify="space-between">
                <el-col :span="4">
                    <div class="logo">
                        <img src="../../assets/images/logo.png" alt="">
                    </div>
                </el-col>
                <el-col :span="20">
                    <Mnav></Mnav>
                </el-col>
            </el-rows>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Mnav from "@/components/en/Nav"

    export default {
        name: 'mheader',
        components: {
            Mnav
        },
        mounted() {
            window.onscroll = () => {
                let top = document.documentElement.scrollTop || document.body.scrollTop;

                let solution = document.getElementById('solution').offsetTop - 20;
                let roadmap = document.getElementById('roadmap').offsetTop - 20;
                let team = document.getElementById('team').offsetTop - 180;
                if (top >= 100) {
                    this.$refs['header'].className = 'fixed';
                }else{
                    this.$refs['header'].className = '';
                }

                if(top == 0 || top < team){
                    this.activeNav(0)
                }
                if (top > solution ) {
                    this.activeNav(1)
                }
                if (top > roadmap ) {
                    this.activeNav(4)
                }
                if (top > team ) {
                    this.activeNav(5)
                }
            }
        },
        methods:{
            activeNav(target){
                let lis = document.getElementById('mnav').childNodes[0].childNodes;
                for (let i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                }
                lis[target].className = 'active';

            }
        }

    }
</script>
