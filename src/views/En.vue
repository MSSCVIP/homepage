<template>
  <div class="en">
    <Banner></Banner>
    <Wallet></Wallet>
    <Cubecart></Cubecart>
    <Work></Work>
    <Architecture></Architecture>
    <Roadmap></Roadmap>
    <Team></Team>
    <Footer></Footer>
  </div>
</template>
<script>
    import Banner from '@/components/en/Banner'
    import WhitePaper from '@/components/en/WhitePaper'
    import Architecture from '@/components/en/Architecture'
    import Roadmap from '@/components/en/Roadmap'
    import Footer from '@/components/en/Footer'
    import Wallet from '@/components/en/Wallet'
    import Cubecart from '@/components/en/Cubecart'
    import Work from '@/components/en/Work'
    import Team from '@/components/en/Team'

    export default {
        name: 'en',
        components:{
            Banner,
            Wallet,
            Cubecart,
            Work,
            Team,
            Architecture,
            Roadmap,
            Footer
        }
    }
</script>
