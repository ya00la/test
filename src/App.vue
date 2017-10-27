<template>
  <div class="page-group" id="app">
    <div class="page page-current">
      <header-top></header-top>
      <router-view/>
    </div>
  </div>
  </div>
</template>

<script>
import HeaderTop from './components/Header'

export default {
  name: 'app',
  components: {
    HeaderTop
  }

}
</script>

<style>
@import './assets/css/sm.min.css';
 @import './assets/css/common.css';

</style>
