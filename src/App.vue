<template>
  <div class="layout">
    <Header />
    {{ $t('message.hello') }}
    <select v-model="$i18n.locale">
      <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
        {{ locale }}
      </option>
    </select>
    <div class="layout__content">
      <AppLayout>
        <RouterView />
      </AppLayout>
    </div>
    <Contacts />
    <Footer />
  </div>
</template>

<script setup>
import { Header, Footer, Contacts } from '../src/components/sections/index'
import { ref } from 'vue'
import AppLayout from './layouts/AppLayout.vue'

const locales = ref([ 'ru', 'ja' ])
</script>

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
