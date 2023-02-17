<template>
  <div class="layout">
    <Header />
    <div class="layout__content">
      <RouterView />
    </div>
    <Contacts />
    <Footer />
  </div>
</template>
<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.layout__content {
  flex: 1;
}
</style>

<script setup>
import { RouterView } from 'vue-router'
import { Header, Footer, Contacts } from '../src/components/sections/index'
// import { Contacts } from '../src/components/widgets/index'
</script>


