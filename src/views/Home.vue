<template>
  <div class="home">
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

    import Banner from '@/components/cn/Banner'
    import WhitePaper from '@/components/cn/WhitePaper'
    import Architecture from '@/components/cn/Architecture'
    import Roadmap from '@/components/cn/Roadmap'
    import About from '@/components/cn/About'
    import Footer from '@/components/cn/Footer'

    export default {
        name: 'home',
        components: {
            Banner,
            WhitePaper,
            Architecture,
            Roadmap,
            About,
            Footer
        },
    };
</script>
