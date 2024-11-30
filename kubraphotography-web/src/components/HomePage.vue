<script>

import NavbarComp from '../components/NavbarComp.vue';
import FooterComp from './FooterComp.vue';

export default {
  components:{NavbarComp,FooterComp},
}


</script>

<template>

  <div class="container-fluid headpd">
    <NavbarComp/>
  </div>

  <h1>ANA SAYFA</h1>

  <div class="container-fluid">
    <FooterComp/>
  </div>
  
 
</template>

<style scoped>
.headpd{
  padding: 0;
}
</style>
