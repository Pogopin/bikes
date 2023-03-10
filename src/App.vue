<template>
  <div class="layout">
    <Header />
    {{ $t('message.hello') }}
    <select v-model="$i18n.locale">
      <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
        {{ locale }}
      </option>
    </select>
    <div class="test">
      <input type="text" v-model="value">
      <button>
        click
      </button>
    </div>
    <div class="error"
     :class="{ 'visible': !!errorMessage }">
      {{ errorMessage }}
    </div>
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
import { useField } from 'vee-validate'

function validateField (value) {
  if (!value) {
    return 'this field is required'
  }

  if (value.length < 8) {
    return 'this field must contain at least 8 characters'
  }

  return true
}

const { value, errorMessage } = useField('fullName', validateField)

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

.test {
  width: 100%;
  max-width: 300px;
}

.error {
  display: none;
}

.visible {
  display: block;
  color: red;
  border: 1px solid red;
}
</style>
