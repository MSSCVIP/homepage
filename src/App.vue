<template>
  <div id="app">
    <div class="content">
      <div id="nav">
        <router-link to="/">中文</router-link>
        <!--|-->
        <router-link to="/En">EN</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        }
    }
</script>

<style lang="less">
  @import "assets/less/style";
</style>
