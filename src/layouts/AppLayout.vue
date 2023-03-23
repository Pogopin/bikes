<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
 <nav class="nav">
   <span class="nav__item" @click="$router.push('/')">Index</span>
   <span class="nav__item" @click="$router.push('/bicicletas')">Bicicletas</span>
   <span class="nav__item" @click="$router.push('/seguros')">Seguros</span>
   <span class="nav__item" @click="$router.push('/Contato')">Contact</span>
 </nav>
  <div class="content">
    <component :is="route.meta.layoutComponent">
      <slot />
    </component>
  </div>
</template>

<style scoped>
.nav {
  margin: 25px auto 0;
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: 20px;
}

.nav__item {
  cursor: pointer;
  font-size: 20px;
}

.content {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
</style>
