<template>
  <div class="en">
    <Banner></Banner>
    <WhitePaper></WhitePaper>
    <Architecture></Architecture>
    <Roadmap></Roadmap>
    <About></About>
    <Footer></Footer>
  </div>
</template>
<script>
  import Banner from '@/components/en/Banner'
  import WhitePaper from '@/components/en/WhitePaper'
  import Architecture from '@/components/en/Architecture'
  import Roadmap from '@/components/en/Roadmap'
  import About from '@/components/en/About'
  import Footer from '@/components/en/Footer'
  export default {
      name: 'en',
      components:{
          Banner,
          WhitePaper,
          Architecture,
          Roadmap,
          About,
          Footer
      }
  }
</script>
