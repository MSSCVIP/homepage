<template>
  <div class="home">
    <Banner></Banner>
    <!--<p>{{$t('Create & deploy your e-Business fast')}}</p>-->
    <Wallet></Wallet>
    <Cubecart></Cubecart>
    <Work></Work>
    <Bancor></Bancor>
    <Plug></Plug>
    <Function></Function>
    <Roadmap></Roadmap>
    <Team></Team>
    <Footer></Footer>
  </div>
</template>

<script>
    // @ is an alias to /src

    import Banner from '@/components/Banner'
    // import WhitePaper from '@/components/en/WhitePaper'
    // import Architecture from '@/components/en/Architecture'
    import Roadmap from '@/components/Roadmap'
    import Footer from '@/components/Footer'
    import Wallet from '@/components/Wallet'
    import Cubecart from '@/components/Cubecart'
    import Work from '@/components/Work'
    import Team from '@/components/Team'
    import Bancor from '@/components/Bancor'
    import Plug from '@/components/Plug'
    import Function from '@/components/Function'

    export default {
        name: 'home',
        components: {
            Banner,
            Wallet,
            Cubecart,
            Work,
            Team,
            Roadmap,
            Footer,
            Bancor,
            Plug,
            Function
        },
    };
</script>
