<script>
import axios from 'axios';
import { store } from './store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      store,
      // hello: 'ciao'
    }
  },
}
</script>

<template>
  <div>
    <!-- {{ hello }} -->
    <Header></Header>
    <router-view></router-view>
    <Main></Main>
    <Footer></Footer>
  </div>
  
</template>

<style lang="scss">
@use './styles/generals.scss' as *;

// @include flex; mixins
// color: $darkgray; variables

</style>
