<template>
  <div id="app">
    <div class="content">
      <!--<div id="nav">-->
        <!--<router-link to="/">about</router-link>-->
        <!--&lt;!&ndash;|&ndash;&gt;-->
        <!--<router-link to="#solution">solution</router-link>-->
      <!--</div>-->
    </div>
    <router-view/>
  </div>
</template>

<script>
    import vuex from 'vuex'

    export default {
        name: 'app',
        components: {
        }
    }
</script>

<style lang="less">
  @import "assets/less/style";
</style>
