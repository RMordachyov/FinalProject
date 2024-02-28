<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template class="test">
  <header>
    <div class="wrapper">
      <HeaderComponent />
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="wrapper footer__component">
      <FooterComponent />
    </div>
  </footer>
</template>



<style scoped>
</style>
