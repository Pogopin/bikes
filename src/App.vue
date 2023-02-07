<template>
  <div class="layout">
    <Header />
    <div class="layout__content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { Header, Footer } from '../src/components/index'
</script>


