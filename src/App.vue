<template>
  <div id="app">
    
    <router-view></router-view>
    <tab-footer></tab-footer>
  </div>
</template>

<script>
// import TabHeader from './components/TabHeader.vue'
import TabFooter from './components/TabFooter.vue'

export default {
  name: 'App',
  components: {
    // TabHeader,
    TabFooter
  }
}
</script>

<style>
html,body{
  padding:0; 
  margin:0;
  background-color: #000;
  font-family: 'Noto Sans KR','맑은고딕', 'Malgun Gothic', '돋움', Dotum, 'Apple Gothic', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffff;
  margin:0; padding:0;
}
a {
  color : #ffff !important;
}
.none {
  display : none;
}

</style>
