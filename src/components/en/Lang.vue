<template>
    <div id="lang">
        <div class="lang-btn" @click="showList">
            <i :class="defatult.class"></i><span>{{defatult.lang}}</span>
        </div>
        <div class="lang-list" v-if="show">
            <div class="item" v-for="(item,index) in langs" :data-index="index" @click="switchLang(index,item)">
                <i :class="item.lang"></i><span>{{item.lang}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'lang',
        data(){
            return{
                defatult:{"lang":"ZH","class":"cn-icon"},
                langs:[
                    {"lang":"EN","class":"en-icon"},
                    {"lang":"KO","class":"ko-icon"},
                    {"lang":"JP","class":"jp-icon"}
                ],
                show:false
            }
        },
        mounted(){
        },
        methods:{
            showList(){
                if(!this.show){
                    this.show = true;
                }else {

                    this.show = false;
                }
            },
            switchLang(index,obj){
                //this.langs = this.defatult
                console.info(JSON.stringify(this.langs))
                // let oldLang = JSON.parse(JSON.stringify(this.defatult));
                // this.defatult = obj;
                // this.langs.splice(index,oldLang);
                // console.info(index,oldLang,JSON.stringify(this.langs))
                 this.show = false;
            }
        }
    }
</script>
<style lang="less">
    @background:rgba(255,255,255,.6);
    #lang{
        position:absolute;
        right: 0;
        top: 20px;
        z-index: 1001;
        .lang-btn{
            overflow: hidden;
            width: 88px;
            height: 40px;
            background: @background;
            border-radius: 4px;
            padding: 0 12px;
            line-height: 40px;
            cursor: pointer;
            &:after{
                content: "";
                position: absolute;
                top: 13px;
                right: 12px;
                width: 25px;
                height: 14px;
                background: url("../../assets/images/arrow-down.png") 0 0 no-repeat;
            }
        }
        .lang-list{
            background: @background;
            border-radius: 4px;
            margin-top: 15px;
            .item{
                height: 40px;
                line-height: 40px;
                padding: 0 12px;
                cursor: pointer;
                -webkit-transition: all .3s ease;
                -moz-transition: all .3s ease ;
                -ms-transition: all .3s ease ;
                -o-transition: all .3s ease ;
                transition: all .3s ease ;
                &:hover{
                    background:rgba(255,255,255,.3);
                }
                &:last-child{
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                &:first-child{
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                }
            }
        }
        i{
            float: left;
            width: 23px;
            height: 23px;
            margin: 8.5px 8.5px 8.5px 0;
            background: url("../../assets/images/lang.png") 0 0 no-repeat;
        }
        span{
            float: left;
            color: #fff;
            font-size: 20px;
        }
        .ZH{
            background-position: 0 0;
        }
        .EN{
            background-position: 0 -23px;
        }
        .KO{
            background-position: 0 -69px;
        }
        .JP{
            background-position: 0 -46px;
        }
    }
</style>
