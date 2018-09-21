<template>
    <div id="mnav">
        <ul>
            <li class="active"><a href="#">首页</a></li>
            <li class=""><a href="#white-paper">白皮书</a></li>
            <li class=""><a href="#architecture">概述</a></li>
            <li class=""><a href="#roadmap">进度</a></li>
            <li class=""><a href="#about">关于</a></li>
        </ul>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'mnav',
        components: {
        }
    }
</script>
<!--style[lang="less"]-->

<style lang="less">
    #mnav{
        padding:0;
        text-align: right;
        overflow: hidden;
        ul{
            float: right;
            li{
                position:relative;
                list-style-type: none;
                float: left;
                width: 140px;
                height: 86px;
                line-height: 86px;
                text-align: right;
                a{
                    font-size: 16px;
                    font-weight: bold;
                    color: #fff;
                    text-decoration: none;
                }
                &.active{
                    a:before{
                        content:"";
                        display:block;
                        position:absolute;
                        right: 0px;
                        bottom: 20px;
                        width:30px;
                        height:2px;
                        background:#fff;
                    }
                }
            }
        }
    }
</style>