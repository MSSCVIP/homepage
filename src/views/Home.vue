<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Banner></Banner>
    <WhitePaper></WhitePaper>
    <Architecture></Architecture>
    <Roadmap></Roadmap>
    <About></About>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import 'element-ui/lib/theme-chalk/index.css'
import Banner from '@/components/Banner'
import WhitePaper from '@/components/WhitePaper'
import Architecture from '@/components/Architecture'
import Roadmap from '@/components/Roadmap'
import About from '@/components/About'
import Footer from '@/components/Footer'
export default {
  name: 'home',
  components: {
    // HelloWorld
      Banner,
      WhitePaper,
      Architecture,
      Roadmap,
      About,
      Footer
  }
}
</script>
<style lang="less">
  @msBlue:#6c81e2;
  @msYellow:#f5ae48;

  html,body{
    margin:0;
    padding:0;
    color:#444;
    background: #f1f2f3;
  }
  .ms-btn{
    width: 140px;
    height: 16px;
    line-height: 16px;
    color: #fff;
    background: @msBlue;
    padding: 20px 30px;
    border-radius: 28px;
    cursor: pointer;
  }
  .ms-bg-yellow{
    background: @msYellow!important;
    -webkit-box-shadow:  0 5px 15px @msYellow;
    -moz-box-shadow:  0 5px 15px @msYellow;
    box-shadow:  0 5px 15px @msYellow;
  }
  .with-arrow{
    position: relative;
    &:after{
      content:"";
      position: absolute;
      right:30px;
      top: 16px;
      width: 24px;
      height: 24px;
      background:url("../assets/images/arrow.png") 0 0 no-repeat;
    }
  }
  .ms-blue{
    color:@msBlue;
  }
  .content{
    width: 1280px;
    margin:0 auto;
    .title{
      position: relative;
      text-align: left;
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 80px;
      &:after{
        content:"";
        position: absolute;
        left: 0;
        bottom:-40px;
        width: 50px;
        height: 5px;
        background-color: @msBlue;
      }
    }
  }
</style>