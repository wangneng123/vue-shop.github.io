<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderNav from './components/Header'
import FooterNav from './components/Footer'
export default {
  components:{
    HeaderNav,
    FooterNav
  },
  name: 'App'
}
</script>

<style lang="scss">
@import "./assets/scss/public";
</style>
