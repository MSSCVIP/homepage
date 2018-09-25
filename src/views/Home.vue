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
import Banner from '@/components/cn/Banner'
import WhitePaper from '@/components/cn/WhitePaper'
import Architecture from '@/components/cn/Architecture'
import Roadmap from '@/components/cn/Roadmap'
import About from '@/components/cn/About'
import Footer from '@/components/cn/Footer'
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